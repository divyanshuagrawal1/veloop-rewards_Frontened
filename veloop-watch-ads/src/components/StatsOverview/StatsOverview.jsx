import { TrendingUp, Coins, PlayCircle, Eye, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { formatNumber } from "../../utils/formatters";
import { useAnimatedCounter } from "../../hooks/useAnimatedCounter";
import styles from "./StatsOverview.module.css";

export function StatsOverview({
  todayEarnings = 0,
  lifetimeEarnings = 0,
  adsWatchedToday = 0,
  remainingAds = 6,
  totalAdsCount = 6,
  onScrollToAds,
}) {
  const animatedToday = useAnimatedCounter(todayEarnings);
  const animatedLifetime = useAnimatedCounter(lifetimeEarnings);
  const animatedWatched = useAnimatedCounter(adsWatchedToday);
  const animatedRemaining = useAnimatedCounter(remainingAds);

  return (
    <section className={styles.statsGrid} aria-label="Key Performance Indicators">
      {/* 1. Today's Earnings */}
      <article className={styles.statCard}>
        <div className={styles.cardHeader}>
          <span className={styles.cardTitle}>Today's Earnings</span>
          <div
            className={styles.iconWrapper}
            style={{ background: "rgba(16, 185, 129, 0.12)", color: "#10b981" }}
          >
            <Coins size={18} />
          </div>
        </div>

        <div className={styles.valueRow}>
          <strong className={styles.mainValue}>{formatNumber(animatedToday)}</strong>
          <span className={styles.unit}>VEs</span>
        </div>

        <div className={styles.footerRow}>
          {todayEarnings > 0 ? (
            <span className={styles.trendBadge}>
              <TrendingUp size={12} />
              +{todayEarnings} VEs earned today
            </span>
          ) : (
            <span className={styles.mutedText}>
              🎯 Daily goal: 166 VEs
            </span>
          )}
        </div>
      </article>

      {/* 2. Lifetime Earnings */}
      <article className={styles.statCard}>
        <div className={styles.cardHeader}>
          <span className={styles.cardTitle}>Lifetime Earnings</span>
          <div
            className={styles.iconWrapper}
            style={{ background: "rgba(245, 158, 11, 0.12)", color: "#f59e0b" }}
          >
            <TrendingUp size={18} />
          </div>
        </div>

        <div className={styles.valueRow}>
          <strong className={styles.mainValue}>{formatNumber(animatedLifetime)}</strong>
          <span className={styles.unit}>VEs</span>
        </div>

        <div className={styles.footerRow}>
          <span className={styles.mutedText}>All-time accumulated</span>
        </div>
      </article>

      {/* 3. Ads Watched Today */}
      <article className={styles.statCard}>
        <div className={styles.cardHeader}>
          <span className={styles.cardTitle}>Ads Watched Today</span>
          <div
            className={styles.iconWrapper}
            style={{ background: "rgba(99, 102, 241, 0.12)", color: "#6366f1" }}
          >
            <Eye size={18} />
          </div>
        </div>

        <div className={styles.valueRow}>
          <strong className={styles.mainValue}>{animatedWatched}</strong>
        </div>

        <div className={styles.footerRow}>
          <span className={styles.mutedText}>
            {adsWatchedToday} of {totalAdsCount} ads watched
          </span>
        </div>
      </article>

      {/* 4. Remaining Ads */}
      <article className={styles.statCard}>
        <div className={styles.cardHeader}>
          <span className={styles.cardTitle}>Remaining Ads</span>
          <div
            className={styles.iconWrapper}
            style={{ background: "rgba(139, 92, 246, 0.12)", color: "#8b5cf6" }}
          >
            <PlayCircle size={18} />
          </div>
        </div>

        <div className={styles.valueRow}>
          <strong className={styles.mainValue}>{animatedRemaining}</strong>
        </div>

        <div className={styles.footerRow}>
          {remainingAds > 0 ? (
            <button
              type="button"
              className={styles.actionLinkText}
              onClick={onScrollToAds}
              style={{ background: "none", border: "none", padding: 0, display: "inline-flex", alignItems: "center", gap: "2px" }}
            >
              Start watching now!
              <ArrowUpRight size={13} />
            </button>
          ) : (
            <span style={{ color: "#34d399", fontSize: "12px", display: "inline-flex", alignItems: "center", gap: "4px" }}>
              <CheckCircle2 size={13} />
              All ads completed!
            </span>
          )}
        </div>
      </article>
    </section>
  );
}

export default StatsOverview;
