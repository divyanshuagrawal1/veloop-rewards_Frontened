import { TrendingUp, BarChart3 } from "lucide-react";
import { formatNumber } from "../../utils/formatters";
import { useAnimatedCounter } from "../../hooks/useAnimatedCounter";
import { generateWeeklyData } from "../../utils/dummyData";
import styles from "./BottomWidgets.module.css";

export function WeeklyEarningsCard({
  todayEarnings = 0,
  weeklyEarnings = 0,
}) {
  const animatedWeekly = useAnimatedCounter(weeklyEarnings);
  const chartData = generateWeeklyData(todayEarnings);
  const maxVal = Math.max(...chartData.map((d) => d.earnings), 50);

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

        {weeklyEarnings > 0 ? (
          <span className={styles.weeklyGrowthPill}>
            <TrendingUp size={12} />
            Active this week
          </span>
        ) : (
          <span className={styles.mutedText} style={{ fontSize: "11.5px" }}>
            New week session
          </span>
        )}
      </div>

      <div className={styles.chartContainer} role="graphics-document" aria-label="Weekly Earnings Bar Chart">
        {chartData.map((col, idx) => {
          const heightPercent = col.earnings > 0 ? Math.max(Math.round((col.earnings / maxVal) * 100), 12) : 6;
          return (
            <div key={idx} className={styles.barCol}>
              <span className={styles.barTooltip}>
                {col.fullDay}: {col.earnings} VEs
              </span>
              <div className={styles.barWrapper}>
                <div
                  className={`${styles.barFill} ${col.isBest ? styles.barBest : ""}`}
                  style={{
                    height: `${heightPercent}%`,
                    opacity: col.earnings > 0 ? 1 : 0.25,
                  }}
                />
              </div>
              <span
                className={styles.barLabel}
                style={{ color: col.isToday ? "#a855f7" : undefined, fontWeight: col.isToday ? 700 : undefined }}
              >
                {col.day}
              </span>
            </div>
          );
        })}
      </div>
    </article>
  );
}

export default WeeklyEarningsCard;
