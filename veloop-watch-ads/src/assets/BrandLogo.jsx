export function BrandLogo({ size = "default", collapsed = false }) {
  const isSmall = size === "small";

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "12px",
        userSelect: "none",
        textDecoration: "none",
      }}
    >
      <div
        style={{
          width: isSmall ? "36px" : "44px",
          height: isSmall ? "36px" : "44px",
          position: "relative",
          flexShrink: 0,
        }}
      >
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: "100%", height: "100%", filter: "drop-shadow(0 0 12px rgba(245, 158, 11, 0.45))" }}
        >
          <defs>
            <linearGradient id="veloopHex" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="50%" stopColor="#d97706" />
              <stop offset="100%" stopColor="#b45309" />
            </linearGradient>
            <linearGradient id="veloopGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fbbf24" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
          </defs>
          {/* Hexagonal Base */}
          <path
            d="M24 3L42 13.5V34.5L24 45L6 34.5V13.5L24 3Z"
            fill="url(#veloopHex)"
            stroke="#fbbf24"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          {/* Inner Chevrons forming the Veloop infinity/arrows */}
          <path
            d="M17 19L24 25L31 19"
            stroke="#ffffff"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17 26L24 32L31 26"
            stroke="url(#veloopGlow)"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {!collapsed && (
        <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
          <span
            style={{
              fontSize: isSmall ? "17px" : "21px",
              fontWeight: 800,
              letterSpacing: "0.08em",
              color: "#ffffff",
              textTransform: "uppercase",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            VELOOP
          </span>
          <span
            style={{
              fontSize: isSmall ? "9px" : "10px",
              fontWeight: 600,
              letterSpacing: "0.28em",
              color: "#fbbf24",
              textTransform: "uppercase",
              marginTop: "3px",
            }}
          >
            REWARDS
          </span>
        </div>
      )}
    </div>
  );
}
