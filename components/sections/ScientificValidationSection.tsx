import { Card } from "@/components/ui/card";
import { Brain, Users } from "lucide-react";

export function ScientificValidationSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              기대하는 효과
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground">
              바이오닉 리딩 기술이 가져올 변화
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 border border-gray-200/60 dark:border-gray-700/60">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold">읽기 경험 개선</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5"></div>
                  <span className="text-base leading-relaxed">시각적 고정점 제공으로 읽기 속도 향상 기대</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5"></div>
                  <span className="text-base leading-relaxed">중요 단어에 자연스럽게 집중할 수 있도록 지원</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5"></div>
                  <span className="text-base leading-relaxed">장시간 읽기 시 눈의 피로도 감소 가능성</span>
                </li>
              </ul>
            </Card>
            
            <Card className="p-8 border border-gray-200/60 dark:border-gray-700/60">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold">특히 도움이 필요한 분들</h3>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold mb-2">ADHD를 가진 분들</h4>
                  <p className="text-sm text-muted-foreground">
                    집중력 유지가 어려운 분들이 텍스트에 더 잘 집중할 수 있도록 도와줍니다.
                  </p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold mb-2">난독증을 가진 분들</h4>
                  <p className="text-sm text-muted-foreground">
                    글자를 인식하고 의미를 파악하는 과정을 더 수월하게 만들어줍니다.
                  </p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold mb-2">장시간 읽기가 필요한 분들</h4>
                  <p className="text-sm text-muted-foreground">
                    학생, 연구자, 직장인 등 많은 텍스트를 읽어야 하는 분들의 피로도를 줄여줍니다.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}