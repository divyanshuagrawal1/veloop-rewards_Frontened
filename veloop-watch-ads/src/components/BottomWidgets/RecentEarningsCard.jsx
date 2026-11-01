import { Check, Clock, Sparkles } from "lucide-react";
import styles from "./BottomWidgets.module.css";

export function RecentEarningsCard({ recentEarnings = [], onViewAll }) {
  const displayItems = recentEarnings.slice(0, 5);

  return (
    <article className={styles.widgetCard} aria-label="Recent Earnings Activity">
      <div className={styles.cardHeader}>
        <div className={styles.headerTitleGroup}>
          <Clock size={16} style={{ color: "#a855f7" }} />
          <h4 className={styles.widgetTitle}>Recent Earnings</h4>
        </div>

        {recentEarnings.length > 0 && (
          <button
            type="button"
            className={styles.viewAllLink}
            onClick={onViewAll}
          >
            View all
          </button>
        )}
      </div>

      {displayItems.length === 0 ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px 12px",
            textAlign: "center",
            gap: "8px",
            background: "rgba(255, 255, 255, 0.02)",
            borderRadius: "12px",
            border: "1px dashed rgba(255, 255, 255, 0.08)",
          }}
        >
          <Sparkles size={22} style={{ color: "#a855f7" }} />
          <span style={{ fontSize: "13px", fontWeight: 600, color: "#ffffff" }}>
            No recent earnings yet
          </span>
          <span style={{ fontSize: "11.5px", color: "#94a3b8", lineHeight: 1.4 }}>
            Watch any sponsor ad above to log your first reward here.
          </span>
        </div>
      ) : (
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
      )}
    </article>
  );
}

export default RecentEarningsCard;
