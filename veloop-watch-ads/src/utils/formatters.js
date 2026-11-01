export const formatNumber = (num) => {
  if (num === null || num === undefined) return "0";
  return Number(num).toLocaleString();
};

export const veToCashUSD = (veTokens, rate = 0.01) => {
  const amount = Number(veTokens) * rate;
  return amount.toFixed(2);
};

export const veToCashINR = (veTokens, rate = 0.85) => {
  const amount = Number(veTokens) * rate;
  return amount.toFixed(2);
};

export const formatDuration = (seconds) => {
  if (!seconds || seconds <= 0) return "00:00";
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
};
