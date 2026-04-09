# 个人主页项目

## 项目简介
这是一个纯静态的个人主页网站，展示了广东科学技术职业学院商学院商务数据分析与应用专业学生谭青青的个人信息和课程信息。

## 技术栈
- React 18
- TypeScript
- Tailwind CSS
- Vite

## 项目结构
```
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── hooks/
│   ├── lib/
│   ├── pages/
│   │   └── Home.tsx
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── .trae/documents/
│   ├── PRD.md
│   └── Technical-Architecture.md
└── package.json
```

## 功能特点
- 个人信息展示
- 课程信息展示（Python基础、数据分析技术、数据采集与处理、供应链数据分析、数据库原理与应用）
- 专业技能展示
- 响应式设计，适配不同设备
- 美观的视觉效果和动画

## 本地开发
1. 安装依赖：`npm install`
2. 启动开发服务器：`npm run dev`
3. 访问：`http://localhost:5173`

## 构建项目
```bash
npm run build
```
构建产物将生成在 `dist` 目录中。

## 部署到 Cloudflare Pages
1. 登录 Cloudflare 账号
2. 进入 Pages 服务
3. 选择 "Create a project"
4. 连接你的 Git 仓库（如果使用 Git）
5. 配置构建设置：
   - 构建命令：`npm run build`
   - 构建输出目录：`dist`
   - 环境变量：无需特殊配置
6. 点击 "Save and Deploy"
7. 部署完成后，Cloudflare Pages 会生成一个唯一的域名

## 项目预览
部署后，你可以通过 Cloudflare Pages 提供的域名访问个人主页。