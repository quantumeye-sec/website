// components/BrandAnimatedBG.jsx
export default function BrandAnimatedBG({ className = "", mode = "fixed", style }) {
  const positionClass = mode === "fixed" ? "fixed" : "absolute"; // fixed = doesn't scroll
  return (
    <div
      aria-hidden
      className={`brand-animated-bg ${positionClass} inset-0 -z-20 pointer-events-none overflow-hidden ${className}`}
      style={style}
    >
      {/* soft top glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(100% 60% at 50% 0%, rgba(124,58,237,.15) 0%, rgba(0,0,0,0) 70%)",
        }}
      />
      {/* moving blobs */}
      <span className="brand-blob b1" />
      <span className="brand-blob b2" />
      <span className="brand-blob b3" />
    </div>
  );
}

