import { X, Bell } from "lucide-react";
import styles from "./NotificationsModal.module.css";

export function NotificationsModal({ notifications = [], onClose, onMarkAllRead }) {
  return (
    <div
      className={styles.backdrop}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
    >
      <div className={styles.modalWindow}>
        <div className={styles.modalHeader}>
          <div className={styles.titleGroup}>
            <Bell size={18} style={{ color: "#f59e0b" }} />
            <h3 className={styles.modalTitle}>Notifications</h3>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <button
              type="button"
              className={styles.markReadBtn}
              onClick={onMarkAllRead}
            >
              Mark all read
            </button>
            <button
              type="button"
              className={styles.closeBtn}
              onClick={onClose}
              aria-label="Close"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        <div className={styles.modalBody}>
          {notifications.length === 0 ? (
            <p className={styles.emptyNote}>No notifications right now.</p>
          ) : (
            notifications.map((n) => (
              <div
                key={n.id}
                className={`${styles.notifItem} ${n.unread ? styles.notifUnread : ""}`}
              >
                <div className={styles.notifHeader}>
                  <h4 className={styles.notifTitle}>{n.title}</h4>
                  <span className={styles.notifTime}>{n.time}</span>
                </div>
                <p className={styles.notifMessage}>{n.message}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default NotificationsModal;
