import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-12 sm:py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-2">
              지금 바로 시작하세요
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-4">
              지금 바로 텍스트 변환을 경험해보세요.
              <br className="hidden sm:block" />
              <span className="text-sm sm:text-base block sm:inline mt-2 sm:mt-0">로그인 없이도 사용 가능하며, 계정을 만들면 맞춤 설정을 저장할 수 있습니다.</span>
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8 px-4">
            <Link href="/converter" className="w-full sm:w-auto">
              <Button size="lg" className="group w-full sm:w-auto px-6 sm:px-8">
                <Sparkles className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                지금 시작하기
                <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/guide" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto px-6 sm:px-8">
                <BookOpen className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                사용방법 보기
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}