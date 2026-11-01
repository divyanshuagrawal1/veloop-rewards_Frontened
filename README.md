# VELOOP Rewards – Watch Ads Page Complete UI/UX Redesign
> **Frontend Internship Task 04 Assignment** · Production-Ready React Implementation

![VELOOP Rewards Dark Theme UI](https://img.shields.io/badge/Theme-Fintech%20Dark-8b5cf6?style=for-the-badge)
![React 19](https://img.shields.io/badge/React-19.3-61dafb?style=for-the-badge&logo=react)
![Vite 8](https://img.shields.io/badge/Vite-8.3-646cff?style=for-the-badge&logo=vite)
![Bootstrap 5](https://img.shields.io/badge/Bootstrap-5.3-7952b3?style=for-the-badge&logo=bootstrap)
![ESLint Passed](https://img.shields.io/badge/ESLint-0%20Errors-10b981?style=for-the-badge)

---

## 📌 Project Overview
**VELOOP Rewards** is a high-growth consumer rewards platform where users earn **VEs (VELOOP Earn Tokens)** by engaging with brand advertisements and daily reward activities. Earned VEs can later be converted into real cash and directly withdrawn to the user's linked bank account.

This repository delivers a **complete, ground-up UI/UX redesign and frontend redevelopment** of the core **Watch Ads** earning page, inspired by leading fintech applications. It provides a polished, modern, trustworthy, gamified, and responsive user experience designed to maximize retention and engagement.

---

## ✨ Key Features & Requirements Matrix

### 1. 🧭 Navigation Shell & Dashboard Architecture
- **Left Brand Sidebar**: Includes the official amber hexagonal VELOOP double-chevron logo, primary navigation (`Dashboard`, `Watch Ads` with active glowing state, `Rewards`, `Wallet`, `History`), secondary navigation (`Profile`, `Settings`, `Help & Support`), and a **"Go Premium"** upgrade card.
- **Top Header Bar**: Breadcrumb title, real-time unread notification indicator bell, active token balance badge with dropdown trigger (`2,450 VEs`), and user profile avatar (`SM`).
- **Responsive Mobile Drawer**: Off-canvas sliding drawer with overlay backdrop for mobile and tablet devices.

### 2. 🚀 Premium Hero Section
- High-impact headline: *"Earn VEs, Real Rewards"* with value proposition copy.
- **Daily Earnings Progress**: Live tracker displaying `96 / 150 VEs` (64% progress) with dynamic motivational status messages.
- **High-Fidelity 3D Graphic**: Custom vector composition featuring a glossy perspective video player window, glowing 3D embossed golden `VE` token, and ambient sparkle stars.

### 3. 📊 KPI Statistics Grid (Animated Counters)
Four fintech performance cards featuring animated counter transitions:
1. **Today's Earnings**: `96 VEs` with `+12% vs yesterday` trend badge.
2. **Lifetime Earnings**: `12,450 VEs` (All time).
3. **Ads Watched Today**: `5` with `+2 vs yesterday` trend badge.
4. **Remaining Ads**: `7` with one-click quick jump to available ads.

### 4. 🛡️ Trust & Reward Information Banner
- Verified security shield banner communicating that users earn VEs, convert them to real cash, and withdraw to their linked bank accounts once minimum conditions are met.
- **Interactive "Learn More" Modal**: Outlines conversion rates (100 VEs = $1.00 USD), withdrawal rules, security verification, and bot protection.

### 5. 🔥 Weekend 2X VE Bonus Rush Banner (`/watchAd-bonus`)
- Prominent gamified bonus banner highlighting limited-time double VE incentives.
- Interactive modal displaying partner challenges, streak multipliers, and instant links to bonus ads.

### 6. 🎬 Available Ads Engine (6 Sponsor Cards)
Six diverse, high-value sponsor advertisements:
1. **FinVerse Pro** (`Finance` · 45s · `+38 VEs` · Available)
2. **StrideX** (`Lifestyle` · 30s · `+25 VEs` · Available)
3. **Melody Beats** (`Entertainment` · 60s · `+50 VEs` · Available · *Limited Time Bonus*)
4. **DriveEZ** (`Travel` · 40s · `+20 VEs` · Available)
5. **SafeNet VPN** (`Technology` · 30s · `+18 VEs` · Available)
6. **ShopJoy** (`Shopping` · 25s · `+15 VEs` · Available)
- **Filters**: Category tabs (`All`, `Finance`, `Lifestyle`, `Entertainment`, `Travel`, `Technology`, `Shopping`) and status toggle (`All`, `Available`, `Watched`).
- **Auto-Refresh Countdown**: Real-time 45-second timer (`Auto refresh in 00:45`) with manual trigger and animated rotating icon.
- **Loading Skeleton State**: Polished shimmer skeletons during ad list refreshes.
- **Empty State**: Friendly fallback when filters yield zero matching ads with a one-click reset action.

### 7. 📺 Interactive Ad Player Simulator & Celebration
- Modern modal commercial simulation with ad sponsor branding, sound toggle (`Mute/Unmute`), live audio visualizer equalizer bars, and anti-skip notice.
- Fast-forward developer demo test mode for instantaneous evaluation without waiting full duration.
- **Celebration Particle Explosion**: Canvas-based confetti burst on ad completion.
- **Success State & Toast**: Reward claim dialog and floating notification toast auto-dismissing after 4.5 seconds.
- **Automated Balance Increment**: Updates wallet balance, today's earnings, lifetime earnings, completed count, and recent earnings timeline.

### 8. 📈 Bottom Performance Widgets
- **Daily Streak**: `7 Days` badge with festive gift box 3D illustration and Monday–Sunday completion checkmarks.
- **Recent Earnings Timeline**: Chronological log of recent ad rewards (`FinVerse Pro +38 VEs`, `StrideX +25 VEs`, etc.) automatically updated on new completions.
- **Weekly Earnings Chart**: `1,260 VEs` (+18% growth) with interactive Mon–Sun bar chart featuring tooltips and best-day highlighting.

### 9. 💡 "How It Works" & Wallet Cashout Modal
- Step 1: **Watch** short ads & complete timer.
- Step 2: **Earn** VEs instantly credited to balance.
- Step 3: **Withdraw** real cash to linked bank account.
- **Wallet Modal**: Live conversion calculator (100 VEs = $1.00 USD / &#8776; &#8377;85 INR), minimum threshold tracker (1,000 VEs / $10.00), bank linking form, and instant withdrawal request simulation with confirmation receipt.

---

## 🛠️ Technology Stack
- **Framework**: [React.js 19](https://react.dev/)
- **Build Tool**: [Vite 8](https://vitejs.dev/)
- **Styling**: Scoped [CSS Modules](https://github.com/css-modules/css-modules) (`.module.css`), modern CSS variables, fluid responsive layouts
- **UI Framework Utilities**: [Bootstrap 5](https://getbootstrap.com/)
- **Icons**: [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **State & Custom Hooks**:
  - `useAnimatedCounter`: Smooth numerical easing for metric changes
  - `useAutoRefreshTimer`: 45-second ad cycle countdown
  - `localStorage` persistence under `veloop_rewards_dashboard_state`
- **Animation**: Native Canvas Confetti Particle Engine + CSS keyframes (`floatSlow`, `pulseSparkle`, `bounceCelebration`)

---

## 📁 Scalable Folder Structure
```text
veloop-watch-ads/
├── public/
│   ├── favicon.svg             # Application brand favicon
│   └── icons.svg
├── src/
│   ├── assets/                 # Custom brand SVGs & high-fidelity graphics
│   │   ├── BrandLogo.jsx       # VELOOP Rewards official hexagon logo
│   │   ├── HeroGraphic.jsx     # 3D tilted video screen & gold VE coin
│   │   ├── AdIllustrations.jsx # 6 vector illustrations for sponsor cards
│   │   ├── StreakGiftIllustration.jsx # 3D gift box with ribbon & stars
│   │   └── VECoinIcon.jsx      # Reusable glowing gold VE coin token
│   ├── components/
│   │   ├── Sidebar/            # Left navigation sidebar & mobile drawer
│   │   ├── Topbar/             # Header bar with balance pill & avatar
│   │   ├── HeroSection/        # Daily goal progress & hero graphic
│   │   ├── StatsOverview/      # 4 KPI cards with animated counters
│   │   ├── TrustBanner/        # "Your VEs. Your Rewards" security banner
│   │   ├── BonusBanner/        # 2X VE weekend rush & /watchAd-bonus modal
│   │   ├── AvailableAds/       # Ad cards, filter pills, auto-refresh & player modal
│   │   │   ├── AdCard.jsx
│   │   │   └── AdPlayerModal.jsx
│   │   ├── BottomWidgets/      # Daily Streak, Recent Earnings, Weekly Chart
│   │   │   ├── DailyStreakCard.jsx
│   │   │   ├── RecentEarningsCard.jsx
│   │   │   └── WeeklyEarningsCard.jsx
│   │   ├── HowItWorks/         # 3-step workflow & "View My Wallet" trigger
│   │   ├── WalletModal/        # Real cash conversion & bank withdrawal form
│   │   ├── LearnMoreModal/     # Reward conditions & policy breakdown
│   │   ├── NotificationsModal/ # Milestone notifications list
│   │   └── Confetti/           # Particle celebration canvas component
│   ├── hooks/
│   │   ├── useAnimatedCounter.js
│   │   └── useAutoRefreshTimer.js
│   ├── utils/
│   │   ├── dummyData.js        # Realistic baseline data per PDF specifications
│   │   └── formatters.js       # Number, currency (USD/INR) & duration formatters
│   ├── styles/
│   │   └── global.css          # Theme variables, typography & scrollbar rules
│   ├── pages/
│   │   └── WatchAds/
│   │       ├── WatchAds.jsx    # Primary page orchestrator & state manager
│   │       └── WatchAds.module.css
│   ├── App.jsx
│   └── main.jsx
├── eslint.config.js
├── index.html
├── package.json
└── vite.config.js
```

---

## 🚀 Installation & Running Guide

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- `npm` or `pnpm`

### 1. Clone or Open the Repository
```bash
git clone <your-repository-url>
cd veloop-watch-ads
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start the Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173` to explore the application.

### 4. Build for Production
```bash
npm run build
```
Creates an optimized production build in the `dist/` directory.

### 5. Run ESLint Code Quality Check
```bash
npm run lint
```
Runs ESLint against all source files with zero errors and zero warnings.

---

## 🌐 Live Deployment Guide

### Deploying to Vercel
1. Push this repository to GitHub.
2. Sign in to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import this repository.
4. If deploying from the repository root, set the **Root Directory** to `veloop-watch-ads`.
5. Keep Build Command as `npm run build` and Output Directory as `dist`.
6. Click **Deploy**.

### Deploying to Netlify
1. Sign in to [Netlify](https://www.netlify.com/) and click **Add new site > Import an existing project**.
2. Connect your GitHub repository.
3. Set **Base directory** to `veloop-watch-ads`.
4. Set **Build command** to `npm run build` and **Publish directory** to `veloop-watch-ads/dist`.
5. Click **Deploy site**.

---

## 📱 Responsiveness Verification
The user interface has been tested across all modern viewport breakpoints without layout breaks:
- **Mobile Phones (320px – 480px)**: Compact single-column card flow, off-canvas navigation drawer, full-width touch targets.
- **Large Mobile & Phablets (481px – 767px)**: Fluid KPI metric cards, responsive modal layouts.
- **Tablets (768px – 1024px)**: 2-column available ads grid, side-by-side hero container.
- **Laptops & Desktops (1025px – 1440px)**: 3-column ad grid, fixed left sidebar, 3-widget bottom section matching Page 10 of the specification.
- **Ultra-Wide Screens (1440px+)**: Constrained maximum container width with ambient glow balance.

---

## 👤 Author Information
- **Assignment**: VELOOP Rewards – Frontend Internship Task 04
- **Role**: Frontend Engineering Intern Candidate
- **Project**: Complete Watch Ads Page UI/UX Redesign
