import { Flame, Check } from "lucide-react";
import { StreakGiftIllustration } from "../../assets/StreakGiftIllustration";
import { generateStreakDays } from "../../utils/dummyData";
import styles from "./BottomWidgets.module.css";

export function DailyStreakCard({ streakDays = 0, hasCompletedToday = false }) {
  const days = generateStreakDays(hasCompletedToday);

  return (
    <article className={styles.widgetCard} aria-label="Daily Streak Status">
      <div className={styles.cardHeader}>
        <div className={styles.headerTitleGroup}>
          <Flame size={17} style={{ color: "#f97316" }} />
          <h4 className={styles.widgetTitle}>Daily Streak</h4>
        </div>
      </div>

      <div className={styles.streakMainRow}>
        <div>
          <h3 className={styles.streakBigNum}>{streakDays} {streakDays === 1 ? "Day" : "Days"}</h3>
          <p className={styles.streakSubtitle}>
            {streakDays === 0
              ? "Watch 1 ad to start streak!"
              : "Keep it up!"}
          </p>
        </div>

        <div className={styles.giftIllustrationWrapper}>
          <StreakGiftIllustration />
        </div>
      </div>

      <div className={styles.daysRow}>
        {days.map((day, idx) => (
          <div key={idx} className={styles.dayPill}>
            <span className={styles.dayLetter}>{day.label}</span>
            <div
              className={`${styles.dayIndicator} ${
                day.active ? styles.dayActive : ""
              } ${day.isToday ? styles.dayToday : ""}`}
              title={`${day.full} ${day.active ? "- Completed" : "- Pending"}`}
            >
              {day.active ? <Check size={12} strokeWidth={3} /> : null}
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

export default DailyStreakCard;
