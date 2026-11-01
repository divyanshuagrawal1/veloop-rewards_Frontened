import { Bell, ChevronDown, Menu, RotateCcw } from "lucide-react";
import { VECoinIcon } from "../../assets/VECoinIcon";
import { formatNumber } from "../../utils/formatters";
import { useAnimatedCounter } from "../../hooks/useAnimatedCounter";
import styles from "./Topbar.module.css";

export function Topbar({
  balance = 0,
  unreadNotifications = 1,
  onOpenNotifications,
  onOpenWallet,
  onToggleMobileSidebar,
  onResetProgress,
  userInitials = "SM",
  onOpenProfile,
}) {
  const animatedBalance = useAnimatedCounter(balance);

  return (
    <header className={styles.topbar}>
      <div className={styles.leftSection}>
        <button
          type="button"
          className={styles.menuToggle}
          onClick={onToggleMobileSidebar}
          aria-label="Open Navigation Menu"
        >
          <Menu size={20} />
        </button>

        <div className={styles.titleArea}>
          <h1 className={styles.pageTitle}>Watch Ads</h1>
          <p className={styles.pageSubtitle}>Watch ads and earn VEs</p>
        </div>
      </div>

      <div className={styles.rightSection}>
        {/* Reset Progress to 0 Button for Testing */}
        <button
          type="button"
          className={styles.iconBtn}
          onClick={onResetProgress}
          title="Reset progress to 0 (Fresh Start)"
          aria-label="Reset progress to 0"
        >
          <RotateCcw size={16} />
        </button>

        {/* Notification Bell */}
        <button
          type="button"
          className={styles.iconBtn}
          onClick={onOpenNotifications}
          aria-label="Notifications"
          title="Notifications"
        >
          <Bell size={18} />
          {unreadNotifications > 0 && <span className={styles.badgeDot} />}
        </button>

        {/* Balance Badge Pill */}
        <button
          type="button"
          className={styles.balancePill}
          onClick={onOpenWallet}
          title="View Wallet & Cashout"
        >
          <VECoinIcon size={20} />
          <span>{formatNumber(animatedBalance)} VEs</span>
          <ChevronDown size={14} style={{ color: "#f59e0b" }} />
        </button>

        {/* User Profile Avatar */}
        <button
          type="button"
          className={styles.userAvatar}
          onClick={onOpenProfile}
          title="User Profile"
          aria-label="User Profile"
        >
          {userInitials}
        </button>
      </div>
    </header>
  );
}
