import { Sparkles } from "lucide-react";
import { HeroGraphic } from "../../assets/HeroGraphic";
import { useAnimatedCounter } from "../../hooks/useAnimatedCounter";
import styles from "./HeroSection.module.css";

export function HeroSection({
  todayEarnings = 0,
  dailyGoal = 150,
}) {
  const animatedEarnings = useAnimatedCounter(todayEarnings);
  const percentage = Math.min(Math.round((todayEarnings / dailyGoal) * 100), 100);

  return (
    <section className={styles.heroContainer} aria-label="Hero Overview">
      <div className={styles.ambientBlob} />

      <div className={styles.leftContent}>
        <h2 className={styles.title}>Earn VEs,<br />Real Rewards</h2>
        <p className={styles.subtitle}>
          Watch short advertisements and earn VEs. Convert VEs into real cash and
          withdraw to your linked bank account.
        </p>

        <div className={styles.progressBox}>
          <div className={styles.progressHeader}>
            <span className={styles.progressLabel}>Daily Earnings Progress</span>
            <span className={styles.progressFraction}>
              {animatedEarnings} / {dailyGoal} VEs
            </span>
          </div>

          <div className={styles.progressTrack} role="progressbar" aria-valuenow={percentage} aria-valuemin="0" aria-valuemax="100">
            <div className={styles.progressBar} style={{ width: `${percentage}%` }} />
          </div>

          <p className={styles.progressCaption}>
            <Sparkles size={13} style={{ color: "#f59e0b" }} />
            {percentage === 0
              ? "Start watching ads below to make progress toward your 150 VE daily goal."
              : percentage >= 100
              ? "🎉 Daily Goal Achieved! Outstanding work today!"
              : "Keep going! You're so close to your daily goal."}
          </p>
        </div>
      </div>

      <div className={styles.rightContent}>
        <HeroGraphic />
      </div>
    </section>
  );
}

export default HeroSection;
