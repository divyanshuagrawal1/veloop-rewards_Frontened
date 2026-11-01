import { X, ShieldCheck, Check, DollarSign, Lock, AlertCircle } from "lucide-react";
import styles from "./LearnMoreModal.module.css";

export function LearnMoreModal({ onClose }) {
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
            <ShieldCheck size={20} style={{ color: "#10b981" }} />
            <h3 className={styles.modalTitle}>Your VEs. Your Rewards.</h3>
          </div>
          <button
            type="button"
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Close"
          >
            <X size={16} />
          </button>
        </div>

        <div className={styles.modalBody}>
          <div className={styles.ruleItem}>
            <div className={styles.iconCircle}>
              <Check size={16} />
            </div>
            <div>
              <h4 className={styles.ruleTitle}>Earn VEs with Transparency</h4>
              <p className={styles.ruleText}>
                Users earn VEs (VELOOP Earn Tokens) by watching verified sponsor advertisements. Every completed ad credits tokens directly to your available balance.
              </p>
            </div>
          </div>

          <div className={styles.ruleItem}>
            <div className={styles.iconCircle}>
              <DollarSign size={16} />
            </div>
            <div>
              <h4 className={styles.ruleTitle}>Real Cash Conversion</h4>
              <p className={styles.ruleText}>
                Earned VEs carry guaranteed real cash value at a fixed benchmark of 100 VEs = $1.00 USD (&#8776; &#8377;85 INR). Tokens never expire as long as your account remains active.
              </p>
            </div>
          </div>

          <div className={styles.ruleItem}>
            <div className={styles.iconCircle}>
              <Lock size={16} />
            </div>
            <div>
              <h4 className={styles.ruleTitle}>Direct Bank Withdrawals</h4>
              <p className={styles.ruleText}>
                Withdrawals can be transferred directly to your linked bank account once the minimum threshold of 1,000 VEs ($10.00) is reached. All payouts are processed securely with automated verification.
              </p>
            </div>
          </div>

          <div className={styles.noticeBox}>
            <AlertCircle size={18} style={{ color: "#f59e0b", flexShrink: 0 }} />
            <p className={styles.noticeText}>
              To preserve sponsor integrity and safeguard the rewards pool, automated bots, tab background idling, and ad-blocking tools will forfeit reward qualification.
            </p>
          </div>
        </div>

        <div className={styles.modalFooter}>
          <button
            type="button"
            className={styles.understandBtn}
            onClick={onClose}
          >
            Got It, Let's Earn
          </button>
        </div>
      </div>
    </div>
  );
}

export default LearnMoreModal;
