# 눈길 (Nungil)

한글 바이오닉 리딩 서비스

## 기능

- 한글 특화 바이오닉 리딩
- Google Gemini AI 문맥 분석
- 개인화 강조 강도 조절
- 인터랙티브 데모 (마우스 커서 기반)
- Supabase 사용자 데이터 관리

## 기술 스택

- Next.js 15 (App Router)
- Google Generative AI (Gemini Flash)
- Supabase (Auth / Database)
- Tailwind CSS v4
- Radix UI
- Framer Motion

## 설치

```bash
npm install
npm run dev
```

## 환경 변수

```env
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
GOOGLE_GENERATIVE_AI_API_KEY=...
```
