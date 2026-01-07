import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="container py-24 text-center">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-lg text-muted-foreground mb-8">
        页面未找到，请检查 URL 是否正确。
      </p>
      <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-medium">
        返回首页
      </Link>
    </div>
  );
}
