import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Globe, Users, Sparkles } from "lucide-react";

export function StatsSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              왜 눈길을 만들게 되었나요?
            </h2>
            <p className="text-xl text-muted-foreground">
              읽기 어려움을 겪는 분들을 위한 기술적 도전
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 px-2 sm:px-0">
            <Card className="p-6 sm:p-8 border border-gray-200/60 dark:border-gray-700/60 hover:border-primary/30 transition-all duration-300 hover-lift">
              <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-3 text-lg">기존 솔루션의 한계</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                해외 바이오닉 리딩 서비스들은 영어 중심으로 설계되어 한글의 특성을 제대로 반영하지 못합니다.
              </p>
            </Card>
            
            <Card className="p-6 sm:p-8 border border-gray-200/60 dark:border-gray-700/60 hover:border-primary/30 transition-all duration-300 hover-lift">
              <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-3 text-lg">한글의 구조적 특성</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                초성-중성-종성의 조합으로 이루어진 한글은 알파벳과 다른 접근이 필요합니다.
              </p>
            </Card>
            
            <Card className="p-6 sm:p-8 border border-gray-200/60 dark:border-gray-700/60 hover:border-primary/30 transition-all duration-300 hover-lift">
              <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-3 text-lg">접근성 개선 필요</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                읽기에 어려움을 겪는 분들이 쉽게 사용할 수 있는 한국어 특화 도구가 필요합니다.
              </p>
            </Card>
          </div>
          
          <Card className="bg-background/50">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">눈길 프로젝트의 목표</h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
                    한글의 언어적 특성을 고려한 바이오닉 리딩 기술을 개발하여,
                    난독증, ADHD 등으로 읽기에 어려움을 겪는 분들이
                    더 쉽고 편하게 텍스트를 읽을 수 있도록 돕고자 합니다.
                  </p>
                  <div className="flex flex-wrap gap-3 text-sm">
                    <Badge variant="secondary">개인 프로젝트</Badge>
                    <Badge variant="secondary">오픈소스</Badge>
                    <Badge variant="secondary">한글 최적화</Badge>
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