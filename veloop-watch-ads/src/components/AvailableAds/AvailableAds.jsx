import { useState, useMemo } from "react";
import { RefreshCw, AlertCircle } from "lucide-react";
import { AdCard } from "./AdCard";
import { AdPlayerModal } from "./AdPlayerModal";
import { useAutoRefreshTimer } from "../../hooks/useAutoRefreshTimer";
import styles from "./AvailableAds.module.css";

const CATEGORIES = [
  "All",
  "Finance",
  "Lifestyle",
  "Entertainment",
  "Travel",
  "Technology",
  "Shopping",
];

export function AvailableAds({ ads = [], onAdComplete }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [activePlayingAd, setActivePlayingAd] = useState(null);
  const [isLoadingSkeleton, setIsLoadingSkeleton] = useState(false);

  // Auto-refresh timer hook
  const handleRefresh = () => {
    setIsLoadingSkeleton(true);
    setTimeout(() => {
      setIsLoadingSkeleton(false);
    }, 600);
  };

  const { formattedTime, isRefreshing, triggerRefresh } = useAutoRefreshTimer(
    45,
    handleRefresh
  );

  // Filtered ads list
  const filteredAds = useMemo(() => {
    return ads.filter((ad) => {
      const matchCat =
        selectedCategory === "All" || ad.category === selectedCategory;
      const matchStatus =
        selectedStatus === "all" ||
        (selectedStatus === "available" && ad.status === "available") ||
        (selectedStatus === "watched" && ad.status === "watched");

      return matchCat && matchStatus;
    });
  }, [ads, selectedCategory, selectedStatus]);

  const availableCount = ads.filter((a) => a.status === "available").length;

  return (
    <section className={styles.section} id="available-ads-section" aria-label="Available Advertisements">
      {/* Section Header */}
      <div className={styles.sectionHeader}>
        <div className={styles.titleArea}>
          <h3 className={styles.sectionTitle}>Available Ads</h3>
          <span className={styles.countBadge}>
            {availableCount} Ads Available
          </span>
        </div>

        <div className={styles.headerControls}>
          <div className={styles.autoRefreshPill}>
            <span>Auto refresh in {formattedTime}</span>
            <button
              type="button"
              className={`${styles.refreshButton} ${
                isRefreshing || isLoadingSkeleton ? styles.refreshRotating : ""
              }`}
              onClick={triggerRefresh}
              title="Refresh ads now"
              aria-label="Refresh ads list"
            >
              <RefreshCw size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Filter Chips Bar */}
      <div className={styles.filterBar}>
        <div className={styles.categoryGroup} role="tablist" aria-label="Ad Categories">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={selectedCategory === cat}
              className={`${styles.filterChip} ${
                selectedCategory === cat ? styles.filterChipActive : ""
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className={styles.statusToggleGroup} aria-label="Ad Status Filter">
          <button
            type="button"
            className={`${styles.statusBtn} ${
              selectedStatus === "all" ? styles.statusBtnActive : ""
            }`}
            onClick={() => setSelectedStatus("all")}
          >
            All
          </button>
          <button
            type="button"
            className={`${styles.statusBtn} ${
              selectedStatus === "available" ? styles.statusBtnActive : ""
            }`}
            onClick={() => setSelectedStatus("available")}
          >
            Available
          </button>
          <button
            type="button"
            className={`${styles.statusBtn} ${
              selectedStatus === "watched" ? styles.statusBtnActive : ""
            }`}
            onClick={() => setSelectedStatus("watched")}
          >
            Watched
          </button>
        </div>
      </div>

      {/* Grid of Ads OR Skeleton OR Empty State */}
      {isLoadingSkeleton ? (
        <div className={styles.adsGrid}>
          {[1, 2, 3, 4, 5, 6].map((idx) => (
            <div key={idx} className={styles.skeletonCard}>
              <div className={styles.skeletonIllustration}>
                <div className={styles.skeletonShimmer} />
              </div>
              <div className={styles.skeletonBody}>
                <div className={styles.skeletonLine} style={{ width: "60%" }} />
                <div className={styles.skeletonLine} style={{ width: "90%" }} />
                <div className={styles.skeletonLine} style={{ width: "40%", marginTop: "12px" }} />
                <div
                  className={styles.skeletonLine}
                  style={{ height: "38px", borderRadius: "10px", marginTop: "14px" }}
                />
              </div>
            </div>
          ))}
        </div>
      ) : filteredAds.length === 0 ? (
        <div className={styles.emptyStateContainer}>
          <div className={styles.emptyIconCircle}>
            <AlertCircle size={28} />
          </div>
          <h4 className={styles.emptyTitle}>No Ads Found</h4>
          <p className={styles.emptyDesc}>
            {selectedStatus === "watched"
              ? "You haven't completed any ads in this category yet. Start watching to earn VEs!"
              : "There are currently no advertisements matching your selected category. Check back shortly or reset your filters."}
          </p>
          <button
            type="button"
            className={styles.resetBtn}
            onClick={() => {
              setSelectedCategory("All");
              setSelectedStatus("all");
            }}
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className={styles.adsGrid}>
          {filteredAds.map((ad) => (
            <AdCard
              key={ad.id}
              ad={ad}
              onWatchAd={(targetAd) => setActivePlayingAd(targetAd)}
            />
          ))}
        </div>
      )}

      {/* Footer notice */}
      <p className={styles.footerNote}>
        No more ads? Check back later for new advertisements.
      </p>

      {/* Ad Player Modal */}
      {activePlayingAd && (
        <AdPlayerModal
          ad={activePlayingAd}
          onClose={() => setActivePlayingAd(null)}
          onClaimReward={(completedAd) => {
            onAdComplete(completedAd);
          }}
        />
      )}
    </section>
  );
}

export default AvailableAds;
