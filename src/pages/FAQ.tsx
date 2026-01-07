import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "wouter";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const faqItems: FAQItem[] = [
  {
    id: "content-update",
    question: "我修改了内容但网站没有更新怎么办？",
    answer: `1. 检查文件是否保存
2. 刷新浏览器（Ctrl+F5 或 Cmd+Shift+R）
3. 如果还是不行，重启开发服务器：\`pnpm dev\``,
    category: "troubleshooting",
  },
  {
    id: "add-images",
    question: "我想添加图片到指南中怎么办？",
    answer: `1. 将图片放到 \`public\` 目录中
2. 在 Markdown 中使用：\`![描述](/image-name.png)\``,
    category: "content",
  },
  {
    id: "modify-font",
    question: "我想修改字体怎么办？",
    answer: `1. 编辑 \`index.html\` 中的 Google Fonts 链接
2. 编辑 \`tailwind.config.ts\` 中的 \`fontFamily\` 配置`,
    category: "customization",
  },
  {
    id: "add-route",
    question: "我想添加一个新的路由怎么办？",
    answer: `1. 在 \`src/pages/\` 中创建新的组件
2. 在 \`src/App.tsx\` 中添加新的 \`<Route>\` 标签
3. 在 \`src/components/Sidebar.tsx\` 中添加导航链接`,
    category: "development",
  },
  {
    id: "deploy-website",
    question: "我想部署网站怎么办？",
    answer: `构建生产版本：
\`\`\`bash
pnpm build
\`\`\`

输出文件在 \`dist\` 目录中，可以部署到 Manus、Vercel、Netlify 等平台。`,
    category: "deployment",
  },
  {
    id: "add-guide",
    question: "如何添加新的指南？",
    answer: `编辑 \`src/data/guide.ts\` 文件，在 \`guideSections\` 数组中添加新的指南对象：

\`\`\`typescript
{
  id: "your-guide-id",
  title: "您的指南标题",
  description: "简短的描述",
  content: \`## 指南内容\n\n支持 Markdown 格式...\`,
  category: "tips",
  order: 5,
}
\`\`\`

详见 MAINTENANCE.md 获取完整的代码示例。`,
    category: "content",
  },
  {
    id: "add-prompt",
    question: "如何添加新的提示词？",
    answer: `编辑 \`src/data/guide.ts\` 文件，在 \`promptTemplates\` 数组中添加新的提示词对象：

\`\`\`typescript
{
  id: "unique-prompt-id",
  title: "提示词标题",
  description: "简短的描述",
  category: "核心功能",
  prompt: \`完整的提示词内容...\`,
  tags: ["标签1", "标签2", "标签3"],
}
\`\`\`

详见 MAINTENANCE.md 获取完整的代码示例。`,
    category: "content",
  },
  {
    id: "modify-colors",
    question: "如何修改网站颜色？",
    answer: `编辑 \`src/index.css\` 中的 CSS 变量：

\`\`\`css
:root {
  --primary: 142 71% 45%;        /* 主色 */
  --accent: 142 71% 45%;         /* 强调色 */
  --background: 0 0% 98%;        /* 背景色 */
  --foreground: 0 0% 15%;        /* 文字色 */
}
\`\`\`

使用 OKLCH 颜色格式。`,
    category: "customization",
  },
  {
    id: "use-cursor",
    question: "如何使用 Cursor 进行更新？",
    answer: `1. 在 Cursor 中打开项目文件夹
2. 复制 MAINTENANCE.md 中的提示词模板
3. 粘贴到 Cursor 聊天中
4. Cursor 会自动修改文件
5. 在浏览器中查看实时更新

详见 MAINTENANCE.md 获取完整的工作流程。`,
    category: "development",
  },
  {
    id: "file-structure",
    question: "项目文件结构是什么？",
    answer: `\`\`\`
cursor-guide-website/
├── src/
│   ├── data/
│   │   └── guide.ts              ← 编辑指南和提示词的地方
│   ├── components/
│   │   ├── Header.tsx            ← 修改导航和链接
│   │   └── Sidebar.tsx           ← 修改侧边栏导航
│   ├── pages/
│   │   ├── Home.tsx              ← 首页
│   │   ├── GuideDetail.tsx        ← 指南详情页
│   │   ├── PromptLibrary.tsx      ← 提示词库页面
│   │   └── NotFound.tsx           ← 404 页面
│   ├── App.tsx                   ← 路由配置
│   ├── index.css                 ← 全局样式和颜色
│   └── main.tsx                  ← 入口文件
├── index.html                    ← 网站标题和 Meta 标签
├── tailwind.config.ts            ← Tailwind 配置
└── vite.config.ts                ← Vite 配置
\`\`\``,
    category: "development",
  },
  {
    id: "quick-commands",
    question: "有哪些快速命令？",
    answer: `\`\`\`bash
# 启动开发服务器
pnpm dev

# 构建生产版本
pnpm build

# 预览生产版本
pnpm preview

# 检查 TypeScript 错误
pnpm check

# 格式化代码
pnpm format
\`\`\``,
    category: "development",
  },
  {
    id: "modify-navigation",
    question: "如何修改导航链接？",
    answer: `编辑 \`src/components/Header.tsx\` 中的链接：

\`\`\`typescript
<a
  href="https://your-github-url"  // 修改这里
  target="_blank"
  rel="noopener noreferrer"
>
  GitHub
</a>
\`\`\``,
    category: "customization",
  },
  {
    id: "cursor-workflow",
    question: "使用 Cursor 的完整工作流是什么？",
    answer: `1. 克隆项目：
\`\`\`bash
git clone https://github.com/haotianwu436-maker/cursor-guide-website.git
cd cursor-guide-website
pnpm install
pnpm dev
\`\`\`

2. 在 Cursor 中打开项目文件夹

3. 在 Cursor 聊天中粘贴您的需求

4. Cursor 会自动修改文件

5. 在浏览器中查看实时更新

详见 MAINTENANCE.md 获取完整的提示词模板。`,
    category: "development",
  },
];

const categories = [
  { id: "all", label: "全部" },
  { id: "content", label: "内容管理" },
  { id: "customization", label: "自定义" },
  { id: "development", label: "开发" },
  { id: "deployment", label: "部署" },
  { id: "troubleshooting", label: "故障排除" },
];

export default function FAQ() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredFAQ =
    selectedCategory === "all"
      ? faqItems
      : faqItems.filter((item) => item.category === selectedCategory);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="min-h-screen">
      <div className="container py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">常见问题</h1>
          <p className="text-lg text-muted-foreground">
            快速查找您需要的答案。如果您没有找到您的问题，请查看{" "}
            <Link href="/guide/faq" className="text-primary hover:underline">
              完整的常见问题指南
            </Link>
            。
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <h2 className="text-sm font-semibold text-muted-foreground uppercase mb-4">
            按分类筛选
          </h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "border border-border hover:border-primary"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 max-w-3xl">
          {filteredFAQ.map((item) => (
            <div
              key={item.id}
              className="border border-border rounded-lg overflow-hidden hover:border-primary transition-colors"
            >
              <button
                onClick={() => toggleExpand(item.id)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-muted transition-colors"
              >
                <h3 className="font-bold text-left">{item.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground transition-transform flex-shrink-0 ml-4 ${
                    expandedId === item.id ? "rotate-180" : ""
                  }`}
                />
              </button>

              {expandedId === item.id && (
                <div className="px-6 py-4 bg-muted border-t border-border">
                  <div className="prose max-w-none text-sm">
                    {item.answer.split("\n").map((line, idx) => {
                      if (line.startsWith("```")) {
                        return null;
                      }
                      if (line.match(/^\d+\./)) {
                        return (
                          <div key={idx} className="ml-4 mb-2">
                            {line}
                          </div>
                        );
                      }
                      if (line.trim() === "") {
                        return <div key={idx} className="mb-2" />;
                      }
                      return (
                        <p key={idx} className="mb-2 leading-relaxed">
                          {line}
                        </p>
                      );
                    })}
                  </div>

                  {/* Code blocks */}
                  {item.answer.includes("```") && (
                    <div className="mt-4 bg-card border border-border rounded p-3 overflow-x-auto">
                      <code className="text-xs font-mono text-muted-foreground whitespace-pre-wrap break-words">
                        {item.answer
                          .split("```")
                          .filter((_, i) => i % 2 === 1)
                          .join("\n")}
                      </code>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {filteredFAQ.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">没有找到相关问题</p>
          </div>
        )}

        {/* Additional Resources */}
        <div className="mt-16 pt-12 border-t border-border">
          <h2 className="text-2xl font-bold mb-6">其他资源</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg border border-border hover:border-primary transition-colors">
              <h3 className="font-bold mb-2">📖 完整文档</h3>
              <p className="text-sm text-muted-foreground mb-4">
                查看 MAINTENANCE.md 获取完整的维护和更新指南。
              </p>
              <a
                href="https://github.com/haotianwu436-maker/cursor-guide-website/blob/master/MAINTENANCE.md"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline text-sm font-medium"
              >
                查看文档 →
              </a>
            </div>

            <div className="p-6 rounded-lg border border-border hover:border-primary transition-colors">
              <h3 className="font-bold mb-2">💡 提示词库</h3>
              <p className="text-sm text-muted-foreground mb-4">
                浏览 10+ 精心编写的提示词模板。
              </p>
              <Link href="/prompts" className="text-primary hover:underline text-sm font-medium">
                浏览提示词 →
              </Link>
            </div>

            <div className="p-6 rounded-lg border border-border hover:border-primary transition-colors">
              <h3 className="font-bold mb-2">🚀 快速开始</h3>
              <p className="text-sm text-muted-foreground mb-4">
                3 分钟快速上手 Cursor 开发。
              </p>
              <Link href="/guide/quickstart" className="text-primary hover:underline text-sm font-medium">
                查看指南 →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
