# 等待的天空 — 桃園 XR+AI 永續航線文創園區

> **飛過冷戰，等你回家** · Beyond Cold War, Waiting for Home
> 黑貓任務小組 · v5.6 勳章 LOGO 最終版

依據《等待的天空》v5.6 企劃書（25 頁完整藍圖）建構之互動式網站，主題為桃園航空城 × 黑貓中隊（中華民國空軍第 35 中隊）紀念與活化提案。

## 🚀 立即查看網站

### 方法 1：GitHub Pages（推薦・1 分鐘上線）

1. 前往 [Settings → Pages](https://github.com/marco3939/taoyuan1965/settings/pages)
2. **Source** 選 `Deploy from a branch`
3. **Branch** 選 `claude/aviation-city-interactive-app-YgBXe` → `/ (root)` → 按 **Save**
4. 約 1–2 分鐘後上線於：
   👉 **https://marco3939.github.io/taoyuan1965/**

### 方法 2：本機預覽

```bash
git clone https://github.com/marco3939/taoyuan1965.git
cd taoyuan1965
git checkout claude/aviation-city-interactive-app-YgBXe
python3 -m http.server 8000
# 開啟 http://localhost:8000
```

### 方法 3：一鍵部署到 Cloudflare Pages / Netlify / Vercel

把 GitHub repo 連結貼到任一平台，自動偵測為靜態網站，3 分鐘上線。

---

## 📐 網站結構（完整對應 PDF 25 頁）

| 路徑 | PDF 章節 | 內容 |
|---|---|---|
| `index.html` | 封面・目錄 | Hero + 桃花飛機勳章 + 三大子議題 + 四維融合 + KPI |
| `pages/executive-summary.html` | P3-4 | 執行摘要・五步思維鏈・KPI 速覽 |
| `pages/chapter1-positioning.html` | P5-7 | 城市定位（PEST/SWOT 雷達 + 雙軸地圖） |
| `pages/chapter2-history.html` | P8 | 黑貓中隊 1955→2026 互動時間軸 + U-2 規格 |
| `pages/chapter2-yibaqing.html` | P9 | 《一把青》文化座標 |
| `pages/chapter2-venue.html` | P10 | 場館前後對照 |
| `pages/chapter3-vr.html` | P12 | VR 6 場景 + 雙峰情緒曲線 |
| `pages/chapter3-ar.html` | P13 | AR 5 城市點位互動地圖 + 教育包 |
| `pages/chapter3-ai.html` | P14 | **AI 對話 RAG 即時 Demo（虛擬黑貓老兵「李上校」）** |
| `pages/chapter3-cultural.html` | P15 | 文創 8 業種 + 街區動線圖 |
| `pages/chapter3-dining.html` | P16 | 5 餐飲品牌（黑貓食堂/機場咖啡/眷村小灶/U-2 補給站/天空小酒館） |
| `pages/chapter3-marketing.html` | P17 | 推廣矩陣四象限 |
| `pages/chapter4-feasibility.html` | P18-22 | 風險矩陣 + 18 個月甘特 + 預算圓餅 + 6 SDGs |
| `pages/medal.html` | LOGO 解析 | **桃花飛機勳章 3D 視差互動 + 4 變體** |
| `pages/games.html` | 互動體驗 | **4 款遊戲：紙飛機 Canvas / 解密文件 / AR 集章 / 勳章拼圖** |

## 🎨 設計系統

| 顏色 | HEX | 用途 |
|---|---|---|
| 桃粉 | `#E8A4B8` | 桃花・眷村之心 |
| 軍綠 | `#4A5D3A` | 戰機・冷戰之天 |
| 卡其／勳章金 | `#C9A961` | 1960s 復古紙感 |
| 復古紙感 | `#F4EBD0` | 文件背景 |
| 深棕 | `#3A2817` | 墨水・文件感 |

**字型：** Noto Serif TC + Cinzel + Special Elite + Courier Prime（皆 Google Fonts CDN）

## 🛡️ 史實邊界協定

每筆陳述標註：
- `[L1]` 公開史實（國防部、CIA 解密文件、國家檔案管理局）
- `[L2]` 文本脈絡（白先勇《一把青》、公視 2015 影視 IP）
- `[L3]` 提案推論（KPI 推估、設計擴展）
- `[L4]` 缺資料待補（Phase 1 完成補齊）

## 🤖 AI 倫理聲明

- AI 互動採 **RAG 錨定真實 corpus**
- **禁止** 自由生成歷史人物言論
- **禁止** 生成擊落數字等敏感數據
- 每段 AI 回覆附「原始史料連結」與「來源錨定編號」
- 介面標註「AI 生成內容，僅供參考」

## 📦 技術棧

純靜態網站，無任何 build step、無外部依賴：

- HTML5 / CSS3（CSS Grid + Custom Properties）
- 原生 JavaScript（無框架）
- Google Fonts CDN
- SVG 內聯（勳章、地圖、圖表）
- HTML5 Canvas（紙飛機遊戲）

## 📄 授權與聲明

本提案符合大會匿名審查規定，封面與正文不出現學校名稱、科系名稱。
團隊成員（化名）送件前依大會規定填具。

提報日期：中華民國 115 年（2026）5 月 6 日
提交期限：2026 年 5 月 27 日（三）12:00

---

★ **黑貓任務小組** · 飛過冷戰，等你回家 · v5.6
