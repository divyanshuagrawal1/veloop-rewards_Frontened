export function HeroGraphic() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "380px",
        height: "220px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        perspective: "900px",
      }}
    >
      {/* Background ambient glow */}
      <div
        style={{
          position: "absolute",
          width: "260px",
          height: "170px",
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.45) 0%, rgba(245, 158, 11, 0.25) 50%, transparent 75%)",
          filter: "blur(40px)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      {/* Floating 3D Video Player Screen */}
      <div
        style={{
          position: "relative",
          width: "240px",
          height: "145px",
          borderRadius: "20px",
          background: "linear-gradient(135deg, #7c3aed 0%, #6366f1 60%, #4f46e5 100%)",
          boxShadow: "0 20px 40px rgba(99, 102, 241, 0.4), inset 0 2px 4px rgba(255, 255, 255, 0.35)",
          border: "2px solid rgba(255, 255, 255, 0.2)",
          transform: "rotateY(-14deg) rotateX(8deg) rotateZ(-2deg)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "14px",
          overflow: "hidden",
          transition: "transform 0.4s ease",
        }}
      >
        {/* Top Video Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: "5px" }}>
            <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "rgba(255, 255, 255, 0.7)" }} />
            <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "rgba(255, 255, 255, 0.4)" }} />
            <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "rgba(255, 255, 255, 0.4)" }} />
          </div>
          <span
            style={{
              fontSize: "10px",
              fontWeight: 700,
              color: "#ffffff",
              background: "rgba(0, 0, 0, 0.25)",
              padding: "2px 8px",
              borderRadius: "10px",
              letterSpacing: "0.05em",
            }}
          >
            AD LIVE
          </span>
        </div>

        {/* Center Play Button */}
        <div
          style={{
            alignSelf: "center",
            width: "52px",
            height: "52px",
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.95)",
            boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transform: "translateY(-4px)",
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="#6366f1"
            style={{ width: "24px", height: "24px", marginLeft: "3px" }}
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>

        {/* Bottom Playback bar */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div
            style={{
              flex: 1,
              height: "4px",
              borderRadius: "2px",
              background: "rgba(255, 255, 255, 0.25)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: "70%",
                height: "100%",
                borderRadius: "2px",
                background: "linear-gradient(90deg, #fbbf24, #f59e0b)",
              }}
            />
          </div>
          <span style={{ fontSize: "9px", color: "rgba(255, 255, 255, 0.9)", fontWeight: 600 }}>0:30</span>
        </div>
      </div>

      {/* Floating Big 3D VE Coin */}
      <div
        style={{
          position: "absolute",
          right: "22px",
          bottom: "10px",
          width: "88px",
          height: "88px",
          borderRadius: "50%",
          background: "radial-gradient(circle at 35% 30%, #fef08a 0%, #f59e0b 55%, #b45309 100%)",
          boxShadow: "0 12px 28px rgba(245, 158, 11, 0.6), inset 0 3px 6px rgba(255, 255, 255, 0.8), inset 0 -3px 6px rgba(0, 0, 0, 0.35)",
          border: "3px solid #fde047",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transform: "rotateY(10deg) rotateZ(6deg)",
          zIndex: 3,
          animation: "floatSlow 4s ease-in-out infinite alternate",
        }}
      >
        <div
          style={{
            width: "68px",
            height: "68px",
            borderRadius: "50%",
            border: "2px dashed #fef08a",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontSize: "26px",
              fontWeight: 900,
              color: "#78350f",
              letterSpacing: "0.04em",
              fontFamily: "'Inter', sans-serif",
              textShadow: "0 1px 2px rgba(255, 255, 255, 0.5)",
            }}
          >
            VE
          </span>
        </div>
      </div>

      {/* Floating Secondary Mini Coin */}
      <div
        style={{
          position: "absolute",
          right: "105px",
          bottom: "14px",
          width: "42px",
          height: "42px",
          borderRadius: "50%",
          background: "radial-gradient(circle at 35% 30%, #fef08a 0%, #f59e0b 60%, #b45309 100%)",
          boxShadow: "0 8px 18px rgba(245, 158, 11, 0.4)",
          border: "2px solid #fde047",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 2,
        }}
      >
        <span style={{ fontSize: "12px", fontWeight: 900, color: "#78350f" }}>VE</span>
      </div>

      {/* Floating Sparkle Stars */}
      <div
        style={{
          position: "absolute",
          top: "16px",
          right: "55px",
          color: "#fde047",
          fontSize: "20px",
          filter: "drop-shadow(0 0 8px #f59e0b)",
          animation: "pulseSparkle 2.5s ease-in-out infinite alternate",
        }}
      >
        ✦
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "45px",
          left: "20px",
          color: "#a78bfa",
          fontSize: "18px",
          filter: "drop-shadow(0 0 8px #8b5cf6)",
          animation: "pulseSparkle 3s ease-in-out infinite alternate 1s",
        }}
      >
        ✦
      </div>

      <div
        style={{
          position: "absolute",
          top: "35px",
          left: "50px",
          color: "#fef08a",
          fontSize: "14px",
          filter: "drop-shadow(0 0 6px #f59e0b)",
        }}
      >
        ★
      </div>
    </div>
  );
}
