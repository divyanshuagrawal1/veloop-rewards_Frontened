export function VECoinIcon({ size = 20, className = "" }) {
  return (
    <span
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "50%",
        background: "linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)",
        boxShadow: "0 0 10px rgba(245, 158, 11, 0.55), inset 0 1px 1px rgba(255, 255, 255, 0.6)",
        border: "1px solid #fef08a",
        fontWeight: 800,
        fontSize: `${Math.round(size * 0.44)}px`,
        color: "#78350f",
        fontFamily: "'Inter', sans-serif",
        lineHeight: 1,
        userSelect: "none",
        flexShrink: 0,
      }}
    >
      VE
    </span>
  );
}
