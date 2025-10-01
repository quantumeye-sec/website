'use client';

/**
 * HexGridTopIframe
 * - mode="scroll": fills its parent (absolute) and scrolls away with it
 * - mode="fixed": pinned to the top of the viewport (previous behavior)
 */
export default function HexGridTopIframe({ height = '68vh', mode = 'scroll' }) {
  const srcDoc = `<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/>
<style>
  html,body{margin:0;height:100%;background:#000}
  #webgl-canvas{position:fixed;inset:0;display:block}
  .vignette{position:fixed;inset:0;pointer-events:none;
    background: radial-gradient(70% 60% at 50% 40%, transparent, rgba(0,0,0,.35));
  }
  @media (prefers-reduced-motion: reduce){ :root{--reduce:1} }
</style></head>
<body>
  <canvas id="webgl-canvas"></canvas><div class="vignette"></div>
  <script type="module">
    import Grid1Background from 'https://cdn.jsdelivr.net/npm/threejs-components@0.0.16/build/backgrounds/grid1.cdn.min.js';
    const canvas = document.getElementById('webgl-canvas');
    const bg = Grid1Background(canvas);
    const brand1 = 0x7c3aed, brand2 = 0x8b5cf6, brand3 = 0xa78bfa;
    bg.grid.setColors([brand1, brand2, brand3]);
    bg.grid.light1.color.set(brand2); bg.grid.light1.intensity = 900;
    bg.grid.light2.color.set(brand3); bg.grid.light2.intensity = 520;
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
      bg.grid.light1.intensity *= .5; bg.grid.light2.intensity *= .5; bg.grid.animationSpeed = .2;
    }
    addEventListener('resize', () => bg?.onResize && bg.onResize());
  </script>
</body></html>`;

  const wrapperClass =
    mode === 'fixed'
      ? 'pointer-events-none fixed inset-x-0 top-0 -z-10 overflow-hidden'
      : 'pointer-events-none absolute inset-0 -z-10 overflow-hidden';

  return (
    <div className={wrapperClass} style={mode === 'fixed' ? { height } : undefined}>
      <iframe title="QuantumEye hex bg" srcDoc={srcDoc} className="w-full h-full block" loading="eager" />
      {/* soft brand glow */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(900px 500px at 10% 10%, rgba(124,58,237,.22), transparent 60%),' +
            'radial-gradient(700px 420px at 90% 15%, rgba(167,139,250,.16), transparent 65%)',
        }}
      />
      {/* fade out at bottom */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-44"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,.75) 60%, #000 100%)',
        }}
      />
    </div>
  );
}

