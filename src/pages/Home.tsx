import { Link } from "wouter";
import { ArrowRight, Zap, BookOpen, Lightbulb } from "lucide-react";
import { guideSections, promptTemplates } from "../data/guide";

export default function Home() {
  const featuredGuides = guideSections.slice(0, 4);
  const featuredPrompts = promptTemplates.slice(0, 6);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container py-16 md:py-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Cursor 开发指南
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            快速学习如何使用 Cursor 进行个人网站项目开发。包含详细的提示词、代码示例和工作流程，让开发变得更简单。
          </p>
          <div className="flex gap-4">
            <Link href="/prompts" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-medium">
              浏览提示词库 <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://github.com/haotianwu436-maker/personal-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors font-medium"
            >
              查看项目
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg border border-border hover:border-primary transition-colors">
            <Zap className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-bold mb-2">快速开始</h3>
            <p className="text-sm text-muted-foreground">
              3 分钟快速上手，包含项目初始化和 Cursor 配置步骤。
            </p>
          </div>
          <div className="p-6 rounded-lg border border-border hover:border-primary transition-colors">
            <BookOpen className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-bold mb-2">提示词库</h3>
            <p className="text-sm text-muted-foreground">
              10+ 精心编写的提示词模板，可直接复制到 Cursor 使用。
            </p>
          </div>
          <div className="p-6 rounded-lg border border-border hover:border-primary transition-colors">
            <Lightbulb className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-bold mb-2">最佳实践</h3>
            <p className="text-sm text-muted-foreground">
              学习如何有效地与 Cursor 沟通，提升开发效率。
            </p>
          </div>
        </div>
      </section>

      {/* Featured Guides */}
      <section className="container py-16">
        <h2 className="text-2xl font-bold mb-8">指南内容</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {featuredGuides.map((guide) => (
            <Link
              key={guide.id}
              href={`/guide/${guide.id}`}
              className="p-6 rounded-lg border border-border hover:border-primary hover:shadow-lg transition-all group"
            >
              <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">
                {guide.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {guide.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Prompts */}
      <section className="container py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">热门提示词</h2>
          <Link href="/prompts" className="text-primary hover:underline text-sm font-medium">
            查看全部 →
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredPrompts.map((prompt) => (
            <div
              key={prompt.id}
              className="p-6 rounded-lg border border-border hover:border-primary hover:shadow-lg transition-all group"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-bold group-hover:text-primary transition-colors flex-1">
                  {prompt.title}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                {prompt.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {prompt.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 bg-muted rounded text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-16">
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-12 text-center">
          <h2 className="text-2xl font-bold mb-4">准备好开始了吗？</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            选择一个提示词，复制到 Cursor，让 AI 助手帮助您快速完成项目开发。
          </p>
          <Link href="/prompts" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-medium">
            浏览所有提示词 <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
