import { ArrowRight, Flame } from "lucide-react";
import styles from "./BonusBanner.module.css";

export function BonusBanner({ onOpenBonus }) {
  return (
    <div className={styles.bonusBanner} role="banner">
      <div className={styles.glowOrb} />

      <div className={styles.leftGroup}>
        <div className={styles.flameBadge}>
          <Flame size={22} />
        </div>
        <div className={styles.titleArea}>
          <h4 className={styles.bonusTitle}>
            Weekend 2X VE Bonus Rush!
            <span className={styles.tagPill}>Limited Time</span>
          </h4>
          <p className={styles.bonusText}>
            Watch high-tier partner ads today and receive an extra +100 VE completion bonus.
          </p>
        </div>
      </div>

      <button
        type="button"
        className={styles.claimBonusBtn}
        onClick={onOpenBonus}
      >
        <span>Explore Bonus Ads</span>
        <ArrowRight size={14} />
      </button>
    </div>
  );
}

export default BonusBanner;
