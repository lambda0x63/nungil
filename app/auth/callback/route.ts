import { createClient } from '@/lib/supabase/server';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get('code');
  const redirectTo = requestUrl.searchParams.get('redirect_to');

  if (code) {
    const supabase = await createClient();
    try {
      await supabase.auth.exchangeCodeForSession(code);
    } catch (error) {
      console.error('Error exchanging code for session:', error);
      // Redirect to an error page with a message
      const errorUrl = new URL('/auth/auth-code-error', requestUrl.origin);
      errorUrl.searchParams.set('message', 'Could not exchange code for session');
      return NextResponse.redirect(errorUrl);
    }
  }

  // If a redirect_to param is present, redirect to that URL
  if (redirectTo) {
    return NextResponse.redirect(`${requestUrl.origin}${redirectTo}`);
  }

  // Otherwise, redirect to the home page
  return NextResponse.redirect(requestUrl.origin);
}