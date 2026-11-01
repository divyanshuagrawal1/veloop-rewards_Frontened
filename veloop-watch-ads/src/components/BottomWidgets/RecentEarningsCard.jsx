import { Check, Clock } from "lucide-react";
import styles from "./BottomWidgets.module.css";

export function RecentEarningsCard({ recentEarnings = [], onViewAll }) {
  // Display up to 5 items to match the mockup exactly
  const displayItems = recentEarnings.slice(0, 5);

  return (
    <article className={styles.widgetCard} aria-label="Recent Earnings Activity">
      <div className={styles.cardHeader}>
        <div className={styles.headerTitleGroup}>
          <Clock size={16} style={{ color: "#a855f7" }} />
          <h4 className={styles.widgetTitle}>Recent Earnings</h4>
        </div>

        <button
          type="button"
          className={styles.viewAllLink}
          onClick={onViewAll}
        >
          View all
        </button>
      </div>

      <div className={styles.timelineList}>
        {displayItems.map((item) => (
          <div key={item.id} className={styles.timelineItem}>
            <div className={styles.timelineLeft}>
              <div className={styles.timelineCheck}>
                <Check size={11} strokeWidth={3} />
              </div>
              <span className={styles.timelineAdName}>{item.adName}</span>
            </div>

            <div className={styles.timelineRight}>
              <span className={styles.timelineRewardPill}>
                +{item.reward} VEs
              </span>
              <span className={styles.timelineTime}>{item.timeAgo}</span>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
