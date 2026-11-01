import { useState, useEffect, useRef } from "react";

export function useAnimatedCounter(targetValue, duration = 1200) {
  const [displayValue, setDisplayValue] = useState(targetValue);
  const displayValRef = useRef(targetValue);
  const startValueRef = useRef(targetValue);
  const targetRef = useRef(targetValue);
  const startTimeRef = useRef(null);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    displayValRef.current = displayValue;
  }, [displayValue]);

  useEffect(() => {
    const startVal = displayValRef.current;
    const endVal = Number(targetValue);

    if (startVal === endVal) return;

    startValueRef.current = startVal;
    targetRef.current = endVal;
    startTimeRef.current = null;

    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    const step = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const progress = Math.min((timestamp - startTimeRef.current) / duration, 1);
      const easedProgress = easeOutCubic(progress);

      const nextVal = Math.round(startVal + (endVal - startVal) * easedProgress);
      setDisplayValue(nextVal);

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(step);
      } else {
        setDisplayValue(endVal);
      }
    };

    animationFrameRef.current = requestAnimationFrame(step);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [targetValue, duration]);

  return displayValue;
}
