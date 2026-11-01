export function StreakGiftIllustration() {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
      <defs>
        <linearGradient id="boxGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="50%" stopColor="#7e22ce" />
          <stop offset="100%" stopColor="#581c87" />
        </linearGradient>
        <linearGradient id="ribbonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fde047" />
          <stop offset="50%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#b45309" />
        </linearGradient>
      </defs>
      {/* Ambient glow */}
      <circle cx="50" cy="55" r="35" fill="rgba(245, 158, 11, 0.25)" filter="blur(10px)" />

      {/* Gift Box Base */}
      <rect x="22" y="44" width="56" height="42" rx="8" fill="url(#boxGrad)" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1.2" />

      {/* Gift Box Lid */}
      <rect x="18" y="36" width="64" height="13" rx="4" fill="#9333ea" stroke="#d8b4fe" strokeWidth="1.2" />

      {/* Golden Vertical Ribbon */}
      <rect x="44" y="36" width="12" height="50" fill="url(#ribbonGrad)" />
      {/* Golden Horizontal Ribbon on Lid */}
      <rect x="18" y="40" width="64" height="6" fill="url(#ribbonGrad)" />

      {/* Bow Left Loop */}
      <path
        d="M50 36C40 24 30 28 36 36C42 38 48 37 50 36Z"
        fill="url(#ribbonGrad)"
        stroke="#fef08a"
        strokeWidth="1"
      />
      {/* Bow Right Loop */}
      <path
        d="M50 36C60 24 70 28 64 36C58 38 52 37 50 36Z"
        fill="url(#ribbonGrad)"
        stroke="#fef08a"
        strokeWidth="1"
      />
      {/* Bow Center Knot */}
      <circle cx="50" cy="36" r="4.5" fill="#fde047" stroke="#b45309" strokeWidth="1" />

      {/* Floating Sparkles */}
      <text x="14" y="26" fill="#fde047" fontSize="12">✦</text>
      <text x="76" y="30" fill="#fef08a" fontSize="14">✦</text>
      <text x="80" y="75" fill="#c084fc" fontSize="10">★</text>
    </svg>
  );
}
