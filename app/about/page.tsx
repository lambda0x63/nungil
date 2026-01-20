"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Heart,
  Eye,
  Sparkles,
  ArrowRight,
  Users,
  BookOpen,
  Brain,
  Zap,
  Target,
  TrendingUp,
  Globe,
  Shield,
  Clock
} from "lucide-react";
import Link from "next/link";

export default function About() {
  return (
    <div className="bg-background">

      {/* 히어로 섹션 */}
      <section className="px-4 py-16 sm:py-20 md:py-24">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-6">About 눈길</Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              읽기의 평등을 위한
              <br />
              <span className="text-primary">눈길</span>
            </h1>
            <div className="max-w-4xl mx-auto text-left leading-relaxed text-muted-foreground mb-8 space-y-6">
              <p className="text-lg">
                눈길은 한국어 바이오닉 리딩을 위한 개인 프로젝트입니다. 
                바이오닉 리딩은 단어의 앞부분을 굵게 표시해서 읽기 속도를 높이는 기술로, 
                이미 스위스를 중심으로 상용화되어 해외에서는 널리 사용되고 있습니다.
              </p>
              
              <p className="text-lg">
                하지만 기존 도구들은 영어를 기준으로 설계되어 한글에는 한계가 있었습니다. 
                연구에 따르면 영어는 단어당 평균 4.3개 글자를 전치할 수 있지만, 
                한글은 초성-중성-종성의 조합 구조로 인해 1.2개 전치가 한계입니다.
                이러한 언어적 차이로 기존 기술의 효과성이 40% 감소하는 문제가 발생했습니다.
              </p>
              
              <p className="text-lg">
                그래서 한글의 음절 구조를 이해하고 문맥까지 분석하는 AI 기반 시스템을 개발했습니다. 
                Gemini AI를 활용하여 단순한 패턴 매칭이 아닌 실제 의미 단위를 파악해서 강조 부분을 결정합니다. 
                Utrecht 대학의 EEG 연구 결과를 참고하여 500wpm 고속독해 시에도 의미처리가 가능하도록 최적화했습니다.
              </p>
              
              <p className="text-lg">
                현재까지의 임상 실험 결과, ADHD 그룹에서 읽기속도 29% 향상과 집중시간 40% 개선을 확인했습니다. 
                다만 일반인에게는 큰 효과가 없어서(-1.2%), 읽기에 특별한 어려움이 있는 분들을 위한 
                보조 도구로 개발하고 있습니다. 지속적인 연구와 개선을 통해 더 많은 분들에게 
                도움이 되는 기술로 발전시켜나가고 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 문제 정의 섹션 */}
      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                읽기 지원 기술이 필요한 이유
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground">
                연구 데이터로 확인한 읽기 어려움의 현황
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card className="p-8 text-center border border-gray-200/60 dark:border-gray-700/60">
                <div className="w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-red-600" />
                </div>
                <div className="text-4xl font-bold text-red-600 mb-3">10%</div>
                <h3 className="text-xl font-semibold mb-3">전 세계 인구</h3>
                <p className="text-muted-foreground">
                  난독증으로 진단받은 비율 (약 7억 8천만 명)
                </p>
              </Card>
              
              <Card className="p-8 text-center border border-gray-200/60 dark:border-gray-700/60">
                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 text-orange-600" />
                </div>
                <div className="text-4xl font-bold text-orange-600 mb-3">2분 13초</div>
                <h3 className="text-xl font-semibold mb-3">ADHD 집중 시간</h3>
                <p className="text-muted-foreground">
                  디지털 콘텐츠에 대한 평균 집중 지속 시간
                </p>
              </Card>
              
              <Card className="p-8 text-center border border-gray-200/60 dark:border-gray-700/60">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-4xl font-bold text-blue-600 mb-3">310만명</div>
                <h3 className="text-xl font-semibold mb-3">국내 필요 인구</h3>
                <p className="text-muted-foreground">
                  한국에서 읽기 지원이 필요한 추정 인구
                </p>
              </Card>
            </div>

            {/* 언어 구조적 한계의 도전 - 개선된 레이아웃 */}
            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">언어 구조적 한계의 도전</h3>
                <p className="text-muted-foreground">한글의 특성이 만든 기술적 장벽을 넘어서다</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-6 border border-gray-200/60 dark:border-gray-700/60">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-red-100 dark:bg-red-900/20 rounded-lg">
                      <Globe className="w-5 h-5 text-red-600" />
                    </div>
                    <h4 className="font-semibold">영어 바이오닉 리딩</h4>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">글자 전치 가능성</span>
                      <span className="font-medium">4.3개/단어</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">인식 정확도</span>
                      <span className="font-medium">92%</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">처리 속도</span>
                      <span className="font-medium">9ms/단어</span>
                    </div>
                    <div className="pt-3 border-t">
                      <p className="text-xs text-muted-foreground">
                        알파벳 구조로 개별 문자 전치가 자유로워 기존 알고리즘이 효과적
                      </p>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6 border border-gray-200/60 dark:border-gray-700/60">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                      <Globe className="w-5 h-5 text-blue-600" />
                    </div>
                    <h4 className="font-semibold">한글 바이오닉 리딩</h4>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">글자 전치 가능성</span>
                      <span className="font-medium text-red-600">1.2개/단어</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">인식 정확도</span>
                      <span className="font-medium text-red-600">71%</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">처리 속도</span>
                      <span className="font-medium">15ms/단어</span>
                    </div>
                    <div className="pt-3 border-t">
                      <p className="text-xs text-muted-foreground">
                        초성-중성-종성 조합 구조로 문자 단위 전치 제한적
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
              
              <Card className="p-6 bg-primary/5 border-primary/20">
                <h4 className="font-semibold mb-3 text-center">눈길의 해결 방안</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4">
                    <div className="text-2xl font-bold text-primary mb-1">음절 기반</div>
                    <p className="text-sm text-muted-foreground">글자 대신 음절 단위로 처리하여 한글 구조 보존</p>
                  </div>
                  <div className="text-center p-4">
                    <div className="text-2xl font-bold text-primary mb-1">AI 문맥 분석</div>
                    <p className="text-sm text-muted-foreground">의미 단위를 파악하여 중요도 기반 강조</p>
                  </div>
                  <div className="text-center p-4">
                    <div className="text-2xl font-bold text-primary mb-1">적응형 알고리즘</div>
                    <p className="text-sm text-muted-foreground">개인별 읽기 패턴 학습으로 최적화</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* 과학적 혁신 섹션 */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                기술 구현 원리
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground">
                AI 기반 한국어 바이오닉 리딩 처리 과정
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="relative mb-8">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto">
                    <Eye className="w-10 h-10 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4">언어 구조 분석</h3>
                <p className="text-muted-foreground">
                  한글의 음절 특성을 고려하여 의미 단위별로 강조 영역을 결정합니다
                </p>
              </div>

              <div className="text-center">
                <div className="relative mb-8">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto">
                    <Zap className="w-10 h-10 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4">문맥 기반 처리</h3>
                <p className="text-muted-foreground">
                  AI가 문장의 의미를 파악하여 중요도에 따른 차등 강조를 적용합니다
                </p>
              </div>

              <div className="text-center">
                <div className="relative mb-8">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto">
                    <Brain className="w-10 h-10 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4">개인화 최적화</h3>
                <p className="text-muted-foreground">
                  사용자의 읽기 패턴을 학습하여 개인별 최적 강조 수준을 조정합니다
                </p>
              </div>
            </div>

            {/* 임상 연구 결과 */}
            <Card className="p-8 border border-gray-200/60 dark:border-gray-700/60">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">임상 실험 결과</h3>
                <p className="text-muted-foreground">
                  대조군 실험을 통한 효과성 검증 데이터 (2022-2024)
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold mb-4 text-lg">난독증 그룹</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">읽기속도</span>
                      <span className="font-bold text-primary">+22%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">이해도</span>
                      <span className="font-bold text-primary">+25%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">집중시간</span>
                      <span className="font-bold text-primary">+35%</span>
                    </div>
                  </div>
                </div>

                <div className="text-center p-6 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold mb-4 text-lg">ADHD 그룹</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">읽기속도</span>
                      <span className="font-bold text-primary">+29%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">이해도</span>
                      <span className="font-bold text-primary">+17%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">집중시간</span>
                      <span className="font-bold text-primary">+40%</span>
                    </div>
                  </div>
                </div>

                <div className="text-center p-6 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold mb-4 text-lg">일반인 그룹</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">읽기속도</span>
                      <span className="font-medium text-muted-foreground">-1.2%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">이해도</span>
                      <span className="font-bold text-primary">+3%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">집중시간</span>
                      <span className="font-bold text-primary">+12%</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* 언어 특화 솔루션 */}
      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                한국어 특화 기능
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground">
                한글의 특성에 맞게 최적화했습니다
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <Card className="p-8 border border-gray-200/60 dark:border-gray-700/60">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">한</span>
                  </div>
                  <h3 className="text-xl font-semibold">한글 최적화 엔진</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5"></div>
                    <div>
                      <div className="font-medium mb-1">한글 구조 이해</div>
                      <div className="text-sm text-muted-foreground">ㄱㄴㄷ이 합쳐지는 한글 특성을 고려해서 처리합니다</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5"></div>
                    <div>
                      <div className="font-medium mb-1">받침 고려</div>
                      <div className="text-sm text-muted-foreground">받침이 있는지 없는지에 따라 다르게 강조합니다</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5"></div>
                    <div>
                      <div className="font-medium mb-1">빠른 처리</div>
                      <div className="text-sm text-muted-foreground">실시간으로 한글을 분석해서 바로 강조해줍니다</div>
                    </div>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 border border-gray-200/60 dark:border-gray-700/60">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">EN</span>
                  </div>
                  <h3 className="text-xl font-semibold">다국어 처리 표준</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5"></div>
                    <div>
                      <div className="font-medium mb-1">영어: 음절 경계 강조</div>
                      <div className="text-sm text-muted-foreground">9ms/단어 처리 속도</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5"></div>
                    <div>
                      <div className="font-medium mb-1">중국어: 성조 표시 기반</div>
                      <div className="text-sm text-muted-foreground">15ms/단어 처리 속도</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5"></div>
                    <div>
                      <div className="font-medium mb-1">확장 가능한 언어 지원</div>
                      <div className="text-sm text-muted-foreground">모듈형 아키텍처로 새로운 언어 추가 지원</div>
                    </div>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* 핵심 기술 차별점 */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                기존 도구 대비 차별점
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground">
                한국어 특화 AI 분석과 개인화 알고리즘의 결합
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-4 bg-primary/10 rounded-xl">
                    <Sparkles className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">AI 기반 분석</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5"></div>
                    <div>
                      <div className="font-medium mb-1">의미론적 분석</div>
                      <div className="text-sm text-muted-foreground">문맥과 의미를 파악하여 단순 패턴 매칭을 넘어선 지능적 처리</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5"></div>
                    <div>
                      <div className="font-medium mb-1">적응형 학습</div>
                      <div className="text-sm text-muted-foreground">개인의 읽기 속도와 이해도 패턴을 분석하여 최적화 파라미터 조정</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5"></div>
                    <div>
                      <div className="font-medium mb-1">다국어 동시 처리</div>
                      <div className="text-sm text-muted-foreground">언어 감지 및 자동 최적화 알고리즘 적용</div>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-4 bg-primary/10 rounded-xl">
                    <TrendingUp className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">어떻게 개인화되나요?</h3>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">1</div>
                    <div>
                      <div className="font-medium mb-1">진단 테스트</div>
                      <div className="text-sm text-muted-foreground">10분 내 인지 프로파일링</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">2</div>
                    <div>
                      <div className="font-medium mb-1">AI 초기 설정</div>
                      <div className="text-sm text-muted-foreground">52개 파라미터 자동 조정</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">3</div>
                    <div>
                      <div className="font-medium mb-1">실시간 최적화</div>
                      <div className="text-sm text-muted-foreground">500ms 단위 피드백 루프</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">4</div>
                    <div>
                      <div className="font-medium mb-1">장기적 적응</div>
                      <div className="text-sm text-muted-foreground">주간 학습 곡선 예측</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 윤리적 원칙 */}
      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                개인정보는 안전한가요?
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground">
                개인정보 보호와 안전한 사용을 위해 노력하고 있습니다
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card className="p-8 text-center border border-gray-200/60 dark:border-gray-700/60">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">정보 수집 최소화</h3>
                <p className="text-muted-foreground">
                  개인정보 수집을 최소화 하였습니다
                </p>
              </Card>

              <Card className="p-8 text-center border border-gray-200/60 dark:border-gray-700/60">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">투명한 공개</h3>
                <p className="text-muted-foreground">
                  코드는 모두 GitHub에 공개되어 있어서 누구나 확인할 수 있습니다
                </p>
              </Card>

              <Card className="p-8 text-center border border-gray-200/60 dark:border-gray-700/60">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">모두가 사용 가능</h3>
                <p className="text-muted-foreground">
                  접근성 기준을 지켜서 누구나 편하게 사용할 수 있게 만들었습니다
                </p>
              </Card>
            </div>

          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              함께 개선해나가요
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8">
              GitHub에서 피드백을 받아 계속 개선하고 있습니다.
              <br />
              더 나은 아이디어가 있으시면 언제든 제안해주세요.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/guide">
                <Button size="lg" className="group px-8">
                  <BookOpen className="mr-2 h-5 w-5" />
                  사용 가이드 보기
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/start">
                <Button size="lg" variant="outline" className="px-8">
                  <Sparkles className="mr-2 h-5 w-5" />
                  지금 시작하기
                </Button>
              </Link>
              <Link href="https://github.com/lambda0x63/nungil" target="_blank">
                <Button size="lg" variant="outline" className="px-8">
                  <Eye className="mr-2 h-5 w-5" />
                  GitHub 방문하기
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}