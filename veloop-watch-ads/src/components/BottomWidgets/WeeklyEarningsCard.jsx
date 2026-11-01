import { TrendingUp, BarChart3 } from "lucide-react";
import { formatNumber } from "../../utils/formatters";
import { useAnimatedCounter } from "../../hooks/useAnimatedCounter";
import { WEEKLY_EARNINGS_CHART_DATA } from "../../utils/dummyData";
import styles from "./BottomWidgets.module.css";

export function WeeklyEarningsCard({
  weeklyEarnings = 1260,
  growthPercentage = 18,
}) {
  const animatedWeekly = useAnimatedCounter(weeklyEarnings);
  const maxVal = Math.max(...WEEKLY_EARNINGS_CHART_DATA.map((d) => d.earnings));

  return (
    <article className={styles.widgetCard} aria-label="Weekly Earnings Performance">
      <div className={styles.cardHeader}>
        <div className={styles.headerTitleGroup}>
          <BarChart3 size={16} style={{ color: "#38bdf8" }} />
          <h4 className={styles.widgetTitle}>Weekly Earnings</h4>
        </div>
      </div>

      <div className={styles.weeklyTopRow}>
        <h3 className={styles.weeklyBigNum}>
          {formatNumber(animatedWeekly)}{" "}
          <span style={{ fontSize: "16px", color: "#fbbf24", fontWeight: 600 }}>
            VEs
          </span>
        </h3>

        <span className={styles.weeklyGrowthPill}>
          <TrendingUp size={12} />
          +{growthPercentage}% vs last week
        </span>
      </div>

      <div className={styles.chartContainer} role="graphics-document" aria-label="Weekly Earnings Bar Chart">
        {WEEKLY_EARNINGS_CHART_DATA.map((col, idx) => {
          const heightPercent = Math.round((col.earnings / maxVal) * 100);
          return (
            <div key={idx} className={styles.barCol}>
              <span className={styles.barTooltip}>
                {col.fullDay}: {col.earnings} VEs
              </span>
              <div className={styles.barWrapper}>
                <div
                  className={`${styles.barFill} ${col.isBest ? styles.barBest : ""}`}
                  style={{ height: `${heightPercent}%` }}
                />
              </div>
              <span className={styles.barLabel}>{col.day}</span>
            </div>
          );
        })}
      </div>
    </article>
  );
}
