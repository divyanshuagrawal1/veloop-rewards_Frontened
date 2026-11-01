import { Flame, Check } from "lucide-react";
import { StreakGiftIllustration } from "../../assets/StreakGiftIllustration";
import { DAILY_STREAK_DAYS } from "../../utils/dummyData";
import styles from "./BottomWidgets.module.css";

export function DailyStreakCard({ streakDays = 7 }) {
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
          <h3 className={styles.streakBigNum}>{streakDays} Days</h3>
          <p className={styles.streakSubtitle}>Keep it up!</p>
        </div>

        <div className={styles.giftIllustrationWrapper}>
          <StreakGiftIllustration />
        </div>
      </div>

      <div className={styles.daysRow}>
        {DAILY_STREAK_DAYS.map((day, idx) => (
          <div key={idx} className={styles.dayPill}>
            <span className={styles.dayLetter}>{day.label}</span>
            <div
              className={`${styles.dayIndicator} ${
                day.active ? styles.dayActive : ""
              } ${day.isToday ? styles.dayToday : ""}`}
              title={`${day.full} - Completed`}
            >
              {day.active ? <Check size={12} strokeWidth={3} /> : null}
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
