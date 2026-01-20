import { Card } from "@/components/ui/card";
import { BookOpen, Users, Brain, Heart } from "lucide-react";

export function UseCasesSection() {
  return (
    <section className="py-12 sm:py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 px-2">
              주요 활용 분야
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground px-4">
              실제 사용자들의 피드백을 기반으로 한 효과 검증 사례
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-2 sm:px-0">
            <Card className="p-8 hover:shadow-lg transition-all duration-300 border border-gray-200/60 dark:border-gray-700/60 hover-lift fade-in-left stagger-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">학습 자료 읽기</h3>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                교과서, 논문, 전문 서적 등 빠른 정보 습득이 필요한 자료를 
                효율적으로 읽을 수 있습니다.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span className="text-sm">ADHD 학생: 자기효능감 23% 향상</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span className="text-sm">독해력 15-20% 개선 사례</span>
                </div>
              </div>
            </Card>
            
            <Card className="p-8 hover:shadow-lg transition-all duration-300 border border-gray-200/60 dark:border-gray-700/60 hover-lift fade-in-right stagger-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">업무 문서 검토</h3>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                긴 보고서나 기획서를 빠르게 파악하고 
                핵심 내용을 놓치지 않고 확인할 수 있습니다.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span className="text-sm">문서 검토 시간 평균 14% 단축</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span className="text-sm">정보 파악 정확도 향상</span>
                </div>
              </div>
            </Card>
            
            <Card className="p-8 hover:shadow-lg transition-all duration-300 border border-gray-200/60 dark:border-gray-700/60 hover-lift fade-in-left stagger-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">일상 콘텐츠 소비</h3>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                뉴스, 블로그, SNS 글을 편하게 읽으며
                디지털 피로를 줄일 수 있습니다.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span className="text-sm">눈의 피로도 50% 감소</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span className="text-sm">장시간 읽기 가능</span>
                </div>
              </div>
            </Card>
            
            <Card className="p-8 hover:shadow-lg transition-all duration-300 border border-gray-200/60 dark:border-gray-700/60 hover-lift fade-in-right stagger-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">어린이 독서 교육</h3>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                읽기에 어려움을 겪는 아이들이
                자신감을 가지고 책을 읽을 수 있습니다.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span className="text-sm">독서 흥미 향상</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span className="text-sm">학습 성취도 개선</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}