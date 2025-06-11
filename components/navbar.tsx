import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Eye, Github } from "lucide-react";

export function Navbar() {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Eye className="w-6 h-6" />
          <span className="font-bold text-lg">눈길</span>
        </Link>
        
        <div className="flex items-center gap-4">
          <Link href="/about">
            <Button variant="ghost" size="sm">소개</Button>
          </Link>
          <Link href="/guide">
            <Button variant="ghost" size="sm">사용법</Button>
          </Link>
          <Button variant="ghost" size="sm" asChild>
            <Link href="https://github.com/lambda0x63/nungil" target="_blank">
              <Github className="w-4 h-4" />
            </Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/start">로그인</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/converter">바로 시작하기</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}