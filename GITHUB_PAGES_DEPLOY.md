# GitHub Pages 部署指南

## 專案可行性評估 ✅

這個 Next.js 專案**可以部署到 GitHub Pages**，因為：

| 條件 | 狀態 | 說明 |
|------|------|------|
| 無 Server-side rendering | ✅ | 全部是 Client Component 或靜態頁面 |
| 無動態 API routes | ✅ | 沒有 `/api/*` 路由 |
| 無 `next/dynamic` with SSR | ✅ | 可安全 static export |
| `images.unoptimized: true` | ✅ | 已設定，不需要 Next.js image server |
| 路由架構 | ✅ | 使用 `useState` 切換 section，不是 file-system routing，GitHub Pages 不會有 404 問題 |
| `@vercel/analytics` | ⚠️ | 不會報錯，但 analytics 資料不會送到 Vercel dashboard（非致命） |

---

## 名詞說明：兩種 GitHub Pages 類型

```
┌─────────────────────────────────────────────────────────┐
│  User Page                                               │
│  Repo 名稱：<username>.github.io                         │
│  網址：https://<username>.github.io/                     │
│  basePath：不需要                                        │
├─────────────────────────────────────────────────────────┤
│  Project Page                                            │
│  Repo 名稱：任意 (e.g. my-portfolio)                     │
│  網址：https://<username>.github.io/my-portfolio/        │
│  basePath：/my-portfolio  ← 必須設定                     │
└─────────────────────────────────────────────────────────┘
```

---

## 完整部署流程

### 前置準備

```bash
# 確認 git 已設定
git config --global user.name  "Your Name"
git config --global user.email "you@example.com"
```

---

### Step 1 — 建立 GitHub Repo

**情境 A：User Page（推薦，最簡單）**

1. 到 GitHub 建立新 repo，名稱必須是 `<your-username>.github.io`
2. 例如帳號是 `carlhanson`，repo 名稱就是 `carlhanson.github.io`

**情境 B：Project Page**

1. 到 GitHub 建立新 repo，名稱隨意，例如 `my-portfolio`
2. 記住這個 repo 名稱，後面 `REPO_NAME` 會用到

---

### Step 2 — 在本地初始化 git（如果尚未初始化）

```bash
cd /home/asus/test   # 你的專案目錄

git init
git remote add origin https://github.com/<your-username>/<repo-name>.git
```

---

### Step 3 — 修改 next.config.mjs（已完成）

[next.config.mjs](next.config.mjs) 已更新，關鍵設定：

```js
output: 'export',      // 輸出靜態 HTML/CSS/JS
trailingSlash: true,   // /about → /about/index.html
basePath: repoName ? `/${repoName}` : '',
assetPrefix: repoName ? `/${repoName}/` : '',
```

---

### Step 4 — 本地測試 build

**User Page：**
```bash
pnpm build
# 輸出在 out/ 資料夾
```

**Project Page：**
```bash
REPO_NAME=my-portfolio pnpm build
# 輸出在 out/ 資料夾，所有 asset 路徑會加上 /my-portfolio/
```

---

### Step 5 — 推送到 GitHub

**使用 deploy.sh（自動化）：**

```bash
# User Page
./deploy.sh

# Project Page
REPO_NAME=my-portfolio ./deploy.sh
```

**手動方式（了解原理）：**

```bash
# 1. build
REPO_NAME=my-portfolio pnpm build

# 2. 加 .nojekyll（避免 GitHub 用 Jekyll 處理 _ 開頭資料夾，例如 _next）
touch out/.nojekyll

# 3. 推到 gh-pages 分支
git add out/ -f
git commit -m "deploy"
git subtree push --prefix out origin gh-pages
```

---

### Step 6 — 設定 GitHub Pages 來源

1. 到你的 GitHub repo → **Settings** → **Pages**
2. Source 選擇 **Deploy from a branch**
3. Branch 選擇 **`gh-pages`**，資料夾選 **`/ (root)`**
4. 點 **Save**

等 1~3 分鐘，GitHub Actions 會自動部署。

---

### Step 7 — 確認上線

- User Page：`https://<username>.github.io/`
- Project Page：`https://<username>.github.io/<repo-name>/`

---

## 路由問題完整說明

### 問題根源

GitHub Pages 是純靜態檔案伺服器。當使用者直接訪問 `https://user.github.io/about` 時：
- **本專案**：不受影響 ✅（因為只有一個 `index.html`，section 切換靠 `useState`，不改變 URL）
- 如果未來加了 Next.js file-system 路由（`/app/about/page.tsx`）：才需要額外處理

### 已啟用的防護

| 設定 | 作用 |
|------|------|
| `trailingSlash: true` | `/about` 自動對應 `/about/index.html`，GitHub Pages 可正確回應 |
| `output: 'export'` | 每個路由都產生對應的靜態 HTML |
| `.nojekyll` | 避免 Jekyll 忽略 `_next/` 資料夾導致資源 404 |

### 萬用 404.html 方案（未來保險做法）

如果未來有多頁路由，可在 `public/404.html` 加 redirect：

```html
<!-- public/404.html -->
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <script>
      // 將 404 路徑轉換為 query string，再 redirect 回首頁
      var path = window.location.pathname;
      window.location.replace(
        window.location.origin + '/?p=' + encodeURIComponent(path)
      );
    </script>
  </head>
</html>
```

---

## @vercel/analytics 說明

目前 [app/layout.tsx](app/layout.tsx) 有：
```tsx
{process.env.NODE_ENV === 'production' && <Analytics />}
```

- **靜態 export 不會報錯** — 這個元件只是注入一個 `<script>` tag
- **不會有 analytics 資料** — 因為資料要送到 Vercel，但你的網站在 GitHub Pages
- **建議**：若不需要，可以移除 `@vercel/analytics` 的引用，或用 [Google Analytics](https://analytics.google.com) 替代

---

## 快速參考 Cheat Sheet

```bash
# 第一次部署（Project Page）
git remote add origin https://github.com/<user>/<repo>.git
REPO_NAME=<repo> ./deploy.sh

# 第一次部署（User Page）
git remote add origin https://github.com/<user>/<user>.github.io.git
./deploy.sh

# 之後每次更新
REPO_NAME=<repo> ./deploy.sh   # Project Page
./deploy.sh                     # User Page
```

---

## 目錄結構說明

```
.
├── next.config.mjs      ← 已修改：output=export, basePath, trailingSlash
├── deploy.sh            ← 一鍵 build + push 到 gh-pages
├── out/                 ← build 後自動產生，不需要 commit 到 main
└── GITHUB_PAGES_DEPLOY.md  ← 本文件
```

> **提示**：建議在 `.gitignore` 中加入 `out/`，避免把 build 產物 commit 到 main 分支。

---

## 常見錯誤排查

| 錯誤現象 | 原因 | 解法 |
|---------|------|------|
| CSS/JS 404 | 沒設 `assetPrefix` 或 `basePath` | 確認 `REPO_NAME` 環境變數有傳入 |
| `_next/` 資料夾 404 | 缺少 `.nojekyll` | `touch out/.nojekyll` 後重新推 |
| 圖片破圖 | `images.unoptimized` 沒設 | 已設定，確認 next.config.mjs |
| 直接輸入 URL 出現 404 | GitHub Pages 無法處理 SPA 路由 | 加 `public/404.html` redirect（見上方方案） |
| build 失敗 `getServerSideProps` | SSR 不支援 static export | 改成 `getStaticProps` 或 Client Component |
