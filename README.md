# 紅隊勇者的證照冒險攻略 🛡️

一個為資安挑戰者打造的學習路線圖，從萌新到大佬的完整進化之路。

## 🌟 專案特色

### 🎨 視覺特效
- **tsParticles 粒子特效** - 動態粒子背景，支援滑鼠互動
- **矩陣雨效果** - 經典駭客風格的日文字符飄落動畫
- **深色主題** - 專業的駭客/紅隊視覺風格
- **發光效果** - 標題和按鈕的霓虹燈發光動畫
- **懸停動畫** - 卡片縮放、發光等互動效果

### 📚 學習內容
- **三階段學習路徑**：
  - 📖 **資安萌新** - 4個初級證照 (CEH, eJPT, PNPT, CNPen)
  - 🎯 **想成為紅隊仔** - 4個中級證照 (OSCP, CRTA, CRTP, BSCP)
  - 👑 **紅隊大佬** - 4個高級證照 (OSWE, OSEP, OSED, CRTM)

- **實戰練習場** - 9個主要學習平台：
  - Hack The Box, TryHackMe, OffSec Proving Grounds
  - Virtual Hacking Labs, Altered Security Red Labs
  - Mossé Cyber Security Institute, HackTricks
  - WiFiChallenge Lab, Web Security Academy

### 🔧 技術架構
- **React 18** - 現代化前端框架
- **Vite** - 快速建構工具
- **Tailwind CSS** - 實用優先的 CSS 框架
- **shadcn/ui** - 高品質 UI 組件庫
- **tsParticles** - 粒子特效系統
- **Lucide Icons** - 美觀的圖示庫
- **Framer Motion** - 流暢動畫效果

## 🚀 快速開始

### 本地開發

1. **克隆專案**
   ```bash
   git clone https://github.com/YOUR_USERNAME/red-team-cert-adventure.git
   cd red-team-cert-adventure
   ```

2. **安裝依賴**
   ```bash
   pnpm install
   # 或使用 npm
   npm install
   ```

3. **啟動開發伺服器**
   ```bash
   pnpm run dev
   # 或使用 npm
   npm run dev
   ```

4. **開啟瀏覽器**
   訪問 `http://localhost:5173` 查看網站

### 建構生產版本

```bash
pnpm run build
# 或使用 npm
npm run build
```

建構完成的檔案將位於 `dist/` 目錄中。

## 📦 GitHub Pages 部署

### 自動部署 (推薦)

1. **Fork 此專案** 到你的 GitHub 帳號

2. **修改倉庫名稱** (可選)
   - 如果你想使用不同的倉庫名稱，請修改 `vite.config.js` 中的 `base` 路徑

3. **啟用 GitHub Pages**
   - 前往 Settings → Pages
   - Source 選擇 "GitHub Actions"

4. **推送程式碼**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

5. **等待部署完成**
   - GitHub Actions 會自動建構並部署網站
   - 部署完成後可在 `https://YOUR_USERNAME.github.io/red-team-cert-adventure/` 訪問

### 手動部署

```bash
# 建構專案
pnpm run build

# 部署到 GitHub Pages (需要安裝 gh-pages)
npm install -g gh-pages
gh-pages -d dist
```

## 🛠️ 自定義配置

### 修改倉庫名稱

如果你使用不同的倉庫名稱，請修改 `vite.config.js`：

```javascript
base: process.env.NODE_ENV === 'production' ? '/YOUR_REPO_NAME/' : '/',
```

### 添加新證照

編輯 `src/data/certifications.json` 檔案，按照現有格式添加新的證照資訊。

### 修改視覺效果

- **粒子特效**：修改 `src/App.jsx` 中的 `particlesOptions` 配置
- **顏色主題**：修改 `src/App.css` 中的 CSS 變數
- **動畫效果**：調整 CSS 動畫和 Tailwind 類別

## 📱 響應式設計

網站完全支援響應式設計，在以下裝置上都能完美顯示：
- 🖥️ 桌面電腦 (1920px+)
- 💻 筆記型電腦 (1024px+)
- 📱 平板電腦 (768px+)
- 📱 手機 (320px+)

## 🎯 瀏覽器支援

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📄 授權條款

MIT License - 詳見 [LICENSE](LICENSE) 檔案

## 🤝 貢獻指南

歡迎提交 Issue 和 Pull Request！

1. Fork 專案
2. 創建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交變更 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 開啟 Pull Request

## 📞 聯絡資訊

如有問題或建議，歡迎透過以下方式聯絡：
- 開啟 GitHub Issue
- 發送 Pull Request

---

**開始你的紅隊冒險之旅！** 🚀

記住，成為紅隊專家不是一蹴而就的過程。保持學習的熱忱，持續實踐，你也能成為資安領域的頂尖高手！
