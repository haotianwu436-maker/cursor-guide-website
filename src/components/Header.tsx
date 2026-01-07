import { Link } from "wouter";
import { Menu, Github } from "lucide-react";

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-sm">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">C</span>
          </div>
          <span className="font-bold text-lg hidden sm:inline">Cursor Guide</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm hover:text-primary transition-colors">
            首页
          </Link>
          <Link href="/prompts" className="text-sm hover:text-primary transition-colors">
            提示词库
          </Link>
          <Link href="/faq" className="text-sm hover:text-primary transition-colors">
            常见问题
          </Link>
          <a
            href="https://github.com/haotianwu436-maker/personal-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:text-primary transition-colors flex items-center gap-1"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
        </nav>

        <button
          onClick={onMenuClick}
          className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          <Menu className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
}
