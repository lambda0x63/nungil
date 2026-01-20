import Link from "next/link";
import { Eye } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <Eye className="w-5 h-5 text-primary" />
              <span className="font-bold text-lg">눈길</span>
              <span className="text-sm text-muted-foreground ml-2">
                모든 사람을 위한 더 나은 읽기
              </span>
            </div>
            
            <div className="flex items-center gap-6 text-sm">
              <Link 
                href="/about" 
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                소개
              </Link>
              <Link 
                href="https://github.com/lambda0x63/nungil" 
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                GitHub
              </Link>
              <span className="text-muted-foreground">
                © 2025 눈길
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}