"use client";

import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/client";
import { useEffect, useState } from "react";

import { useSearchParams } from "next/navigation";

export default function KakaoLoginButton() {
  const [authUrl, setAuthUrl] = useState<string | null>(null);
  const supabase = createClient();
  const searchParams = useSearchParams();

  useEffect(() => {
    const getKakaoAuthUrl = async () => {
      const redirectToParam = searchParams.get("redirect_to");
      const redirectTo = redirectToParam 
        ? `${location.origin}/auth/callback?redirect_to=${encodeURIComponent(redirectToParam)}`
        : `${location.origin}/auth/callback`;

      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'kakao',
        options: {
          redirectTo: redirectTo,
          skipBrowserRedirect: true,
        },
      });

      if (data.url) {
        const url = new URL(data.url);
        url.searchParams.set('scope', 'profile_nickname,profile_image,account_email');
        setAuthUrl(url.toString());
      } else if (error) {
        console.error("Error getting Kakao auth URL:", error);
      }
    };

    getKakaoAuthUrl();
  }, [supabase.auth, searchParams]);

  const handleLogin = () => {
    if (authUrl) {
      window.location.href = authUrl;
    } else {
      // Fallback or error handling
      alert("카카오 로그인에 문제가 발생했습니다. 잠시 후 다시 시도해주세요.");
    }
  };

  return (
    <Button 
      onClick={handleLogin} 
      disabled={!authUrl}
      className="w-full bg-[#FEE500] text-black hover:bg-[#FEE500]/90"
    >
      카카오로 로그인하기
    </Button>
  );
}