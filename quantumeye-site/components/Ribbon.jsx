/**
 * Ribbon creates a translucent, blurred, violet-glow band behind content.
 * Use it to wrap the inner container of each section.
 */
export default function Ribbon({ children, className = "" }) {
  return (
    <div className={`relative ${className}`}>
      <div
        aria-hidden
        className="
          absolute -inset-x-4 -inset-y-6 -z-10
          rounded-3xl
          bg-gradient-to-r from-violet-500/12 via-violet-400/8 to-violet-500/12
          border border-violet-500/20
          ring-1 ring-inset ring-violet-400/20
          backdrop-blur-md
          shadow-[0_0_48px_rgba(139,92,246,0.25)]
        "
      />
      {/* subtle top highlight line */}
      <div aria-hidden className="absolute inset-x-0 top-0 -z-10 h-px rounded-full bg-white/10" />
      {children}
    </div>
  );
}

