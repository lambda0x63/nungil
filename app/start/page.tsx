"use client";

import { useEffect, Suspense } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Sparkles, 
  User, 
  ArrowRight,
  Zap
} from "lucide-react";
import KakaoLoginButton from "@/components/KakaoLoginButton";
import Link from "next/link";

function StartContent() {
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        router.replace('/converter');
      }
    };

    checkSession();
  }, [router, supabase]);

  return (
    <div className="bg-background min-h-screen">
      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6">시작하기</Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              어떻게 시작하시겠어요?
            </h1>
            <p className="text-lg text-muted-foreground mb-12">
              바로 체험해보거나 계정을 만들어 개인화된 설정을 저장하세요
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* 비회원으로 시작하기 */}
              <Card className="border-2 border-transparent hover:border-primary/30 transition-all duration-300 group">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <Zap className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">비회원으로 시작하기</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    회원가입 없이 바로 바이오닉 리딩을 체험해보세요. 
                    간편하고 빠르게 변환 기능을 사용할 수 있습니다.
                  </p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      <span>즉시 사용 가능</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      <span>AI 기반 한글/영어 변환</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      <span>기본 설정으로 최적화</span>
                    </div>
                  </div>

                  <Link href="/converter" className="block mt-6">
                    <Button className="w-full group-hover:bg-primary/90 transition-colors">
                      <Sparkles className="w-4 h-4 mr-2" />
                      바로 시작하기
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* 로그인하기 */}
              <Card className="border-2 border-transparent hover:border-primary/30 transition-all duration-300 group">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <User className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">로그인하기</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    계정을 만들고 개인화된 설정을 저장하세요. 
                    더 정교한 바이오닉 리딩 경험을 제공합니다.
                  </p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      <span>개인 맞춤 설정 저장</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      <span>ADHD/난독증 최적화</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      <span>변환 기록 및 즐겨찾기</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      <span>파일 업로드 및 일괄 변환</span>
                    </div>
                  </div>

                  <KakaoLoginButton />
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <p className="text-sm text-muted-foreground">
                먼저 비회원으로 체험해보시고, 마음에 드시면 나중에 계정을 만드실 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function Start() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <StartContent />
    </Suspense>
  );
}