// Initial clean baseline user state starting from 0
export const INITIAL_USER_STATE = {
  userName: "Sanket M.",
  userInitials: "SM",
  balance: 0,
  lifetimeEarnings: 0,
  todayEarnings: 0,
  dailyGoal: 166,
  adsWatchedToday: 0,
  remainingAds: 6,
  weeklyEarningsTotal: 0,
  dailyStreak: 0,
};

// 6 diverse sponsor advertisements matching Page 4 & 10 of Veloop Rewards specification
export const INITIAL_ADS_DATA = [
  {
    id: "ad-1",
    title: "FinVerse Pro",
    category: "Finance",
    tagline: "The future of smart finance management.",
    description: "Experience AI-driven wealth insights, zero-commission portfolio tracking, and bank-grade encryption with FinVerse Pro.",
    duration: 45,
    reward: 38,
    badge: "Sponsored",
    isBonus: false,
    status: "available",
    accentColor: "#6366f1",
    themeGradient: "linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(168, 85, 247, 0.1))",
    iconType: "finance",
    videoSimulator: {
      headline: "Take Control of Your Financial Future",
      features: ["0% Trading Fees", "Automated AI Investing", "Multi-Currency Wallet"],
      ctaText: "Download FinVerse Pro Today",
    },
  },
  {
    id: "ad-2",
    title: "StrideX",
    category: "Lifestyle",
    tagline: "Step up your game with ultimate comfort.",
    description: "Engineered with adaptive cloud-foam responsive cushioning, StrideX delivers high-impact athletic support and streetwear aesthetics.",
    duration: 30,
    reward: 25,
    badge: "Sponsored",
    isBonus: false,
    status: "available",
    accentColor: "#10b981",
    themeGradient: "linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(6, 182, 212, 0.1))",
    iconType: "shoes",
    videoSimulator: {
      headline: "Engineered for Peak Performance",
      features: ["Breathable Aerofiber Mesh", "CloudStep Impact Cushioning", "Eco-Recycled Materials"],
      ctaText: "Explore the Collection",
    },
  },
  {
    id: "ad-3",
    title: "Melody Beats",
    category: "Entertainment",
    tagline: "Feel every beat. Anytime. Anywhere.",
    description: "Immerse yourself in studio-grade 360° spatial audio, hybrid noise cancellation, and up to 48 hours of uninterrupted playback.",
    duration: 60,
    reward: 50,
    badge: "Sponsored",
    isBonus: true,
    bonusText: "Limited Time Bonus",
    status: "available",
    accentColor: "#f59e0b",
    themeGradient: "linear-gradient(135deg, rgba(245, 158, 11, 0.25), rgba(239, 68, 68, 0.15))",
    iconType: "headphones",
    videoSimulator: {
      headline: "Next-Gen Audio Experience",
      features: ["Lossless HD Audio", "Hybrid Active Noise Cancellation", "48h Ultra Battery"],
      ctaText: "Get 30% Off With VELOOP",
    },
  },
  {
    id: "ad-4",
    title: "DriveEZ",
    category: "Travel",
    tagline: "Book rides easier than ever before.",
    description: "On-demand city mobility connecting you to verified hybrid and EV drivers in less than 3 minutes with guaranteed price lock.",
    duration: 40,
    reward: 20,
    badge: "Sponsored",
    isBonus: false,
    status: "available",
    accentColor: "#0ea5e9",
    themeGradient: "linear-gradient(135deg, rgba(14, 165, 233, 0.2), rgba(99, 102, 241, 0.1))",
    iconType: "car",
    videoSimulator: {
      headline: "Urban Commuting Reimagined",
      features: ["Average 3-Minute Pickup", "Zero Surge Guarantee", "100% Carbon-Neutral Rides"],
      ctaText: "Book Your First Ride Free",
    },
  },
  {
    id: "ad-5",
    title: "SafeNet VPN",
    category: "Technology",
    tagline: "Secure. Private. Lightning fast.",
    description: "Next-generation WireGuard® protocol shields your identity across 90+ global nodes with ultra-fast speeds and strict zero-logs policy.",
    duration: 30,
    reward: 18,
    badge: "Sponsored",
    isBonus: false,
    status: "available",
    accentColor: "#8b5cf6",
    themeGradient: "linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(217, 70, 239, 0.1))",
    iconType: "vpn",
    videoSimulator: {
      headline: "Bank-Grade Encryption for Every Device",
      features: ["Strict Zero-Logs Audited", "10Gbps Global Servers", "Simultaneous Protection on 10 Devices"],
      ctaText: "Try 30 Days Risk-Free",
    },
  },
  {
    id: "ad-6",
    title: "ShopJoy",
    category: "Shopping",
    tagline: "Best deals. Big savings. Just for you.",
    description: "Curated lightning flash discounts from top verified brands with guaranteed price match, instant cashback, and same-day express shipping.",
    duration: 25,
    reward: 15,
    badge: "Sponsored",
    isBonus: false,
    status: "available",
    accentColor: "#ec4899",
    themeGradient: "linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(244, 63, 94, 0.1))",
    iconType: "shopping",
    videoSimulator: {
      headline: "Shop Smart. Save Big Every Day.",
      features: ["Up to 70% Off Premium Brands", "Instant 5% Wallet Cashback", "Same-Day Delivery Available"],
      ctaText: "Unlock Member Deals",
    },
  },
];

// Starts empty for a new user
export const INITIAL_RECENT_EARNINGS = [];

// Helper to generate weekly chart data dynamically based on today's earnings
export const generateWeeklyData = (todayEarnings = 0) => {
  const days = [
    { day: "Mon", fullDay: "Monday", earnings: 0 },
    { day: "Tue", fullDay: "Tuesday", earnings: 0 },
    { day: "Wed", fullDay: "Wednesday", earnings: 0 },
    { day: "Thu", fullDay: "Thursday", earnings: 0 },
    { day: "Fri", fullDay: "Friday", earnings: 0 },
    { day: "Sat", fullDay: "Saturday", earnings: 0 },
    { day: "Sun", fullDay: "Sunday", earnings: 0 },
  ];

  // Map JS getDay() (0 = Sun, 1 = Mon ... 6 = Sat) to days array index (0 = Mon ... 6 = Sun)
  const currentJsDay = new Date().getDay();
  const currentDayIndex = currentJsDay === 0 ? 6 : currentJsDay - 1;

  days[currentDayIndex].earnings = todayEarnings;
  days[currentDayIndex].isToday = true;

  const maxEarnings = Math.max(...days.map((d) => d.earnings));
  return days.map((d) => ({
    ...d,
    isBest: d.earnings > 0 && d.earnings === maxEarnings,
  }));
};

// Helper to generate day streak indicators based on current day and whether ads were completed
export const generateStreakDays = (hasCompletedToday = false) => {
  const currentJsDay = new Date().getDay();
  const currentDayIndex = currentJsDay === 0 ? 6 : currentJsDay - 1;

  const labels = ["M", "T", "W", "T", "F", "S", "S"];
  const fullNames = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return labels.map((label, idx) => ({
    label,
    full: fullNames[idx],
    isToday: idx === currentDayIndex,
    active: idx === currentDayIndex ? hasCompletedToday : false,
  }));
};

export const INITIAL_NOTIFICATIONS_DATA = [
  {
    id: "notif-1",
    title: "Welcome to VELOOP Rewards! 🎉",
    message: "Start watching sponsor ads today to collect your first VEs and earn real cash.",
    time: "Just now",
    unread: true,
  },
  {
    id: "notif-2",
    title: "Melody Beats Bonus Ad Available",
    message: "Special limited-time 50 VE ad is live in your available ads queue.",
    time: "Today",
    unread: true,
  },
  {
    id: "notif-3",
    title: "Daily Goal Set: 166 VEs",
    message: "Complete sponsor ads today to reach your 166 VE milestone.",
    time: "Today",
    unread: false,
  },
];
