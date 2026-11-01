import { Bell, ChevronDown, Menu } from "lucide-react";
import { VECoinIcon } from "../../assets/VECoinIcon";
import { formatNumber } from "../../utils/formatters";
import { useAnimatedCounter } from "../../hooks/useAnimatedCounter";
import styles from "./Topbar.module.css";

export function Topbar({
  balance = 2450,
  unreadNotifications = 2,
  onOpenNotifications,
  onOpenWallet,
  onToggleMobileSidebar,
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
