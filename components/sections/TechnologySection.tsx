import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, Brain, Sparkles } from "lucide-react";

export function TechnologySection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              개발 예정인 기술 구성
            </h2>
            <p className="text-xl text-muted-foreground">
              AI 기반 한국어 분석과 개인화 알고리즘 구현 계획
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <Eye className="w-12 h-12 text-primary" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">1</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">시각적 고정점 생성</h3>
              <p className="text-muted-foreground leading-relaxed">
                단어별 중요도 분석을 통해 시선이 집중되는 
                지점을 시각적으로 표시하는 기능을 구현 예정입니다
              </p>
            </div>
            
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <Brain className="w-12 h-12 text-primary" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">2</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">언어별 최적화</h3>
              <p className="text-muted-foreground leading-relaxed">
                한글의 음절 구조와 영어의 형태소 차이를 고려하여
                언어적 특성에 맞는 처리 알고리즘을 개발할 예정입니다
              </p>
            </div>
            
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <Sparkles className="w-12 h-12 text-primary" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">3</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">AI 기반 개인화</h3>
              <p className="text-muted-foreground leading-relaxed">
                사용자의 읽기 속도와 이해도 패턴을 분석하여
                개인별 최적화된 강조 수준을 제공하는 기능을 계획 중입니다
              </p>
            </div>
          </div>
          
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2">
                <div className="p-8 md:p-12">
                  <Badge className="mb-4">핵심 기술</Badge>
                  <h3 className="text-2xl font-bold mb-4">
                    Gemini AI로 구현 예정인
                    <br />
                    지능형 바이오닉 리딩
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Google의 Gemini AI 모델을 활용하여 문맥을 이해하고,
                    의미 단위로 텍스트를 분석하는 시스템을 개발 중입니다. 
                    단순한 패턴 매칭이 아닌, 진정한 언어 이해를 기반으로 한 변환을 목표로 합니다.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Badge variant="secondary">실시간 처리 목표</Badge>
                    <Badge variant="secondary">다국어 지원 계획</Badge>
                    <Badge variant="secondary">문맥 인식 연구</Badge>
                  </div>
                </div>
                <div className="bg-muted/50 p-8 md:p-12 flex items-center justify-center">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-primary to-primary/50 mb-4">
                      <Sparkles className="w-16 h-16 text-white" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Powered by Google Gemini
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}