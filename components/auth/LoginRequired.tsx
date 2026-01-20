import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LoginRequired() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] py-12 bg-background text-center px-4">
      <h1 className="text-4xl font-bold mb-4">접근 권한 없음</h1>
      <p className="text-lg text-muted-foreground mb-8">
        이 페이지는 로그인한 사용자만 접근할 수 있습니다.
      </p>
      <Link href="/start">
        <Button size="lg">
          로그인 또는 회원가입
        </Button>
      </Link>
    </div>
  );
}
