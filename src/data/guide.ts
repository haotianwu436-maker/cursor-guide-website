export interface GuideSection {
  id: string;
  title: string;
  description: string;
  content: string;
  category: "quickstart" | "prompts" | "tips" | "workflow" | "templates" | "faq";
  order: number;
}

export interface PromptTemplate {
  id: string;
  title: string;
  description: string;
  category: string;
  prompt: string;
  tags: string[];
}

export const guideSections: GuideSection[] = [
  {
    id: "quickstart",
    title: "快速开始",
    description: "3 分钟快速上手 Cursor 开发",
    content: `## 第一步：克隆项目到 Cursor

在 Cursor 中打开终端，执行：
\`\`\`bash
git clone https://github.com/haotianwu436-maker/personal-portfolio.git
cd personal-portfolio
\`\`\`

## 第二步：让 Cursor 理解项目

在 Cursor 的聊天窗口中，粘贴以下提示词：

我有一个个人网站项目（Personal Portfolio）。
项目地址：https://github.com/haotianwu436-maker/personal-portfolio

项目信息：
- 前端：React 19 + Tailwind CSS 4 + TypeScript
- 后端：Express.js + tRPC + MySQL
- 数据库：Drizzle ORM
- 已完成功能：首页、项目详情页、博客系统、留言功能

请先阅读以下文档来理解项目：
1. README.md - 项目概述
2. DEVELOPMENT.md - 开发指南
3. REQUIREMENTS.md - 需求文档
4. FEATURE_ROADMAP.md - 功能建议

然后告诉我您理解了项目的结构和当前状态。

## 第三步：开始工作

根据您想要的功能，在下方选择相应的提示词模板，复制到 Cursor 即可。`,
    category: "quickstart",
    order: 1,
  },
  {
    id: "tips",
    title: "提示词技巧",
    description: "如何有效地与 Cursor 沟通",
    content: `## 1. 提供上下文

告诉 Cursor：
- 项目的技术栈
- 当前的代码结构
- 您想要的具体效果

## 2. 明确需求

使用具体的需求，而不是模糊的描述：

❌ "让联系我板块更好看"
✅ "添加卡片设计，包含图标、标签和链接，Hover 时有阴影效果"

## 3. 提供参考

如果可能，提供参考网站或设计稿：
"参考这个网站的设计：https://example.com"

## 4. 分步骤

将大任务分成小步骤：
1. 首先修改数据库模式
2. 然后创建后端 API
3. 最后实现前端界面

## 5. 要求测试

要求 Cursor 编写测试：
"请为这个功能编写单元测试"`,
    category: "tips",
    order: 2,
  },
  {
    id: "workflow",
    title: "推荐工作流程",
    description: "分阶段的开发计划",
    content: `## 第 1 周：快速胜利

这些功能工作量小，但能显著提升网站体验：

- **Day 1-2**: 发布第一篇博客文章
- **Day 3-4**: 优化联系我板块
- **Day 5-6**: 添加留言管理导航
- **Day 7**: 测试和修复

## 第 2 周：功能完善

增强网站的深度和专业性：

- **Day 1-2**: 文章搜索和标签筛选
- **Day 3-4**: 改进项目卡片设计
- **Day 5-6**: 项目详情页推荐
- **Day 7**: 测试和修复

## 第 3 周：数据和优化

提升网站的专业性和长期价值：

- **Day 1-2**: 文章阅读统计
- **Day 3-4**: SEO 优化
- **Day 5-7**: 性能优化和测试

## 有用的命令

\`\`\`bash
# 启动开发服务器
pnpm dev

# 运行测试
pnpm test

# 检查 TypeScript 错误
pnpm check

# 数据库迁移
pnpm db:push

# 构建生产版本
pnpm build
\`\`\``,
    category: "workflow",
    order: 3,
  },
  {
    id: "faq",
    title: "常见问题",
    description: "快速解决常见问题",
    content: `## Q: Cursor 不理解项目结构怎么办？

A: 在聊天中粘贴项目的文件结构和关键代码，或让 Cursor 打开相关文件。

## Q: 如何让 Cursor 修改特定的文件？

A: 在 Cursor 中打开文件，然后在聊天中说"修改这个文件"或"在这个文件中添加..."。

## Q: Cursor 生成的代码有错误怎么办？

A: 告诉 Cursor 具体的错误信息，让它修复。或者说"这个代码有问题，请重新写"。

## Q: 如何让 Cursor 运行测试？

A: 在 Cursor 的终端中运行 \`pnpm test\`，或让 Cursor 为新功能编写测试。

## Q: 如何让 Cursor 查看数据库？

A: 运行 \`pnpm db:studio\` 打开数据库管理界面，或让 Cursor 查看 \`drizzle/schema.ts\`。`,
    category: "faq",
    order: 4,
  },
];

export const promptTemplates: PromptTemplate[] = [
  {
    id: "blog-post",
    title: "发布第一篇博客文章",
    description: "为网站发布第一篇有温度的博客文章",
    category: "核心功能",
    prompt: `我想在网站上发布第一篇博客文章。

要求：
1. 文章标题：为什么建立这个网站
2. 文章内容：讲述我建立这个网站的初心、理念和目标
3. 文章应该是 Markdown 格式
4. 发布后应该在"一些想法"板块显示
5. 文章应该包含 3-5 个相关标签（如"理念""社区""长期建设"）

请帮我：
1. 生成一份高质量的文章内容（800-1200 字）
2. 提供插入数据库的 SQL 或 API 调用方式
3. 验证文章在网站上正确显示

文章应该体现我的气质：克制、真诚、有温度、人文感。`,
    tags: ["博客", "内容", "快速胜利"],
  },
  {
    id: "contact-ui",
    title: "优化联系我板块",
    description: "改进联系方式的视觉设计和交互",
    category: "核心功能",
    prompt: `我想优化"联系我"板块的视觉设计和交互。

当前状态：
- 邮箱、Instagram、X 的链接已存在
- 留言表单已实现

优化需求：
1. 为联系方式添加更好的视觉卡片设计
   - 每个联系方式显示为一个卡片
   - 包含图标、标签和链接
   - Hover 时有阴影和背景色变化

2. 改进留言表单
   - 提交成功时显示绿色 Toast 提示
   - 提交失败时显示红色 Toast 提示
   - 表单提交后清空输入框

3. 添加"复制邮箱"功能
   - 点击邮箱卡片可以复制到剪贴板
   - 显示"已复制"的提示

4. 移动端适配
   - 确保卡片在移动端堆叠合理
   - 按钮大小适合手指点击

请在 Home.tsx 中实现这些改进。`,
    tags: ["UI", "交互", "联系方式"],
  },
  {
    id: "message-nav",
    title: "添加留言管理导航",
    description: "在导航栏添加登录后的用户菜单",
    category: "核心功能",
    prompt: `我想在导航栏中添加登录后的用户菜单。

需求：
1. 当用户登录后，导航栏右侧显示用户菜单
2. 菜单包含：
   - 留言管理（/messages）- 显示未读留言数量的红点
   - 退出登录

3. 用户菜单样式：
   - 使用用户头像作为触发按钮
   - 下拉菜单显示选项
   - Hover 时有背景色变化

4. 未读留言计数：
   - 从后端 API 获取未读留言数量
   - 显示为红色徽章（如果 > 0）
   - 每 30 秒刷新一次

请修改 Home.tsx 或创建新的 Navigation 组件。`,
    tags: ["导航", "用户菜单", "留言"],
  },
  {
    id: "mobile-optimize",
    title: "优化移动端设计",
    description: "确保网站在各种手机尺寸上完美显示",
    category: "核心功能",
    prompt: `我需要优化网站的移动端响应式设计。

检查和改进以下方面：
1. 首屏在 iPhone SE（375px）上是否清晰
2. 项目卡片在移动端的堆叠是否合理
3. 按钮大小是否足够大（最小 44x44px）
4. 表单输入框在移动端是否易于点击
5. 导航栏在移动端是否正常显示

具体任务：
1. 在 iPhone 12 (390px)、iPhone SE (375px)、iPad (768px) 上测试
2. 调整 Tailwind 响应式类（sm:、md:、lg:）
3. 优化字体大小和间距
4. 如果需要，添加汉堡菜单（移动端导航）

请提供一份详细的改进清单和代码更改。`,
    tags: ["响应式", "移动端", "优化"],
  },
  {
    id: "search-filter",
    title: "文章搜索和标签筛选",
    description: "为博客添加搜索和筛选功能",
    category: "功能完善",
    prompt: `我想在博客列表页添加搜索和标签筛选功能。

需求：
1. 搜索框
   - 实时搜索文章标题和摘要
   - 搜索框在列表顶部
   - 清空按钮

2. 标签筛选
   - 显示所有文章中使用过的标签
   - 点击标签进行筛选
   - 支持多标签筛选（AND 逻辑）
   - 显示"全部"选项

3. 搜索结果
   - 实时显示匹配的文章
   - 显示"找不到文章"的提示
   - 显示搜索结果数量

4. 样式
   - 搜索框和标签在列表顶部
   - 标签显示为可点击的 Badge
   - 选中的标签高亮显示

请修改或创建 Blog.tsx 组件。`,
    tags: ["搜索", "筛选", "博客"],
  },
  {
    id: "project-cards",
    title: "改进项目卡片设计",
    description: "提升项目卡片的视觉吸引力",
    category: "功能完善",
    prompt: `我想改进首页项目卡片的视觉设计。

当前问题：
- 项目卡片过于简洁
- 缺乏视觉吸引力
- 没有充分展示项目的影响力

改进需求：
1. 项目配图
   - 已有配图，确保正确显示
   - 图片 Hover 时有缩放效果（1.05x）
   - 图片有圆角

2. 项目信息
   - 显示项目标题、角色、描述
   - 添加"影响数字"（如"500+ 社区成员"）
   - 添加项目标签（如"社区建设""文化"）

3. 交互效果
   - 卡片 Hover 时有阴影增加
   - "了解更多"按钮更突出
   - 整个卡片可点击进入详情页

4. 移动端
   - 确保卡片在移动端显示合理
   - 图片高度适应

请修改 Home.tsx 中的 ProjectCard 组件。`,
    tags: ["设计", "卡片", "项目"],
  },
  {
    id: "related-projects",
    title: "项目详情页推荐",
    description: "添加相关项目推荐功能",
    category: "功能完善",
    prompt: `我想在项目详情页底部添加"相关项目"推荐。

需求：
1. 相关项目选择
   - 基于项目标签相似度推荐
   - 显示 2-3 个相关项目
   - 不包括当前项目

2. 展示方式
   - 在详情页底部显示
   - 使用卡片布局
   - 包含项目图片、标题、角色、描述

3. 交互
   - 点击卡片进入该项目详情页
   - Hover 时有效果

4. 样式
   - 与首页项目卡片风格一致
   - 添加"相关项目"标题

请修改 ProjectDetail.tsx 组件。`,
    tags: ["推荐", "项目", "交互"],
  },
  {
    id: "view-stats",
    title: "文章阅读统计",
    description: "添加文章浏览次数统计",
    category: "数据优化",
    prompt: `我想添加文章阅读统计功能。

需求：
1. 数据库
   - 创建 articleViews 表，记录每次浏览
   - 包含字段：id、articleId、viewedAt

2. 后端 API
   - 创建 POST /api/articles/recordView 端点
   - 当用户访问文章时调用此 API
   - 返回当前浏览次数

3. 前端显示
   - 在文章详情页显示阅读数
   - 格式："已被阅读 123 次"
   - 用户访问时自动记录

4. 管理后台
   - 在留言管理页面添加"热门文章"统计
   - 显示阅读最多的 5 篇文章

请实现这个功能。`,
    tags: ["统计", "分析", "文章"],
  },
  {
    id: "seo",
    title: "SEO 优化",
    description: "提升搜索引擎排名",
    category: "专业化",
    prompt: `我想优化网站的 SEO。

需求：
1. Meta 标签
   - 为每个页面添加 title 和 description
   - 首页、项目详情页、文章详情页都需要
   - 使用 React Helmet 或类似库

2. Open Graph 标签
   - 分享时显示正确的预览
   - 包含标题、描述、图片

3. Sitemap
   - 生成 sitemap.xml
   - 包含所有页面和文章

4. robots.txt
   - 创建 robots.txt 文件
   - 允许搜索引擎爬虫

5. 结构化数据
   - 为文章添加 Schema.org 标记
   - 为项目添加 Schema.org 标记

请实现这些 SEO 优化。`,
    tags: ["SEO", "优化", "搜索"],
  },
  {
    id: "performance",
    title: "性能优化",
    description: "提升网站加载速度",
    category: "专业化",
    prompt: `我想优化网站的性能。

需求：
1. 图片优化
   - 转换为 WebP 格式
   - 添加图片懒加载
   - 使用适当的图片尺寸

2. 代码分割
   - 实现路由级别的代码分割
   - 使用 React.lazy 和 Suspense

3. 缓存策略
   - 为静态资源添加长期缓存
   - 实现浏览器缓存

4. 数据库查询优化
   - 检查 N+1 查询问题
   - 添加必要的数据库索引

5. 性能指标
   - Lighthouse 性能评分 > 90
   - 首屏加载时间 < 2s

请提供性能优化的具体建议和实现方案。`,
    tags: ["性能", "优化", "速度"],
  },
];
