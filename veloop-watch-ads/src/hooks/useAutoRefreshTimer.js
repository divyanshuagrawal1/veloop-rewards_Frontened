import { useState, useEffect, useCallback } from "react";
import { formatDuration } from "../utils/formatters";

export function useAutoRefreshTimer(initialSeconds = 45, onRefresh) {
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const triggerRefresh = useCallback(() => {
    setIsRefreshing(true);
    setSecondsLeft(initialSeconds);
    if (onRefresh) onRefresh();
    setTimeout(() => {
      setIsRefreshing(false);
    }, 600);
  }, [initialSeconds, onRefresh]);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          triggerRefresh();
          return initialSeconds;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [initialSeconds, triggerRefresh]);

  return {
    secondsLeft,
    formattedTime: formatDuration(secondsLeft),
    isRefreshing,
    triggerRefresh,
  };
}
