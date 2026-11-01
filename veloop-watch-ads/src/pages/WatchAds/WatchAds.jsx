import { useState, useEffect } from "react";
import { Check, X } from "lucide-react";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Topbar } from "../../components/Topbar/Topbar";
import { HeroSection } from "../../components/HeroSection/HeroSection";
import { StatsOverview } from "../../components/StatsOverview/StatsOverview";
import { TrustBanner } from "../../components/TrustBanner/TrustBanner";
import { BonusBanner } from "../../components/BonusBanner/BonusBanner";
import { AvailableAds } from "../../components/AvailableAds/AvailableAds";
import { BottomWidgets } from "../../components/BottomWidgets/BottomWidgets";
import { HowItWorks } from "../../components/HowItWorks/HowItWorks";
import { WalletModal } from "../../components/WalletModal/WalletModal";
import { LearnMoreModal } from "../../components/LearnMoreModal/LearnMoreModal";
import { NotificationsModal } from "../../components/NotificationsModal/NotificationsModal";
import { BonusModal } from "../../components/BonusBanner/BonusModal";
import { ConfettiCelebration } from "../../components/Confetti/ConfettiCelebration";

import {
  INITIAL_USER_STATE,
  INITIAL_ADS_DATA,
  INITIAL_RECENT_EARNINGS,
  INITIAL_NOTIFICATIONS_DATA,
} from "../../utils/dummyData";

import styles from "./WatchAds.module.css";

// Storage key updated to ensure a clean start from 0 for all users
const STORAGE_KEY = "veloop_rewards_v2_zero_start";

export function WatchAds() {
  // 1. User metrics & balance state (starts at 0)
  const [userState, setUserState] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.userState) return parsed.userState;
      }
    } catch {
      // fallback
    }
    return INITIAL_USER_STATE;
  });

  // 2. Advertisements list (all 6 start as available)
  const [ads, setAds] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.ads && parsed.ads.length > 0) return parsed.ads;
      }
    } catch {
      // fallback
    }
    return INITIAL_ADS_DATA;
  });

  // 3. Recent Earnings timeline (starts empty at 0)
  const [recentEarnings, setRecentEarnings] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.recentEarnings) return parsed.recentEarnings;
      }
    } catch {
      // fallback
    }
    return INITIAL_RECENT_EARNINGS;
  });

  // 4. Notifications
  const [notifications, setNotifications] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.notifications) return parsed.notifications;
      }
    } catch {
      // fallback
    }
    return INITIAL_NOTIFICATIONS_DATA;
  });

  // Modal visibility states
  const [isWalletOpen, setIsWalletOpen] = useState(false);
  const [isLearnMoreOpen, setIsLearnMoreOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isBonusOpen, setIsBonusOpen] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [activeNavTab, setActiveNavTab] = useState("watchAds");

  // Celebration & Toast notification states
  const [triggerConfetti, setTriggerConfetti] = useState(false);
  const [successToast, setSuccessToast] = useState(null);

  // Dynamic calculations
  const remainingAdsCount = ads.filter((a) => a.status === "available").length;
  const adsWatchedCount = ads.filter((a) => a.status === "watched").length;
  const hasCompletedAdToday = adsWatchedCount > 0;

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          userState,
          ads,
          recentEarnings,
          notifications,
        })
      );
    } catch {
      // ignore storage quota issues
    }
  }, [userState, ads, recentEarnings, notifications]);

  // Toast auto-dismiss
  useEffect(() => {
    if (!successToast) return;
    const timer = setTimeout(() => {
      setSuccessToast(null);
    }, 4500);
    return () => clearTimeout(timer);
  }, [successToast]);

  // Handler: Ad completed and reward claimed
  const handleAdComplete = (completedAd) => {
    const rewardAmount = Number(completedAd.reward);

    // 1. Update user state (exact mathematical increment)
    setUserState((prev) => ({
      ...prev,
      balance: prev.balance + rewardAmount,
      lifetimeEarnings: prev.lifetimeEarnings + rewardAmount,
      todayEarnings: prev.todayEarnings + rewardAmount,
      weeklyEarningsTotal: prev.weeklyEarningsTotal + rewardAmount,
      adsWatchedToday: prev.adsWatchedToday + 1,
      remainingAds: Math.max(prev.remainingAds - 1, 0),
      dailyStreak: prev.dailyStreak === 0 ? 1 : prev.dailyStreak,
    }));

    // 2. Mark this ad as watched
    setAds((prevAds) =>
      prevAds.map((a) =>
        a.id === completedAd.id ? { ...a, status: "watched" } : a
      )
    );

    // 3. Prepend to recent earnings timeline
    const newRecord = {
      id: `rec-${Date.now()}`,
      adName: completedAd.title,
      reward: rewardAmount,
      timeAgo: "Just now",
      date: new Date().toISOString(),
      category: completedAd.category,
    };
    setRecentEarnings((prev) => [newRecord, ...prev]);

    // 4. Trigger celebration
    setTriggerConfetti(true);
    setSuccessToast({
      title: "Reward Successfully Earned!",
      message: `+${rewardAmount} VEs credited for watching ${completedAd.title}`,
    });
  };

  // Reset progress back to 0 fresh start
  const handleResetProgress = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
    setUserState(INITIAL_USER_STATE);
    setAds(INITIAL_ADS_DATA);
    setRecentEarnings(INITIAL_RECENT_EARNINGS);
    setNotifications(INITIAL_NOTIFICATIONS_DATA);
    setSuccessToast({
      title: "Progress Reset to 0",
      message: "All earnings, ad queues, and progress have been reset to zero.",
    });
  };

  const scrollToAds = () => {
    const target = document.getElementById("available-ads-section");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleMarkAllNotificationsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, unread: false })));
  };

  const unreadCount = notifications.filter((n) => n.unread).length;

  return (
    <div className={styles.layoutWrapper}>
      {/* Global Particle Confetti */}
      <ConfettiCelebration
        trigger={triggerConfetti}
        onComplete={() => setTriggerConfetti(false)}
      />

      {/* Left Sidebar */}
      <Sidebar
        isOpen={isMobileSidebarOpen}
        onClose={() => setIsMobileSidebarOpen(false)}
        activeTab={activeNavTab}
        onSelectTab={(tabId) => {
          setActiveNavTab(tabId);
          if (tabId === "wallet") setIsWalletOpen(true);
          if (tabId === "rewards") setIsBonusOpen(true);
        }}
        onOpenWallet={() => setIsWalletOpen(true)}
        onOpenPremium={() => setIsBonusOpen(true)}
      />

      {/* Main Content Column */}
      <div className={styles.mainColumn}>
        {/* Top Header Bar */}
        <Topbar
          balance={userState.balance}
          unreadNotifications={unreadCount}
          onOpenNotifications={() => setIsNotificationsOpen(true)}
          onOpenWallet={() => setIsWalletOpen(true)}
          onToggleMobileSidebar={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
          onResetProgress={handleResetProgress}
          userInitials={userState.userInitials}
          onOpenProfile={() => setIsWalletOpen(true)}
        />

        {/* Page Inner Container */}
        <main className={styles.contentContainer}>
          {/* 1. Hero Section (Starts from 0 / 166 VEs) */}
          <HeroSection
            todayEarnings={userState.todayEarnings}
            dailyGoal={userState.dailyGoal}
          />

          {/* 2. Statistics KPI Overview Cards (Dynamic 0 start) */}
          <StatsOverview
            todayEarnings={userState.todayEarnings}
            lifetimeEarnings={userState.lifetimeEarnings}
            adsWatchedToday={adsWatchedCount}
            remainingAds={remainingAdsCount}
            totalAdsCount={ads.length}
            onScrollToAds={scrollToAds}
          />

          {/* 3. Trust & Withdrawal Information Banner */}
          <TrustBanner onLearnMore={() => setIsLearnMoreOpen(true)} />

          {/* 4. Weekend Bonus Rush Banner */}
          <BonusBanner onOpenBonus={() => setIsBonusOpen(true)} />

          {/* 5. Available Ads Section with Cards & Player Modal */}
          <AvailableAds
            ads={ads}
            onAdComplete={handleAdComplete}
          />

          {/* 6. Bottom Widgets: Daily Streak, Recent Earnings, Weekly Earnings */}
          <BottomWidgets
            streakDays={userState.dailyStreak}
            hasCompletedToday={hasCompletedAdToday}
            recentEarnings={recentEarnings}
            todayEarnings={userState.todayEarnings}
            weeklyEarnings={userState.weeklyEarningsTotal}
            onViewAllEarnings={() => setIsWalletOpen(true)}
          />

          {/* 7. How It Works Section */}
          <HowItWorks onOpenWallet={() => setIsWalletOpen(true)} />
        </main>
      </div>

      {/* Interactive Modals */}
      {isWalletOpen && (
        <WalletModal
          balance={userState.balance}
          onClose={() => setIsWalletOpen(false)}
        />
      )}

      {isLearnMoreOpen && (
        <LearnMoreModal onClose={() => setIsLearnMoreOpen(false)} />
      )}

      {isNotificationsOpen && (
        <NotificationsModal
          notifications={notifications}
          onClose={() => setIsNotificationsOpen(false)}
          onMarkAllRead={handleMarkAllNotificationsRead}
        />
      )}

      {isBonusOpen && (
        <BonusModal
          onClose={() => setIsBonusOpen(false)}
          onGoToBonusAd={() => {
            scrollToAds();
          }}
        />
      )}

      {/* Floating Success Toast Notification */}
      {successToast && (
        <div className={styles.successToast} role="alert">
          <div className={styles.toastCheckIcon}>
            <Check size={20} strokeWidth={3} />
          </div>
          <div>
            <h5 className={styles.toastTitle}>{successToast.title}</h5>
            <p className={styles.toastSubtitle}>{successToast.message}</p>
          </div>
          <button
            type="button"
            className={styles.toastCloseBtn}
            onClick={() => setSuccessToast(null)}
            aria-label="Close notification"
          >
            <X size={16} />
          </button>
        </div>
      )}
    </div>
  );
}

export default WatchAds;
