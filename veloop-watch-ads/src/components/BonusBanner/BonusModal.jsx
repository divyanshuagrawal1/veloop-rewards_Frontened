import { X, Flame, Sparkles, Gift, ArrowRight } from "lucide-react";
import { VECoinIcon } from "../../assets/VECoinIcon";
import styles from "./BonusModal.module.css";

export function BonusModal({ onClose, onGoToBonusAd }) {
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
            <div className={styles.fireIcon}>
              <Flame size={18} />
            </div>
            <div>
              <h3 className={styles.modalTitle}>VELOOP Bonus Rush</h3>
              <span className={styles.routePill}>Route: /watchAd-bonus</span>
            </div>
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
          <div className={styles.heroBonusCard}>
            <Sparkles size={28} style={{ color: "#f59e0b", marginBottom: "8px" }} />
            <h4 className={styles.heroHeading}>Double VE Weekend Active</h4>
            <p className={styles.heroDesc}>
              Complete all sponsor advertisements this weekend to unlock the 500 VE Mystery Treasure Vault.
            </p>
          </div>

          <div className={styles.bonusChallenges}>
            <div className={styles.challengeCard}>
              <div className={styles.challengeLeft}>
                <Gift size={20} style={{ color: "#a855f7" }} />
                <div>
                  <h5 className={styles.challengeTitle}>Melody Beats High-Tier Ad</h5>
                  <p className={styles.challengeDesc}>Earn +50 VEs on a single premium showcase</p>
                </div>
              </div>
              <button
                type="button"
                className={styles.playBonusBtn}
                onClick={() => {
                  onGoToBonusAd("ad-3");
                  onClose();
                }}
              >
                <span>Watch</span>
                <ArrowRight size={13} />
              </button>
            </div>

            <div className={styles.challengeCard}>
              <div className={styles.challengeLeft}>
                <VECoinIcon size={22} />
                <div>
                  <h5 className={styles.challengeTitle}>7-Day Streak Multiplier</h5>
                  <p className={styles.challengeDesc}>Maintained 7 consecutive active days (+15% boost)</p>
                </div>
              </div>
              <span className={styles.activeTag}>Unlocked &#10003;</span>
            </div>
          </div>
        </div>

        <div className={styles.modalFooter}>
          <button
            type="button"
            className={styles.backBtn}
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default BonusModal;
