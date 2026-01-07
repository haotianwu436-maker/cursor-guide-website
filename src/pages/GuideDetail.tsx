import { useParams, Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { guideSections } from "../data/guide";
import ReactMarkdown from "react-markdown";

export default function GuideDetail() {
  const { id } = useParams<{ id: string }>();
  const guide = guideSections.find((g) => g.id === id);

  if (!guide) {
    return (
      <div className="container py-16">
        <h1 className="text-2xl font-bold mb-4">指南未找到</h1>
        <Link href="/" className="text-primary hover:underline">
          返回首页
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="container py-8">
        <Link href="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-6">
          <ArrowLeft className="w-4 h-4" />
          返回首页
        </Link>

        <article className="max-w-3xl">
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{guide.title}</h1>
            <p className="text-lg text-muted-foreground">{guide.description}</p>
          </header>

              <div className="prose max-w-none">
            <ReactMarkdown
              components={{
                h2: ({ children }: any) => (
                  <h2 className="text-2xl font-bold mt-8 mb-4">{children}</h2>
                ),
                h3: ({ children }: any) => (
                  <h3 className="text-xl font-bold mt-6 mb-3">{children}</h3>
                ),
                p: ({ children }: any) => (
                  <p className="mb-4 leading-relaxed">{children}</p>
                ),
                ul: ({ children }: any) => (
                  <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>
                ),
                ol: ({ children }: any) => (
                  <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>
                ),
                li: ({ children }: any) => <li className="ml-4">{children}</li>,
                code: ({ inline, children }: any) =>
                  inline ? (
                    <code className="bg-muted px-2 py-1 rounded text-sm font-mono text-accent">
                      {children}
                    </code>
                  ) : (
                    <code className="block bg-card border border-border rounded-lg p-4 overflow-x-auto font-mono text-sm mb-4">
                      {children}
                    </code>
                  ),
                pre: ({ children }: any) => <pre className="mb-4">{children}</pre>,
                blockquote: ({ children }: any) => (
                  <blockquote className="border-l-4 border-primary pl-4 py-2 my-4 italic text-muted-foreground">
                    {children}
                  </blockquote>
                ),
              }}
            >
              {guide.content}
            </ReactMarkdown>
          </div>
        </article>
      </div>
    </div>
  );
}
