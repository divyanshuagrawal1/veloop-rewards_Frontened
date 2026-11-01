import { ArrowRight } from "lucide-react";
import styles from "./HowItWorks.module.css";

export function HowItWorks({ onOpenWallet }) {
  return (
    <section className={styles.container} aria-label="How Rewards Work">
      <h3 className={styles.title}>How It Works</h3>

      <div className={styles.workflowRow}>
        <div className={styles.stepsWrapper}>
          {/* Step 1 */}
          <div className={styles.stepItem}>
            <div className={`${styles.stepNum} ${styles.step1}`}>1</div>
            <div className={styles.stepText}>
              <h4 className={styles.stepTitle}>Watch</h4>
              <p className={styles.stepDesc}>
                Watch short ads and complete the timer.
              </p>
            </div>
          </div>

          <ArrowRight size={16} className={styles.stepArrow} />

          {/* Step 2 */}
          <div className={styles.stepItem}>
            <div className={`${styles.stepNum} ${styles.step2}`}>2</div>
            <div className={styles.stepText}>
              <h4 className={styles.stepTitle}>Earn</h4>
              <p className={styles.stepDesc}>
                Earn VEs instantly after completing the ad.
              </p>
            </div>
          </div>

          <ArrowRight size={16} className={styles.stepArrow} />

          {/* Step 3 */}
          <div className={styles.stepItem}>
            <div className={`${styles.stepNum} ${styles.step3}`}>3</div>
            <div className={styles.stepText}>
              <h4 className={styles.stepTitle}>Withdraw</h4>
              <p className={styles.stepDesc}>
                Convert your VEs to real cash and withdraw to your bank.
              </p>
            </div>
          </div>
        </div>

        <button
          type="button"
          className={styles.walletBtn}
          onClick={onOpenWallet}
        >
          <span>View My Wallet</span>
          <ArrowRight size={14} />
        </button>
      </div>
    </section>
  );
}

export default HowItWorks;
