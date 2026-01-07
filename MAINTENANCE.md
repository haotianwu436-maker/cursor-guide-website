# Cursor 开发指南网站 - 维护和更新指南

本指南帮助您快速更新网站内容、修改项目设置，以及使用 Cursor 进行这些操作。

## 📝 目录

1. [添加新的指南内容](#添加新的指南内容)
2. [添加新的提示词](#添加新的提示词)
3. [修改现有内容](#修改现有内容)
4. [修改网站配置](#修改网站配置)
5. [使用 Cursor 进行更新](#使用-cursor-进行更新)
6. [常见更新任务](#常见更新任务)

---

## 添加新的指南内容

### 方式 1：直接编辑数据文件（推荐）

指南内容存储在 `src/data/guide.ts` 文件中。

#### 步骤 1：打开数据文件

```bash
# 在您的编辑器中打开
src/data/guide.ts
```

#### 步骤 2：添加新的指南

在 `guideSections` 数组中添加新的对象：

```typescript
export const guideSections: GuideSection[] = [
  // ... 现有指南
  {
    id: "your-guide-id",                    // 唯一标识符（英文，用连字符）
    title: "您的指南标题",                   // 显示在导航中的标题
    description: "简短的描述",               // 显示在列表中的描述
    content: `## 第一部分

这是您的指南内容，支持 Markdown 格式。

### 子标题

- 列表项 1
- 列表项 2

\`\`\`bash
# 代码块示例
pnpm dev
\`\`\``,
    category: "quickstart",                 // 分类：quickstart、prompts、tips、workflow、templates、faq
    order: 5,                               // 显示顺序
  },
];
```

#### 步骤 3：保存并测试

保存文件后，网站会自动刷新。访问 `http://localhost:3001/guide/your-guide-id` 查看新指南。

### 方式 2：使用 Cursor 添加

在 Cursor 中粘贴以下提示词：

```
我想在 Cursor 开发指南网站中添加一个新的指南。

要求：
1. 指南 ID：[输入英文 ID，如 advanced-tips]
2. 指南标题：[输入标题]
3. 指南描述：[输入简短描述]
4. 指南内容：[输入详细内容，支持 Markdown]
5. 分类：[选择 quickstart、prompts、tips、workflow、templates、faq 之一]
6. 显示顺序：[输入数字，如 5]

请修改 src/data/guide.ts 文件，在 guideSections 数组中添加新的指南对象。
```

---

## 添加新的提示词

### 方式 1：直接编辑数据文件

提示词存储在 `src/data/guide.ts` 文件中的 `promptTemplates` 数组。

#### 步骤 1：打开数据文件

```bash
src/data/guide.ts
```

#### 步骤 2：添加新的提示词

```typescript
export const promptTemplates: PromptTemplate[] = [
  // ... 现有提示词
  {
    id: "unique-prompt-id",                 // 唯一标识符
    title: "提示词标题",                     // 显示在卡片中
    description: "简短的描述",               // 显示在卡片中
    category: "核心功能",                   // 分类
    prompt: `完整的提示词内容

这是您要复制到 Cursor 中的完整提示词。
可以包含多行内容和代码块。

\`\`\`bash
示例代码
\`\`\``,
    tags: ["标签1", "标签2", "标签3"],      // 标签（最多 3 个）
  },
];
```

#### 步骤 3：保存

保存文件后，新提示词会立即显示在提示词库中。

### 方式 2：使用 Cursor 添加

```
我想在 Cursor 开发指南网站的提示词库中添加一个新的提示词。

要求：
1. 提示词 ID：[输入英文 ID]
2. 提示词标题：[输入标题]
3. 提示词描述：[输入描述]
4. 分类：[选择 核心功能、功能完善、数据优化、专业化 之一]
5. 完整提示词内容：[粘贴完整的提示词]
6. 标签：[输入 3 个标签，如 博客、内容、快速胜利]

请修改 src/data/guide.ts 文件，在 promptTemplates 数组中添加新的提示词对象。
```

---

## 修改现有内容

### 修改指南内容

#### 方式 1：直接编辑

1. 打开 `src/data/guide.ts`
2. 找到要修改的指南（按 `id` 搜索）
3. 修改 `content` 字段中的 Markdown 内容
4. 保存文件

#### 方式 2：使用 Cursor

```
我想修改 Cursor 开发指南网站中的一个指南。

要求：
1. 指南 ID：[输入 ID，如 quickstart]
2. 修改内容：[描述要修改的内容]
3. 新内容：[提供新的内容]

请在 src/data/guide.ts 文件中找到对应的指南，修改其 content 字段。
```

### 修改提示词

#### 方式 1：直接编辑

1. 打开 `src/data/guide.ts`
2. 找到要修改的提示词（按 `id` 搜索）
3. 修改 `prompt` 字段中的内容
4. 保存文件

#### 方式 2：使用 Cursor

```
我想修改 Cursor 开发指南网站中的一个提示词。

要求：
1. 提示词 ID：[输入 ID]
2. 修改内容：[描述要修改的内容]
3. 新的提示词：[提供新的完整提示词]

请在 src/data/guide.ts 文件中找到对应的提示词，修改其 prompt 字段。
```

---

## 修改网站配置

### 修改网站标题和描述

编辑 `index.html`：

```html
<title>Cursor 开发指南 - 快速上手个人网站项目</title>
<meta name="description" content="您的新描述" />
```

### 修改网站颜色主题

编辑 `src/index.css` 中的 CSS 变量：

```css
:root {
  --primary: 142 71% 45%;           /* 主色 - 绿色 */
  --accent: 142 71% 45%;            /* 强调色 */
  --background: 0 0% 98%;           /* 背景色 */
  --foreground: 0 0% 15%;           /* 文字色 */
  /* ... 其他颜色 */
}
```

### 修改导航链接

编辑 `src/components/Header.tsx` 中的链接：

```typescript
<a
  href="https://your-github-url"  // 修改这里
  target="_blank"
  rel="noopener noreferrer"
>
  GitHub
</a>
```

---

## 使用 Cursor 进行更新

### 快速提示词模板

#### 模板 1：添加内容

```
我想在 Cursor 开发指南网站中添加 [内容类型]。

要求：
1. [具体需求 1]
2. [具体需求 2]
3. [具体需求 3]

请修改 src/data/guide.ts 文件中的 [guideSections 或 promptTemplates] 数组。
```

#### 模板 2：修改样式

```
我想修改 Cursor 开发指南网站的样式。

要求：
1. [修改描述]
2. [具体效果]

请修改相关的 CSS 文件或 React 组件。
```

#### 模板 3：添加功能

```
我想为 Cursor 开发指南网站添加一个新功能。

功能描述：[描述新功能]

要求：
1. [需求 1]
2. [需求 2]

请创建新的组件或修改现有组件来实现这个功能。
```

---

## 常见更新任务

### 任务 1：添加一篇新的指南

**场景：** 您想添加一篇关于"高级 Cursor 技巧"的指南。

**步骤：**

1. 打开 `src/data/guide.ts`
2. 在 `guideSections` 数组末尾添加：

```typescript
{
  id: "advanced-cursor-tips",
  title: "高级 Cursor 技巧",
  description: "学习更高级的 Cursor 使用技巧",
  content: `## 高级技巧 1：多文件编辑

您可以在 Cursor 中同时编辑多个文件...

## 高级技巧 2：代码生成

使用特定的提示词可以生成更高质量的代码...`,
  category: "tips",
  order: 6,
}
```

3. 保存文件
4. 访问 `http://localhost:3001/guide/advanced-cursor-tips` 查看

### 任务 2：更新一个现有的提示词

**场景：** 您想更新"发布第一篇博客文章"的提示词。

**步骤：**

1. 打开 `src/data/guide.ts`
2. 找到 `id: "blog-post"` 的提示词
3. 修改 `prompt` 字段中的内容
4. 保存文件

### 任务 3：添加一个新的分类

**场景：** 您想添加一个新的提示词分类"高级优化"。

**步骤：**

1. 打开 `src/data/guide.ts`
2. 在现有提示词中添加新的 `category: "高级优化"`
3. 打开 `src/components/Sidebar.tsx`
4. 在 `categories` 对象中添加新的分类
5. 保存文件

### 任务 4：修改网站主色

**场景：** 您想将网站主色从绿色改为蓝色。

**步骤：**

1. 打开 `src/index.css`
2. 找到 `:root` 中的 `--primary` 变量
3. 修改为蓝色值（例如 `217 91% 60%`）
4. 保存文件

### 任务 5：添加新的页面

**场景：** 您想添加一个"最佳实践"页面。

**使用 Cursor 的提示词：**

```
我想在 Cursor 开发指南网站中添加一个新的页面。

要求：
1. 页面路径：/best-practices
2. 页面标题：最佳实践
3. 页面内容：展示 Cursor 开发的最佳实践

请：
1. 创建新的 React 组件 src/pages/BestPractices.tsx
2. 在 src/App.tsx 中添加新的路由
3. 在 src/components/Sidebar.tsx 中添加导航链接
4. 确保样式与现有页面一致
```

---

## 文件结构速查

```
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
```

---

## 常见问题

### Q: 我修改了内容但网站没有更新怎么办？

A: 
1. 检查文件是否保存
2. 刷新浏览器（Ctrl+F5 或 Cmd+Shift+R）
3. 如果还是不行，重启开发服务器：`pnpm dev`

### Q: 我想添加图片到指南中怎么办？

A: 
1. 将图片放到 `public` 目录中
2. 在 Markdown 中使用：`![描述](/image-name.png)`

### Q: 我想修改字体怎么办？

A: 
1. 编辑 `index.html` 中的 Google Fonts 链接
2. 编辑 `tailwind.config.ts` 中的 `fontFamily` 配置

### Q: 我想添加一个新的路由怎么办？

A: 
1. 在 `src/pages/` 中创建新的组件
2. 在 `src/App.tsx` 中添加新的 `<Route>` 标签
3. 在 `src/components/Sidebar.tsx` 中添加导航链接

### Q: 我想部署网站怎么办？

A: 
```bash
# 构建生产版本
pnpm build

# 输出文件在 dist 目录中
# 可以部署到 Manus、Vercel、Netlify 等平台
```

---

## 快速命令

```bash
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
```

---

## 使用 Cursor 的完整工作流

### 步骤 1：克隆项目

```bash
git clone https://github.com/haotianwu436-maker/cursor-guide-website.git
cd cursor-guide-website
pnpm install
pnpm dev
```

### 步骤 2：在 Cursor 中打开项目

在 Cursor 中打开 `cursor-guide-website` 文件夹。

### 步骤 3：告诉 Cursor 您想做什么

在 Cursor 的聊天中粘贴您的需求，例如：

```
我想在 Cursor 开发指南网站中添加一个新的提示词。

提示词标题：优化数据库查询
提示词描述：学习如何优化数据库查询性能
分类：数据优化
标签：数据库、性能、优化

完整提示词：
[粘贴您的提示词内容]

请修改 src/data/guide.ts 文件，在 promptTemplates 数组中添加这个新提示词。
```

### 步骤 4：Cursor 会帮您完成

Cursor 会自动修改文件，您可以在浏览器中看到实时更新。

---

**记住：这个网站是为了帮助开发者快速上手 Cursor 开发。定期更新内容，保持指南和提示词的新鲜和实用！**
