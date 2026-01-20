import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY!);

// 언어 감지
function detectLanguage(text: string): 'ko' | 'en' {
  const koreanRegex = /[\uAC00-\uD7A3]/;
  return koreanRegex.test(text) ? 'ko' : 'en';
}

const intensityRules = {
  ko: {
    light: '- 전체 단어의 약 20-30%만 강조',
    medium: '- 전체 단어의 약 40-50%만 강조',
    strong: '- 전체 단어의 약 60-70%만 강조',
  },
  en: {
    light: '- Emphasize about 20-30% of words',
    medium: '- Emphasize about 40-50% of words',
    strong: '- Emphasize about 60-70% of words',
  },
};

export async function convertToBionic(
  text: string, 
  settings: {
    intensity: 'light' | 'medium' | 'strong';
    language: 'ko' | 'en' | 'auto';
  }
) {
  const detectedLanguage = settings.language === 'auto' ? detectLanguage(text) : settings.language;
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

  const intensityRule = intensityRules[detectedLanguage][settings.intensity];

  const prompt = detectedLanguage === 'ko' ? `
텍스트 읽기를 돕기 위해 일부 단어의 앞부분만 굵게 만들어주세요.

규칙:
- 중요한 명사와 동사의 앞부분에만 <b> 태그 추가
- 조사(은/는/이/가/을/를/에/서/로 등)는 굵게 하지 않음
- 접속사, 부사, 짧은 단어(1-2글자)는 굵게 하지 않음
${intensityRule}

좋은 예시:
입력: 기능 목적으로 사용되는 쿠키 및 이와 유사한 기술
출력: <b>기능</b> <b>목적</b>으로 <b>사용</b>되는 <b>쿠키</b> 및 이와 <b>유사</b>한 <b>기술</b>

텍스트:
${text}

결과:` : `
Help improve text readability by making the beginning of important words bold.

Rules:
- Add <b> tags to the first part of important nouns and verbs only
- Skip articles (a, an, the), prepositions, and short words
${intensityRule}

Good example:
Input: Users can access basic features of the service
Output: <b>Use</b>rs can <b>acc</b>ess <b>bas</b>ic <b>feat</b>ures of the <b>ser</b>vice

Text:
${text}

Result:`;

  try {
    const result = await model.generateContent(prompt);
    const response = result.response;
    let convertedText = response.text();
    
    // 불필요한 마크다운 제거
    convertedText = convertedText.replace(/```html\n?/g, '').replace(/```\n?/g, '');
    convertedText = convertedText.replace(/^\s*/, '').replace(/\s*$/, '');
    
    return convertedText;
  } catch (error) {
    console.error('Gemini API 오류:', error);
    throw new Error('AI 변환 중 오류가 발생했습니다. 다시 시도해주세요.');
  }
}