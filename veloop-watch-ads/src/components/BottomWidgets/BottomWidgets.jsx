import { DailyStreakCard } from "./DailyStreakCard";
import { RecentEarningsCard } from "./RecentEarningsCard";
import { WeeklyEarningsCard } from "./WeeklyEarningsCard";
import styles from "./BottomWidgets.module.css";

export function BottomWidgets({
  streakDays = 7,
  recentEarnings = [],
  weeklyEarnings = 1260,
  growthPercentage = 18,
  onViewAllEarnings,
}) {
  return (
    <section className={styles.bottomWidgetsGrid} aria-label="Performance and Activity Metrics">
      <DailyStreakCard streakDays={streakDays} />
      <RecentEarningsCard
        recentEarnings={recentEarnings}
        onViewAll={onViewAllEarnings}
      />
      <WeeklyEarningsCard
        weeklyEarnings={weeklyEarnings}
        growthPercentage={growthPercentage}
      />
    </section>
  );
}

export default BottomWidgets;
