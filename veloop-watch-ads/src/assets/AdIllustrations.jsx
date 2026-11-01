export function FinVerseProIllustration() {
  return (
    <svg viewBox="0 0 160 110" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
      <defs>
        <linearGradient id="finCardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4f46e5" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
        <linearGradient id="finLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#4ade80" />
        </linearGradient>
      </defs>
      {/* Background Glow */}
      <circle cx="80" cy="55" r="45" fill="rgba(99, 102, 241, 0.15)" filter="blur(16px)" />
      
      {/* Credit Card / Fin Dashboard */}
      <rect x="22" y="24" width="116" height="66" rx="12" fill="url(#finCardGrad)" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1.5" />
      {/* Card Chip */}
      <rect x="36" y="38" width="18" height="14" rx="3" fill="#fbbf24" stroke="#d97706" />
      <line x1="36" y1="45" x2="54" y2="45" stroke="#92400e" strokeWidth="1" />
      
      {/* Contactless symbol */}
      <path d="M60 40C62 42 62 47 60 49" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M64 38C67 41 67 48 64 51" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" />
      
      {/* Growth Line Chart inside */}
      <path d="M36 74L60 62L82 67L104 50L122 42" stroke="url(#finLineGrad)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="122" cy="42" r="3.5" fill="#4ade80" stroke="#ffffff" strokeWidth="1.5" />
      
      {/* Floating Mini Coins */}
      <circle cx="128" cy="22" r="10" fill="#f59e0b" stroke="#fef08a" strokeWidth="1.5" />
      <text x="128" y="25" textAnchor="middle" fill="#78350f" fontSize="8" fontWeight="bold" fontFamily="sans-serif">VE</text>
    </svg>
  );
}

export function StrideXIllustration() {
  return (
    <svg viewBox="0 0 160 110" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
      <defs>
        <linearGradient id="shoeBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="50%" stopColor="#059669" />
          <stop offset="100%" stopColor="#047857" />
        </linearGradient>
        <linearGradient id="soleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#e2e8f0" />
        </linearGradient>
      </defs>
      {/* Glow */}
      <ellipse cx="80" cy="65" rx="55" ry="25" fill="rgba(16, 185, 129, 0.18)" filter="blur(14px)" />
      
      {/* Athletic Sneaker Silhouette */}
      <g transform="translate(18, 20)">
        {/* Sole */}
        <path
          d="M10 52C22 52 38 55 58 55C80 55 105 50 118 45C122 49 120 58 114 62C100 65 72 65 50 65C30 65 14 62 8 58C6 54 7 52 10 52Z"
          fill="url(#soleGrad)"
          stroke="#cbd5e1"
          strokeWidth="1.2"
        />
        {/* Midsole air cushioning bubbles */}
        <ellipse cx="78" cy="58" rx="6" ry="2.5" fill="#34d399" />
        <ellipse cx="94" cy="56" rx="5" ry="2.5" fill="#34d399" />

        {/* Upper Body */}
        <path
          d="M14 52C16 38 28 26 44 24C52 23 58 28 66 33C78 37 98 40 115 45C108 38 98 28 88 22C84 19 76 18 70 20C62 14 52 14 42 18C28 24 16 34 10 52H14Z"
          fill="url(#shoeBodyGrad)"
          stroke="#a7f3d0"
          strokeWidth="1.2"
        />

        {/* Dynamic Stride Swoosh / Lightning */}
        <path
          d="M32 38C46 36 68 38 92 48"
          stroke="#fef08a"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        {/* Laces */}
        <line x1="56" y1="26" x2="64" y2="30" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
        <line x1="62" y1="29" x2="70" y2="33" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
      </g>
    </svg>
  );
}

export function MelodyBeatsIllustration() {
  return (
    <svg viewBox="0 0 160 110" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
      <defs>
        <linearGradient id="headbandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="50%" stopColor="#d97706" />
          <stop offset="100%" stopColor="#b45309" />
        </linearGradient>
      </defs>
      {/* Warm Audio Glow */}
      <circle cx="80" cy="55" r="45" fill="rgba(245, 158, 11, 0.2)" filter="blur(16px)" />
      
      {/* Sound Waves */}
      <path d="M24 55C24 45 30 36 38 30" stroke="rgba(245, 158, 11, 0.4)" strokeWidth="2" strokeLinecap="round" />
      <path d="M136 55C136 45 130 36 122 30" stroke="rgba(245, 158, 11, 0.4)" strokeWidth="2" strokeLinecap="round" />
      
      {/* Headband Arch */}
      <path
        d="M44 60C44 32 60 18 80 18C100 18 116 32 116 60"
        stroke="url(#headbandGrad)"
        strokeWidth="6"
        strokeLinecap="round"
      />
      {/* Top Headband Cushion */}
      <path
        d="M58 24C65 20 73 19 80 19C87 19 95 20 102 24"
        stroke="#1e1b2e"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Left Earcup */}
      <rect x="34" y="52" width="18" height="34" rx="9" fill="#1e1b2e" stroke="#fbbf24" strokeWidth="2" />
      <rect x="37" y="56" width="12" height="26" rx="6" fill="#f59e0b" />

      {/* Right Earcup */}
      <rect x="108" y="52" width="18" height="34" rx="9" fill="#1e1b2e" stroke="#fbbf24" strokeWidth="2" />
      <rect x="111" y="56" width="12" height="26" rx="6" fill="#f59e0b" />

      {/* Musical notes floating */}
      <text x="86" y="44" fill="#fbbf24" fontSize="14">♪</text>
      <text x="70" y="52" fill="#fef08a" fontSize="10">♫</text>
    </svg>
  );
}

export function DriveEZIllustration() {
  return (
    <svg viewBox="0 0 160 110" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
      <defs>
        <linearGradient id="carBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="50%" stopColor="#0284c7" />
          <stop offset="100%" stopColor="#0369a1" />
        </linearGradient>
      </defs>
      {/* Glow */}
      <ellipse cx="80" cy="70" rx="60" ry="20" fill="rgba(14, 165, 233, 0.2)" filter="blur(14px)" />

      {/* Sleek Modern Car */}
      <g transform="translate(14, 25)">
        {/* Car Cabin & Windshield */}
        <path
          d="M38 32C45 22 56 16 75 16C94 16 102 22 108 32H38Z"
          fill="#0f172a"
          stroke="#38bdf8"
          strokeWidth="1.5"
        />
        {/* Windshield Glass reflections */}
        <path d="M48 30L60 20H74L64 30H48Z" fill="rgba(56, 189, 248, 0.4)" />
        <path d="M82 20H98L92 30H78L82 20Z" fill="rgba(56, 189, 248, 0.3)" />

        {/* Lower Chassis / Body */}
        <path
          d="M12 38C12 34 18 32 28 32H110C118 32 124 35 124 40C124 46 120 48 114 48H18C13 48 12 44 12 38Z"
          fill="url(#carBodyGrad)"
          stroke="#7dd3fc"
          strokeWidth="1.2"
        />

        {/* Headlight beam */}
        <polygon points="122,38 138,34 138,44 122,40" fill="rgba(254, 240, 138, 0.4)" />

        {/* Left Wheel */}
        <circle cx="36" cy="48" r="13" fill="#0f172a" stroke="#64748b" strokeWidth="2.5" />
        <circle cx="36" cy="48" r="6" fill="#38bdf8" />

        {/* Right Wheel */}
        <circle cx="98" cy="48" r="13" fill="#0f172a" stroke="#64748b" strokeWidth="2.5" />
        <circle cx="98" cy="48" r="6" fill="#38bdf8" />
      </g>
    </svg>
  );
}

export function SafeNetVpnIllustration() {
  return (
    <svg viewBox="0 0 160 110" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
      <defs>
        <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="50%" stopColor="#6d28d9" />
          <stop offset="100%" stopColor="#4c1d95" />
        </linearGradient>
      </defs>
      {/* Cyber Glow */}
      <circle cx="80" cy="55" r="45" fill="rgba(139, 92, 246, 0.25)" filter="blur(16px)" />
      
      {/* Pulse Rings */}
      <circle cx="80" cy="55" r="42" stroke="rgba(167, 139, 250, 0.2)" strokeWidth="1.5" strokeDasharray="4 4" />
      <circle cx="80" cy="55" r="32" stroke="rgba(167, 139, 250, 0.3)" strokeWidth="1.5" />

      {/* Cyber Shield */}
      <path
        d="M80 20L108 32V54C108 72 80 88 80 88C80 88 52 72 52 54V32L80 20Z"
        fill="url(#shieldGrad)"
        stroke="#c4b5fd"
        strokeWidth="2"
      />

      {/* Central Padlock */}
      <rect x="71" y="52" width="18" height="15" rx="3" fill="#f59e0b" stroke="#fde047" strokeWidth="1.2" />
      <path
        d="M74 52V46C74 42.7 76.7 40 80 40C83.3 40 86 42.7 86 46V52"
        stroke="#fde047"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="80" cy="59" r="2" fill="#78350f" />
    </svg>
  );
}

export function ShopJoyIllustration() {
  return (
    <svg viewBox="0 0 160 110" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
      <defs>
        <linearGradient id="bagGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f43f5e" />
          <stop offset="50%" stopColor="#e11d48" />
          <stop offset="100%" stopColor="#be123c" />
        </linearGradient>
      </defs>
      {/* Pink/Rose Glow */}
      <circle cx="80" cy="58" r="45" fill="rgba(244, 63, 94, 0.2)" filter="blur(16px)" />
      
      {/* Shopping Bag Handles */}
      <path
        d="M66 40C66 28 72 22 80 22C88 22 94 28 94 40"
        stroke="#fda4af"
        strokeWidth="3.5"
        strokeLinecap="round"
      />

      {/* Shopping Bag Body */}
      <path
        d="M52 40L58 84C58 86 60 88 62 88H98C100 88 102 86 102 84L108 40H52Z"
        fill="url(#bagGrad)"
        stroke="#fecdd3"
        strokeWidth="1.5"
      />

      {/* Discount / Gift Tag */}
      <g transform="translate(86, 50) rotate(15)">
        <rect x="0" y="0" width="22" height="32" rx="3" fill="#fbbf24" stroke="#d97706" strokeWidth="1" />
        <circle cx="11" cy="6" r="2" fill="#78350f" />
        <text x="11" y="22" textAnchor="middle" fill="#78350f" fontSize="10" fontWeight="bold">%</text>
      </g>

      {/* Confetti Sparkles */}
      <text x="42" y="36" fill="#fde047" fontSize="12">✦</text>
      <text x="114" y="44" fill="#38bdf8" fontSize="12">★</text>
    </svg>
  );
}

export function AdIllustration({ type }) {
  switch (type) {
    case "finance":
      return <FinVerseProIllustration />;
    case "shoes":
      return <StrideXIllustration />;
    case "headphones":
      return <MelodyBeatsIllustration />;
    case "car":
      return <DriveEZIllustration />;
    case "vpn":
      return <SafeNetVpnIllustration />;
    case "shopping":
      return <ShopJoyIllustration />;
    default:
      return <FinVerseProIllustration />;
  }
}
