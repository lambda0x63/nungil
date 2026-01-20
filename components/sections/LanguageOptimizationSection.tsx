import { Card } from "@/components/ui/card";

export function LanguageOptimizationSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              개발 예정인 언어별 최적화
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground">
              한국어와 영어의 구조적 차이를 고려한 구현 계획
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 border border-gray-200/60 dark:border-gray-700/60">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">EN</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold">영어 최적화</h3>
              </div>
              <svg className="w-full h-24 mb-6" viewBox="0 0 300 80" xmlns="http://www.w3.org/2000/svg">
                <text x="20" y="40" className="text-2xl font-bold fill-current">
                  <tspan fontWeight="bold">Rea</tspan><tspan fontWeight="normal">ding</tspan>
                </text>
                <text x="120" y="40" className="text-2xl font-bold fill-current">
                  <tspan fontWeight="bold">Exa</tspan><tspan fontWeight="normal">mple</tspan>
                </text>
                <text x="220" y="40" className="text-2xl font-bold fill-current">
                  <tspan fontWeight="bold">Te</tspan><tspan fontWeight="normal">xt</tspan>
                </text>
                <text x="150" y="70" textAnchor="middle" className="text-xs text-muted-foreground fill-current">40-50% 강조</text>
              </svg>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5"></div>
                  <div>
                    <div className="font-semibold mb-1">알파벳 기반 구조</div>
                    <div className="text-sm text-muted-foreground">기존 연구에 따르면 단어당 평균 4.3개 글자 전치 가능</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5"></div>
                  <div>
                    <div className="font-semibold mb-1">음절 단위 처리</div>
                    <div className="text-sm text-muted-foreground">접두사, 어근, 접미사 구분하여 강조하는 방식을 연구 중</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5"></div>
                  <div>
                    <div className="font-semibold mb-1">최적 강조 비율</div>
                    <div className="text-sm text-muted-foreground">단어 길이의 40-50% 볼드 처리 방식 참고</div>
                  </div>
                </li>
              </ul>
            </Card>
            
            <Card className="p-8 border border-gray-200/60 dark:border-gray-700/60">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">한</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold">한국어 최적화</h3>
              </div>
              <svg className="w-full h-24 mb-6" viewBox="0 0 300 80" xmlns="http://www.w3.org/2000/svg">
                <text x="30" y="40" className="text-2xl font-bold fill-current">
                  <tspan fontWeight="bold">읽기</tspan><tspan fontWeight="normal">는</tspan>
                </text>
                <text x="110" y="40" className="text-2xl font-bold fill-current">
                  <tspan fontWeight="bold">쉬운</tspan><tspan fontWeight="normal">일</tspan>
                </text>
                <text x="190" y="40" className="text-2xl font-bold fill-current">
                  <tspan fontWeight="bold">아니</tspan><tspan fontWeight="normal">다</tspan>
                </text>
                <text x="150" y="70" textAnchor="middle" className="text-xs text-muted-foreground fill-current">어절 단위 처리</text>
              </svg>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5"></div>
                  <div>
                    <div className="font-semibold mb-1">한글 음절 구조</div>
                    <div className="text-sm text-muted-foreground">초성-중성-종성 조합으로 인한 1.2개 전치 한계 극복 필요</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5"></div>
                  <div>
                    <div className="font-semibold mb-1">어절 단위 처리</div>
                    <div className="text-sm text-muted-foreground">조사와 어간 분리하여 의미 단위 강조하는 방식으로 개발 예정</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5"></div>
                  <div>
                    <div className="font-semibold mb-1">문맥 기반 강조</div>
                    <div className="text-sm text-muted-foreground">AI가 문장 내 중요도를 분석하여 적용하는 기능 구현 계획</div>
                  </div>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}