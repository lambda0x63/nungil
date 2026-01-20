
import { NextResponse } from 'next/server';
import { z } from 'zod';
import { createClient } from '@/lib/supabase/server';

// Zod 스키마를 사용하여 요청 본문의 데이터 형식을 정의합니다.
const postSchema = z.object({
  title: z.string().min(1, '제목은 비워둘 수 없습니다.'),
  content: z.string().min(1, '내용은 비워둘 수 없습니다.'),
});

export async function POST(request: Request) {
  const supabase = await createClient();

  // 1. 사용자 인증 확인
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: '인증되지 않은 사용자입니다.' }, { status: 401 });
  }

  // 2. 요청 본문 파싱 및 유효성 검사
  try {
    const body = await request.json();
    const { title, content } = postSchema.parse(body);

    // 3. 유효성 검사를 통과하면 Supabase에 데이터 저장
    const { data, error } = await supabase
      .from('posts') // 'posts' 테이블이 Supabase에 존재해야 합니다.
      .insert([{ title, content, user_id: user.id }])
      .select()
      .single();

    if (error) {
      console.error('Supabase 에러:', error);
      return NextResponse.json({ error: '게시글을 작성하는 데 실패했습니다.' }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (e) {
    // Zod 유효성 검사 실패 시
    if (e instanceof z.ZodError) {
      return NextResponse.json({ error: e.issues }, { status: 400 });
    }
    console.error('알 수 없는 에러:', e);
    return NextResponse.json({ error: '잘못된 요청입니다.' }, { status: 400 });
  }
}
