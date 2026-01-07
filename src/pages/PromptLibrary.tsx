import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { promptTemplates } from "../data/guide";
import { toast } from "sonner";

export default function PromptLibrary() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(promptTemplates.map((p) => p.category)));
  const filteredPrompts = selectedCategory
    ? promptTemplates.filter((p) => p.category === selectedCategory)
    : promptTemplates;

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    toast.success("已复制到剪贴板");
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="min-h-screen">
      <div className="container py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">提示词库</h1>
          <p className="text-lg text-muted-foreground">
            精心编写的 Cursor 提示词模板，可直接复制到 Cursor 使用。
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <h2 className="text-sm font-semibold text-muted-foreground uppercase mb-4">
            按分类筛选
          </h2>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                selectedCategory === null
                  ? "bg-primary text-primary-foreground"
                  : "border border-border hover:border-primary"
              }`}
            >
              全部
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "border border-border hover:border-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Prompts Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredPrompts.map((prompt) => (
            <div
              key={prompt.id}
              className="p-6 rounded-lg border border-border hover:border-primary hover:shadow-lg transition-all flex flex-col"
            >
              <div className="mb-4 flex-1">
                <h3 className="font-bold text-lg mb-2">{prompt.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {prompt.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {prompt.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-muted rounded text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <div className="bg-card border border-border rounded p-3 max-h-32 overflow-y-auto">
                  <p className="text-xs text-muted-foreground font-mono whitespace-pre-wrap break-words">
                    {prompt.prompt.substring(0, 200)}...
                  </p>
                </div>
                <button
                  onClick={() => copyToClipboard(prompt.prompt, prompt.id)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-medium text-sm"
                >
                  {copiedId === prompt.id ? (
                    <>
                      <Check className="w-4 h-4" />
                      已复制
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      复制提示词
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredPrompts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">没有找到相关提示词</p>
          </div>
        )}
      </div>
    </div>
  );
}
