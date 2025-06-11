"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Heart,
  Eye,
  Sparkles,
  ArrowRight,
  Clock,
  Lightbulb,
  BookOpen,
  Target,
  Zap,
  Info,
  AlertCircle
} from "lucide-react";
import Link from "next/link";

export default function Guide() {
  return (
    <div className="bg-background">
      {/* 히어로 섹션 */}
      <section className="px-4 py-16 sm:py-20 md:py-24">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-6">사용 가이드</Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              눈길을 사용하는
              <br />
              <span className="text-primary">가장 좋은 방법</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
              바이오닉 리딩 기술을 처음 사용하는 분들을 위한 안내서입니다.
              <br />
              건강한 사용 습관과 효과적인 활용법을 알아보세요.
            </p>
          </div>
        </div>
      </section>

      {/* 기본 사용 가이드 */}
      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                기본 사용 가이드
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground">
                3단계로 쉽게 시작하는 바이오닉 리딩
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-8 text-center border-2 border-transparent hover:border-primary/20 transition-all">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">텍스트 입력</h3>
                <p className="text-muted-foreground mb-4">
                  읽고 싶은 글을 텍스트창에 입력하거나 파일을 업로드하세요
                </p>
                <div className="bg-muted rounded-lg p-4">
                  <p className="text-sm">지원 형식: TXT, PDF, DOCX</p>
                </div>
              </Card>

              <Card className="p-8 text-center border-2 border-transparent hover:border-primary/20 transition-all">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">설정 조정</h3>
                <p className="text-muted-foreground mb-4">
                  강조 강도, 글꼴 크기 등을 개인의 취향에 맞게 조정하세요
                </p>
                <div className="bg-muted rounded-lg p-4">
                  <p className="text-sm">처음엔 기본 설정 권장</p>
                </div>
              </Card>

              <Card className="p-8 text-center border-2 border-transparent hover:border-primary/20 transition-all">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">읽기 시작</h3>
                <p className="text-muted-foreground mb-4">
                  변환된 텍스트로 평소보다 편안한 읽기를 경험하세요
                </p>
                <div className="bg-muted rounded-lg p-4">
                  <p className="text-sm">적응 기간 1-2주</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* 효과적인 사용법 가이드 */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                더 효과적으로 사용하는 방법
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground">
                바이오닉 리딩의 효과를 높이는 2가지 방법
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="p-8 mb-8 border-2 border-primary/20 bg-primary/5">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold">점진적 적응 가이드</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-primary pl-6">
                    <h4 className="font-semibold text-lg mb-2">1주차 (1-7일)</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                        <span>하루 20분씩 짧은 글부터 시작해서 천천히 적응</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                        <span>강조 강도를 &apos;낮음&apos;으로 설정</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                        <span>눈의 피로감이 있으면 휴식</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-primary pl-6">
                    <h4 className="font-semibold text-lg mb-2">2주차 (8-14일)</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                        <span>하루 30-40분으로 시간 증가</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                        <span>강조 강도를 &apos;보통&apos;으로 점진 조정</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                        <span>업무나 학습에서 본격 활용</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-6 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                    <p className="text-sm text-orange-700 dark:text-orange-400">
                      개인차: 더 빨리 적응하는 경우도 있지만, 무리하지 말고 본인 페이스를 유지하세요
                    </p>
                  </div>
                </div>
              </Card>

              {/* 개별 설정 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h4 className="font-semibold mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5 text-primary" />
                    ADHD/난독증 사용자
                  </h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="font-medium">강조 강도:</span>
                      <span className="text-muted-foreground">높음 (60-70%)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-medium">글자 크기:</span>
                      <span className="text-muted-foreground">18px 이상</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-medium">줄 간격:</span>
                      <span className="text-muted-foreground">1.80</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-medium">배경색:</span>
                      <span className="text-muted-foreground">어두운 테마 권장</span>
                    </li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <h4 className="font-semibold mb-4 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-primary" />
                    일반 사용자
                  </h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="font-medium">강조 강도:</span>
                      <span className="text-muted-foreground">보통 (40-50%)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-medium">글자 크기:</span>
                      <span className="text-muted-foreground">16px</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-medium">줄 간격:</span>
                      <span className="text-muted-foreground">1.50</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-medium">배경색:</span>
                      <span className="text-muted-foreground">기본 모드</span>
                    </li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 건강한 사용 가이드 */}
      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                건강하게 사용하는 방법
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground">
                눈 건강을 보호하며 지속가능한 독서 환경 만들기
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="p-6 border border-gray-200/60 dark:border-gray-700/60">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-green-100 dark:bg-green-900/20 rounded-lg">
                    <Eye className="w-5 h-5 text-green-600" />
                  </div>
                  <h4 className="font-semibold">20-20-20 규칙</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  20분마다 20초간 20피트(6m) 밖을 바라보세요
                </p>
                <div className="bg-green-50 dark:bg-green-900/10 rounded-lg p-3">
                  <p className="text-xs">눈의 피로를 50% 줄일 수 있습니다</p>
                </div>
              </Card>

              <Card className="p-6 border border-gray-200/60 dark:border-gray-700/60">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                    <Zap className="w-5 h-5 text-blue-600" />
                  </div>
                  <h4 className="font-semibold">적절한 조명</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  충분한 조명 아래에서 화면의 밝기를 조절하세요
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/10 rounded-lg p-3">
                  <p className="text-xs">어두운 조명 사용 시 효과 감소</p>
                </div>
              </Card>

              <Card className="p-6 border border-gray-200/60 dark:border-gray-700/60">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
                    <Heart className="w-5 h-5 text-purple-600" />
                  </div>
                  <h4 className="font-semibold">규칙적인 휴식</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  1시간마다 5-10분 휴식을 취하세요
                </p>
                <div className="bg-purple-50 dark:bg-purple-900/10 rounded-lg p-3">
                  <p className="text-xs">집중력과 효과 유지에 필수</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* 주의사항 */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <Card className="p-8 border-2 border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-900/10">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-orange-100 dark:bg-orange-900/20 rounded-lg">
                  <AlertCircle className="w-6 h-6 text-orange-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4">사용 시 주의사항</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Info className="w-4 h-4" />
                          개인차 인정
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          효과는 개인에 따라 다르며, 난독증이나 ADHD가 있는 분들께 더 도움이 됩니다. 
                          일반인에게는 미미한 효과를 보일 수 있습니다.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Info className="w-4 h-4" />
                          의학적 치료
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          이것은 의학적 치료가 아닙니다. 
                          전문 진료 및 치료를 대체할 수 없으니 전문의와 상의하세요.
                        </p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Info className="w-4 h-4" />
                          점진적 사용
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          처음에는 단시간만 사용하고 점차 
                          늘려 가는 것이 좋습니다.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Info className="w-4 h-4" />
                          눈의 피로 주의
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          두통, 어지러움, 눈의 피로감이 지속되면 
                          사용을 중단하고 휴식을 취하세요.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              준비되셨나요?
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8">
              이제 눈길로 더 편안한 가독성 경험을 시작해보세요
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/converter">
                <Button size="lg" className="group px-8">
                  <Sparkles className="mr-2 h-5 w-5" />
                  지금 시작하기
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="px-8">
                  <Lightbulb className="mr-2 h-5 w-5" />
                  프로젝트 더 알아보기
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}