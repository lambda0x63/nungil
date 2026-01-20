"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Eye,
  Zap
} from "lucide-react";
import Link from "next/link";
import { useBionicReading } from "@/hooks/useBionicReading";

export function HeroSection() {
  const [isHovering, setIsHovering] = useState(false);
  const demoRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const { mouseX, relativeMouse, handleMouseMove, applyBionic } = useBionicReading(demoRef, textContainerRef);

  // 샘플 텍스트
  const sampleText = "눈길은 난독증, ADHD, 그리고 읽기 어려움을 겪는 모든 분들을 위한 바이오닉 리딩 기술입니다. 텍스트의 핵심 부분을 강조하여 읽기 속도와 집중력을 향상시키고, 모든 사람이 정보에 동등하게 접근할 수 있는 세상을 만들어가고 있습니다. 이 기술은 과학적 연구를 바탕으로 개발되었으며, 개인의 읽기 패턴에 맞춘 맞춤형 경험을 제공합니다.";
  const words = sampleText.split(' ');

  return (
    <section className="px-4 py-12 sm:py-16 md:py-24">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight px-2 fade-in-up">
            모든 사람을 위한
            <br />
            <span className="text-primary gradient-text">더 나은 읽기, 눈길</span>
          </h1>
          
          <div className="max-w-4xl mx-auto text-center leading-relaxed text-muted-foreground mb-6 space-y-4 px-4 fade-in-up stagger-2">
            <p className="text-base sm:text-lg md:text-xl">
              한글 특성에 맞게 설계된 바이오닉 리딩 기술로
              <br />
              읽기가 어려운 분들도 쉽고 빠르게 텍스트를 이해할 수 있습니다.
            </p>
            
            <p className="text-base sm:text-lg">
              AI가 문맥을 분석하여 중요한 부분을 강조하고,
              <br />
              개인의 읽기 패턴에 맞춤형으로 최적화됩니다.
            </p>
            
            <p className="text-sm text-muted-foreground/80">
              난독증, ADHD, 집중력 부족으로 읽기에 어려움을 겪는 분들을 위한 도구입니다.
            </p>
          </div>
        </div>

        {/* 인터랙티브 데모 */}
        <div className="relative mb-12 sm:mb-16 fade-in-up stagger-3">
          <Card className="overflow-hidden border-2 mx-2 sm:mx-0 hover-lift">
            <CardContent className="p-0">
              <div 
                ref={demoRef}
                className="relative overflow-hidden cursor-crosshair"
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div className="relative p-4 sm:p-6 md:p-8 lg:p-12">
                  <div className="relative" ref={textContainerRef}>
                    {/* 원본 텍스트 (마우스 오른쪽) */}
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed sm:leading-loose select-none font-pretendard" 
                       style={{ wordSpacing: '0.3rem', letterSpacing: '0.01em' }}>
                      {words.map((word, index) => (
                        <span key={index} className="inline-block" style={{ marginRight: '0.3rem' }}>
                          {word}
                        </span>
                      ))}
                    </p>
                    
                    {/* 바이오닉 리딩 적용 레이어 (마우스 왼쪽) */}
                    {isHovering && (
                      <div 
                        className="absolute inset-0 overflow-hidden pointer-events-none bg-background"
                        style={{
                          clipPath: `polygon(0 0, ${relativeMouse}px 0, ${relativeMouse}px 100%, 0 100%)`,
                          transition: 'none',
                          willChange: 'clip-path'
                        }}
                      >
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed sm:leading-loose font-pretendard"
                           style={{ wordSpacing: '0.3rem', letterSpacing: '0.01em' }}>
                          {words.map((word, index) => (
                            <span key={index} className="inline-block" style={{ marginRight: '0.3rem' }}>
                              {applyBionic(word)}
                            </span>
                          ))}
                        </p>
                      </div>
                    )}
                    
                    {/* 마우스 커서 수직선 */}
                    {isHovering && mouseX > 0 && (
                      <div 
                        className="absolute top-0 w-0.5 h-full bg-primary/30 pointer-events-none"
                        style={{ 
                          left: `${relativeMouse}px`,
                          transition: 'none',
                          boxShadow: '0 0 8px rgba(var(--primary), 0.3)'
                        }}
                      />
                    )}
                  </div>
                </div>
              </div>
              
              <div className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-6 text-center">
                <p className="text-xs sm:text-sm text-muted-foreground">
                  <span className="hidden sm:inline">마우스를 움직여 바이오닉 리딩 효과를 경험해보세요</span>
                  <span className="sm:hidden">터치하여 바이오닉 리딩 효과를 경험해보세요</span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 fade-in-up stagger-4">
          <Link href="/start" className="w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto px-6 sm:px-8 hover-lift">
              <Zap className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              지금 시작하기
            </Button>
          </Link>
          <Link href="https://github.com/lambda0x63/nungil" target="_blank" className="w-full sm:w-auto">
            <Button size="lg" variant="outline" className="w-full sm:w-auto px-6 sm:px-8 hover-lift">
              <Eye className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              소스코드 보기
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}