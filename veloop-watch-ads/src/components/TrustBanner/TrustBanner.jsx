import { ShieldCheck } from "lucide-react";
import styles from "./TrustBanner.module.css";

export function TrustBanner({ onLearnMore }) {
  return (
    <section className={styles.banner} aria-label="Trust and Rewards Information">
      <div className={styles.leftContent}>
        <div className={styles.shieldIconWrapper}>
          <ShieldCheck size={24} />
        </div>
        <div className={styles.textContent}>
          <h3 className={styles.bannerHeading}>Your VEs. Your Rewards.</h3>
          <p className={styles.bannerDesc}>
            Earn VEs by watching ads. Convert them into real cash and withdraw to
            your linked bank account once you meet the minimum withdrawal conditions.
          </p>
        </div>
      </div>

      <button
        type="button"
        className={styles.learnMoreBtn}
        onClick={onLearnMore}
      >
        Learn More
      </button>
    </section>
  );
}

export default TrustBanner;
