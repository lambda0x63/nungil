import { createClient } from "@/lib/supabase/server";

import LoginRequired from "@/components/auth/LoginRequired";

export default async function MyPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return <LoginRequired />;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] py-12 bg-background">
      <h1 className="text-4xl font-bold mb-4">마이페이지</h1>
      <p className="text-lg text-muted-foreground mb-8">
        환영합니다, {user.email || user.user_metadata.full_name || user.user_metadata.name || "사용자"}님!
      </p>
      <p className="text-md text-muted-foreground">
        이곳은 로그인한 사용자만 접근할 수 있는 페이지입니다.
      </p>
    </div>
  );
}
