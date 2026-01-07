# Cursor 开发指南网站

一个专业的交互式网站，帮助开发者快速学习和使用 Cursor 进行个人网站项目开发。

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/react-19.2.1-blue.svg)
![TypeScript](https://img.shields.io/badge/typescript-5.6.3-blue.svg)

## 🌟 核心特性

- ✅ **10+ 精心编写的提示词模板** - 可直接复制到 Cursor 使用
- ✅ **详细的快速开始指南** - 3 分钟快速上手
- ✅ **工作流程建议** - 分阶段的开发计划
- ✅ **常见问题解答** - 快速解决遇到的问题
- ✅ **提示词技巧** - 学习如何有效地与 Cursor 沟通
- ✅ **分类筛选** - 按功能分类浏览提示词
- ✅ **一键复制** - 轻松复制提示词到剪贴板
- ✅ **响应式设计** - 完美适配移动端、平板和桌面
- ✅ **Markdown 支持** - 所有内容都支持 Markdown 格式

## 🚀 快速开始

### 前置要求

- Node.js 18+
- pnpm 10+

### 安装

```bash
# 克隆项目
git clone https://github.com/haotianwu436-maker/cursor-guide-website.git
cd cursor-guide-website

# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev
```

访问 `http://localhost:3001` 查看网站。

### 构建生产版本

```bash
pnpm build
pnpm preview
```

## 📁 项目结构

```
cursor-guide-website/
├── src/
│   ├── components/              # 可复用组件
│   │   ├── Header.tsx          # 顶部导航
│   │   └── Sidebar.tsx         # 侧边栏导航
│   ├── pages/                  # 页面组件
│   │   ├── Home.tsx            # 首页
│   │   ├── GuideDetail.tsx      # 指南详情页
│   │   ├── PromptLibrary.tsx    # 提示词库页面
│   │   └── NotFound.tsx        # 404 页面
│   ├── data/
│   │   └── guide.ts            # 指南和提示词数据
│   ├── App.tsx                 # 主应用
│   ├── main.tsx                # React 入口
│   └── index.css               # 全局样式
├── index.html                  # HTML 模板
├── package.json                # 项目配置
├── tsconfig.json               # TypeScript 配置
├── vite.config.ts              # Vite 配置
├── tailwind.config.ts          # Tailwind CSS 配置
└── MAINTENANCE.md              # 维护指南
```

## 📝 内容管理

### 添加新的指南

编辑 `src/data/guide.ts` 中的 `guideSections` 数组：

```typescript
{
  id: "your-guide-id",
  title: "您的指南标题",
  description: "简短的描述",
  content: `## 指南内容\n\n支持 Markdown 格式...`,
  category: "quickstart",
  order: 5,
}
```

### 添加新的提示词

编辑 `src/data/guide.ts` 中的 `promptTemplates` 数组：

```typescript
{
  id: "unique-prompt-id",
  title: "提示词标题",
  description: "简短的描述",
  category: "核心功能",
  prompt: `完整的提示词内容...`,
  tags: ["标签1", "标签2", "标签3"],
}
```

详见 [MAINTENANCE.md](./MAINTENANCE.md) 获取完整的维护指南。

## 🛠️ 技术栈

- **前端框架**: React 19 + TypeScript
- **样式**: Tailwind CSS 4
- **路由**: Wouter
- **构建工具**: Vite
- **UI 组件**: Radix UI
- **图标**: Lucide React
- **通知**: Sonner
- **动画**: Framer Motion

## 📋 可用命令

```bash
# 开发模式
pnpm dev

# 构建生产版本
pnpm build

# 预览生产版本
pnpm preview

# TypeScript 检查
pnpm check

# 代码格式化
pnpm format
```

## 🎨 自定义

### 修改主题颜色

编辑 `src/index.css` 中的 CSS 变量：

```css
:root {
  --primary: 142 71% 45%;        /* 主色 */
  --accent: 142 71% 45%;         /* 强调色 */
  --background: 0 0% 98%;        /* 背景色 */
  --foreground: 0 0% 15%;        /* 文字色 */
}
```

### 修改网站标题

编辑 `index.html`：

```html
<title>您的网站标题</title>
<meta name="description" content="您的网站描述" />
```

## 🌐 部署

### 部署到 Manus

1. 构建项目：`pnpm build`
2. 在 Manus 管理面板中创建新项目
3. 上传 `dist` 文件夹中的文件

### 部署到其他平台

支持部署到 Vercel、Netlify、GitHub Pages 等任何静态网站托管平台。

## 📖 使用指南

### 对于开发者

1. 访问网站首页
2. 选择您需要的功能分类
3. 找到相应的提示词
4. 点击"复制提示词"按钮
5. 粘贴到 Cursor 中
6. Cursor 会帮您完成开发任务

### 对于维护者

详见 [MAINTENANCE.md](./MAINTENANCE.md) 获取完整的维护指南。

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License - 详见 [LICENSE](./LICENSE)

## 🔗 相关链接

- [个人网站项目](https://github.com/haotianwu436-maker/personal-portfolio)
- [Cursor 官网](https://cursor.com)
- [React 文档](https://react.dev)
- [Tailwind CSS 文档](https://tailwindcss.com)

## 💬 常见问题

### Q: 如何添加新的指南？

A: 编辑 `src/data/guide.ts` 文件，在 `guideSections` 数组中添加新的指南对象。详见 MAINTENANCE.md。

### Q: 如何修改网站颜色？

A: 编辑 `src/index.css` 中的 CSS 变量。详见 MAINTENANCE.md。

### Q: 如何使用 Cursor 进行更新？

A: 在 Cursor 中打开项目，使用 MAINTENANCE.md 中提供的提示词模板进行更新。

### Q: 网站支持哪些浏览器？

A: 支持所有现代浏览器（Chrome、Firefox、Safari、Edge）。

## 📞 联系方式

- GitHub: [@haotianwu436-maker](https://github.com/haotianwu436-maker)
- Email: haotianwu436@gmail.com
- Instagram: [@dlxbxy](https://instagram.com/dlxbxy)
- X (Twitter): [@dlxbxy](https://twitter.com/dlxbxy)

---

**记住：这个网站是为了帮助开发者快速上手 Cursor 开发。定期更新内容，保持指南和提示词的新鲜和实用！**
