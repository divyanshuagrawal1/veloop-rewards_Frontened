import { Play, Clock, CheckCircle2, Flame } from "lucide-react";
import { AdIllustration } from "../../assets/AdIllustrations";
import { VECoinIcon } from "../../assets/VECoinIcon";
import styles from "./AdCard.module.css";

export function AdCard({ ad, onWatchAd }) {
  const isWatched = ad.status === "watched";

  return (
    <article
      className={`${styles.card} ${isWatched ? styles.completedCard : ""}`}
      aria-label={`${ad.title} advertisement, reward ${ad.reward} VEs`}
    >
      {/* Top Illustration Area */}
      <div
        className={styles.illustrationArea}
        style={{ background: ad.themeGradient || undefined }}
      >
        <div className={styles.badgeBar}>
          <span className={styles.sponsoredBadge}>{ad.badge || "Sponsored"}</span>
          {ad.isBonus && (
            <span className={styles.bonusBadge}>
              <Flame size={12} />
              {ad.bonusText || "Bonus Ad"}
            </span>
          )}
        </div>

        <AdIllustration type={ad.iconType} />
      </div>

      {/* Card Content Body */}
      <div className={styles.cardBody}>
        <div className={styles.titleArea}>
          <div className={styles.brandName}>
            <span>{ad.title}</span>
            <span className={styles.categoryTag}>{ad.category}</span>
          </div>
          <p className={styles.tagline}>{ad.tagline}</p>
        </div>

        {/* Metadata Row: Duration & Reward */}
        <div className={styles.metaRow}>
          <div className={styles.metaItem}>
            <Clock size={14} style={{ color: "#94a3b8" }} />
            <span>{ad.duration} sec</span>
          </div>

          <div className={styles.rewardAmount}>
            <VECoinIcon size={16} />
            <span>+{ad.reward} VEs</span>
          </div>

          <div
            className={`${styles.statusIndicator} ${
              isWatched ? styles.statusIndicatorCompleted : ""
            }`}
          >
            <span
              className={`${styles.statusDot} ${
                isWatched ? styles.statusDotCompleted : ""
              }`}
            />
            <span>{isWatched ? "Watched" : "Available"}</span>
          </div>
        </div>

        {/* CTA Button */}
        <button
          type="button"
          className={`${styles.watchBtn} ${
            isWatched ? styles.watchBtnCompleted : ""
          }`}
          onClick={() => !isWatched && onWatchAd(ad)}
          disabled={isWatched}
          aria-label={
            isWatched
              ? `${ad.title} ad watched`
              : `Watch ${ad.title} advertisement for ${ad.reward} VEs`
          }
        >
          {isWatched ? (
            <>
              <CheckCircle2 size={16} />
              <span>Watched &#10003;</span>
            </>
          ) : (
            <>
              <Play size={15} fill="#ffffff" />
              <span>Watch Advertisement</span>
            </>
          )}
        </button>
      </div>
    </article>
  );
}

export default AdCard;
