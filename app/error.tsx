'use client'

import Link from "next/link";

export default function Error({}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      <div className="text-center space-y-6 max-w-md mx-auto px-4">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-foreground">🚧</h1>
          <h2 className="text-2xl font-semibold text-foreground">준비중입니다</h2>
          <p className="text-muted-foreground">
            이 페이지는 현재 개발 중입니다.
          </p>
        </div>
        
        <div className="space-y-3">
          <Link
            href="/"
            className="inline-block w-full px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-center"
          >
            홈으로 돌아가기
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="inline-block w-full px-4 py-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md transition-colors text-center"
          >
            이전 페이지로
          </button>
        </div>
      </div>
    </div>
  )
}