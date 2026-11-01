import { TrendingUp, Coins, PlayCircle, Eye, ArrowUpRight } from "lucide-react";
import { formatNumber } from "../../utils/formatters";
import { useAnimatedCounter } from "../../hooks/useAnimatedCounter";
import styles from "./StatsOverview.module.css";

export function StatsOverview({
  todayEarnings = 96,
  lifetimeEarnings = 12450,
  adsWatchedToday = 5,
  remainingAds = 7,
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
          <span className={styles.trendBadge}>
            <TrendingUp size={12} />
            +12% vs yesterday
          </span>
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
          <span className={styles.mutedText}>All time</span>
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
          <span className={styles.trendBadge}>
            <TrendingUp size={12} />
            +2 vs yesterday
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
          <button
            type="button"
            className={styles.actionLinkText}
            onClick={onScrollToAds}
            style={{ background: "none", border: "none", padding: 0, display: "inline-flex", alignItems: "center", gap: "2px" }}
          >
            Start watching now!
            <ArrowUpRight size={13} />
          </button>
        </div>
      </article>
    </section>
  );
}

export default StatsOverview;
