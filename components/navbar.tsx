"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Eye, Github } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { useEffect, useState } from "react";
import { User } from "@supabase/supabase-js";

export function Navbar() {
  const [user, setUser] = useState<User | null>(null);
  const supabase = createClient();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
    };
    checkUser();

    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [supabase.auth]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

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
          {user ? (
            <>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/mypage">마이페이지</Link>
              </Button>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                로그아웃
              </Button>
              {pathname !== "/converter" && (
                <Button size="sm" asChild>
                  <Link href="/converter">시작하기</Link>
                </Button>
              )}
            </>
          ) : (
            <Button size="sm" asChild>
              <Link href={pathname === "/converter" ? "/start?redirect_to=/converter" : "/start"}>
                {pathname === "/converter" ? "로그인" : "시작하기"}
              </Link>
            </Button>
          )}
        </div>
      </nav>
    </header>
  );
}