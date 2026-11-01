import { useState, useEffect } from "react";
import {
  X,
  Volume2,
  VolumeX,
  Maximize2,
  Clock,
  Sparkles,
  Zap,
} from "lucide-react";
import { VECoinIcon } from "../../assets/VECoinIcon";
import { ConfettiCelebration } from "../Confetti/ConfettiCelebration";
import styles from "./AdPlayerModal.module.css";

export function AdPlayerModal({ ad, onClose, onClaimReward }) {
  const [secondsRemaining, setSecondsRemaining] = useState(ad.duration);
  const [isMuted, setIsMuted] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  // Countdown effect
  useEffect(() => {
    if (isCompleted || secondsRemaining <= 0) return;

    const timer = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsCompleted(true);
          setShowConfetti(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isCompleted, secondsRemaining]);

  
  const handleClaim = () => {
    onClaimReward(ad);
    onClose();
  };

  const elapsed = ad.duration - secondsRemaining;
  const progressPercent = Math.min(Math.round((elapsed / ad.duration) * 100), 100);

  return (
    <>
      <ConfettiCelebration trigger={showConfetti} />

      <div
        className={styles.backdrop}
        onClick={(e) => {
          if (e.target === e.currentTarget && isCompleted) {
            onClose();
          }
        }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="adPlayerTitle"
      >
        <div className={styles.modalWindow}>
          {/* Header */}
          <div className={styles.modalHeader}>
            <div className={styles.sponsorInfo}>
              <span className={styles.sponsorBadge}>Sponsored Ad</span>
              <h3 id="adPlayerTitle" className={styles.sponsorTitle}>
                {ad.title}
              </h3>
            </div>

            <div className={styles.headerActions}>
              <div className={styles.rewardBadgePreview}>
                <VECoinIcon size={16} />
                <span>+{ad.reward} VEs</span>
              </div>

              <button
                type="button"
                className={styles.closeButton}
                onClick={onClose}
                aria-label="Close Advertisement"
                title="Close"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Video Container Simulator */}
          <div className={styles.videoContainer}>
            {/* Background dynamic ambient glow */}
            <div
              className={styles.videoBackdropGlow}
              style={{
                background:
                  ad.themeGradient ||
                  "radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, rgba(13, 10, 25, 0.9) 80%)",
              }}
            />

            {/* Video content overlay */}
            <div className={styles.videoContentOverlay}>
              {/* Top video controls bar */}
              <div className={styles.commercialHeader}>
                <div className={styles.liveTag}>
                  <span className={styles.livePulseDot} />
                  <span>AD STREAM</span>
                </div>

                <div className={styles.controlsGroup}>
                  <button
                    type="button"
                    className={styles.controlIconBtn}
                    onClick={() => setIsMuted(!isMuted)}
                    title={isMuted ? "Unmute" : "Mute"}
                    aria-label={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                  </button>
                  <button
                    type="button"
                    className={styles.controlIconBtn}
                    title="Fullscreen"
                    aria-label="Fullscreen"
                  >
                    <Maximize2 size={15} />
                  </button>
                </div>
              </div>

              {/* Commercial simulated hero showcase */}
              <div className={styles.commercialHeroText}>
                <h2 className={styles.commercialHeadline}>
                  {ad.videoSimulator?.headline || ad.title}
                </h2>
                <ul className={styles.featuresList}>
                  {ad.videoSimulator?.features?.map((feature, idx) => (
                    <li key={idx} className={styles.featurePill}>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom simulated stream bar */}
              <div className={styles.commercialFooterBar}>
                <div className={styles.equalizer}>
                  <span className={styles.eqBar} />
                  <span className={styles.eqBar} />
                  <span className={styles.eqBar} />
                  <span className={styles.eqBar} />
                </div>

                <div className={styles.timerCapsule}>
                  <Clock size={14} style={{ color: "#f59e0b" }} />
                  <span>
                    {secondsRemaining > 0
                      ? `${secondsRemaining}s remaining`
                      : "Ad Finished"}
                  </span>
                </div>
              </div>
            </div>

            {/* Video Completion Overlay */}
            {isCompleted && (
              <div className={styles.completedOverlay}>
                <div className={styles.rewardGlowCoin}>
                  <VECoinIcon size={46} />
                </div>
                <h3 className={styles.completedHeading}>Ad Completed!</h3>
                <div className={styles.completedRewardText}>
                  <span>Reward Ready:</span>
                  <strong>+{ad.reward} VEs</strong>
                </div>
                <button
                  type="button"
                  className={styles.claimButton}
                  onClick={handleClaim}
                >
                  <Sparkles size={18} />
                  <span>Claim +{ad.reward} VEs</span>
                </button>
              </div>
            )}
          </div>

          {/* Progress Bar under video */}
          <div
            className={styles.videoProgressBar}
            role="progressbar"
            aria-valuenow={progressPercent}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              className={styles.videoProgressFill}
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          {/* Modal Footer */}
          <div className={styles.modalFooter}>
            <p className={styles.verificationNotice}>
              &#128274; Keep this tab open. Completion is verified upon timer expiry
              to securely credit your VELOOP balance.
            </p>

          </div>
        </div>
      </div>
    </>
  );
}

export default AdPlayerModal;
