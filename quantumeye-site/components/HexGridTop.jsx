'use client';

import Script from 'next/script';

/**
 * HexGridTop
 * - Scrolling background behind header+hero (mode="scroll")
 * - Loads the ESM module at runtime; hover/mouse works
 * - No top-level `return` (fixes "return not in function")
 */
export default function HexGridTop({ mode = 'scroll', height = '68vh' }) {
  const wrapperClass =
    mode === 'fixed'
      ? 'fixed inset-x-0 top-0 -z-10 overflow-hidden'
      : 'absolute inset-0 -z-10 overflow-hidden';

  // NOTE: canvas is ABSOLUTE (not fixed) so this background scrolls away
  const init = `
    import Grid1Background from 'https://cdn.jsdelivr.net/npm/threejs-components@0.0.16/build/backgrounds/grid1.cdn.min.js';
    (function () {
      const canvas = document.getElementById('qe-hex-canvas');
      if (!canvas) { console.warn('qe-hex-canvas not found'); return; }

      const bg = Grid1Background(canvas);

      // Brand palette (violet)
      const b1 = 0x7c3aed, b2 = 0x8b5cf6, b3 = 0xa78bfa;
      bg.grid.setColors([b1, b2, b3]);
      bg.grid.light1.color.set(b2); bg.grid.light1.intensity = 900;
      bg.grid.light2.color.set(b3); bg.grid.light2.intensity = 520;

      // Reduced motion
      if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
        bg.grid.light1.intensity *= 0.5;
        bg.grid.light2.intensity *= 0.5;
        bg.grid.animationSpeed = 0.2;
      }

      addEventListener('resize', () => bg?.onResize?.());
    })();
  `;

  return (
    <div className={wrapperClass} style={mode === 'fixed' ? { height } : undefined}>
      {/* Canvas in main doc so mouse hover works; absolute so it scrolls with parent */}
      <canvas id="qe-hex-canvas" className="absolute inset-0 w-full h-full block" />

      {/* Soft brand glows (don’t block mouse) */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(900px 500px at 10% 10%, rgba(124,58,237,.22), transparent 60%),' +
            'radial-gradient(700px 420px at 90% 15%, rgba(167,139,250,.16), transparent 65%)',
        }}
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-44 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,.75) 60%, #000 100%)',
        }}
      />

      {/* Load module at runtime */}
      <Script id="qe-hex-init" type="module" strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: init }} />
    </div>
  );
}

