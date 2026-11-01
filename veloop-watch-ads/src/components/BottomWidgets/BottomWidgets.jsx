import { DailyStreakCard } from "./DailyStreakCard";
import { RecentEarningsCard } from "./RecentEarningsCard";
import { WeeklyEarningsCard } from "./WeeklyEarningsCard";
import styles from "./BottomWidgets.module.css";

export function BottomWidgets({
  streakDays = 0,
  hasCompletedToday = false,
  recentEarnings = [],
  todayEarnings = 0,
  weeklyEarnings = 0,
  onViewAllEarnings,
}) {
  return (
    <section className={styles.bottomWidgetsGrid} aria-label="Performance and Activity Metrics">
      <DailyStreakCard
        streakDays={streakDays}
        hasCompletedToday={hasCompletedToday}
      />
      <RecentEarningsCard
        recentEarnings={recentEarnings}
        onViewAll={onViewAllEarnings}
      />
      <WeeklyEarningsCard
        todayEarnings={todayEarnings}
        weeklyEarnings={weeklyEarnings}
      />
    </section>
  );
}

export default BottomWidgets;
