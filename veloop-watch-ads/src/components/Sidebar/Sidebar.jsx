import {
  LayoutDashboard,
  PlaySquare,
  Gift,
  Wallet,
  History,
  User,
  Settings,
  HelpCircle,
  Sparkles,
  ArrowRight,
  X,
} from "lucide-react";
import { BrandLogo } from "../../assets/BrandLogo";
import styles from "./Sidebar.module.css";

const PRIMARY_NAV = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "watchAds", label: "Watch Ads", icon: PlaySquare, active: true },
  { id: "rewards", label: "Rewards", icon: Gift },
  { id: "wallet", label: "Wallet", icon: Wallet },
  { id: "history", label: "History", icon: History },
];

const SECONDARY_NAV = [
  { id: "profile", label: "Profile", icon: User },
  { id: "settings", label: "Settings", icon: Settings },
  { id: "help", label: "Help & Support", icon: HelpCircle },
];

export function Sidebar({
  isOpen = false,
  onClose,
  activeTab = "watchAds",
  onSelectTab,
  onOpenWallet,
  onOpenPremium,
}) {
  return (
    <>
      <div
        className={`${styles.mobileBackdrop} ${isOpen ? styles.open : ""}`}
        onClick={onClose}
        aria-hidden="true"
      />

      <aside
        className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : ""}`}
        aria-label="Main Navigation"
      >
        <div>
          {/* Logo */}
          <div className={styles.brandWrapper}>
            <BrandLogo />
            <button
              type="button"
              className={styles.closeMobileBtn}
              onClick={onClose}
              aria-label="Close Sidebar"
            >
              <X size={20} />
            </button>
          </div>

          {/* Primary Navigation */}
          <nav className={styles.navSection}>
            {PRIMARY_NAV.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id || (!activeTab && item.id === "watchAds");
              return (
                <button
                  type="button"
                  key={item.id}
                  className={`${styles.navItem} ${isActive ? styles.activeNavItem : ""}`}
                  onClick={() => {
                    if (item.id === "wallet" && onOpenWallet) {
                      onOpenWallet();
                    } else if (onSelectTab) {
                      onSelectTab(item.id);
                    }
                    if (onClose) onClose();
                  }}
                >
                  <span className={styles.navIcon}>
                    <Icon size={18} />
                  </span>
                  <span>{item.label}</span>
                  {isActive && <span className={styles.activeIndicator} />}
                </button>
              );
            })}

            <div className={styles.navDivider} />

            {/* Secondary Navigation */}
            {SECONDARY_NAV.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  type="button"
                  key={item.id}
                  className={`${styles.navItem} ${isActive ? styles.activeNavItem : ""}`}
                  onClick={() => {
                    if (onSelectTab) onSelectTab(item.id);
                    if (onClose) onClose();
                  }}
                >
                  <span className={styles.navIcon}>
                    <Icon size={18} />
                  </span>
                  <span>{item.label}</span>
                  {isActive && <span className={styles.activeIndicator} />}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Bottom Area: Premium Banner + Copyright */}
        <div className={styles.bottomArea}>
          <div className={styles.premiumCard}>
            <div className={styles.premiumHeader}>
              <div className={styles.premiumIconWrapper}>
                <Sparkles size={14} />
              </div>
              <h4 className={styles.premiumTitle}>Go Premium</h4>
            </div>
            <p className={styles.premiumText}>
              Higher earnings, exclusive offers & zero delays.
            </p>
            <button
              type="button"
              className={styles.upgradeBtn}
              onClick={onOpenPremium}
            >
              <span>Upgrade Now</span>
              <ArrowRight size={13} />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
