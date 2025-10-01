// components/AsciiMistBG.jsx
"use client";

import { useEffect, useMemo, useRef } from "react";

/**
 * Performance-optimized ASCII “mist/smoke” background
 * - Fixed to viewport (doesn’t scroll), pointer-events: none
 * - Daily seed (YYYYMMDD) for variety
 * - FPS throttle + DPR cap + adaptive density to keep draw calls low
 * Changes in this version:
 *   • Global speed reduced by 70% (SPEED_SCALE = 0.3)
 *   • Character ramp uses exploit/code-centric symbols
 */
export default function AsciiMistBG({
  className = "",
  cell = 24,         // larger = fewer characters (faster)
  speed = 0.035,     // base animation rate (will be scaled by SPEED_SCALE)
  opacity = 0.85,    // canvas layer opacity
  seed = "today",    // "today" uses YYYYMMDD; or pass a number
  useUTC = false,    // base “today” on UTC instead of local time
  fps = 24,          // frame cap (20–30 is usually enough)
  maxDPR = 1,        // cap device pixel ratio for perf (1 = no Retina)
  maxCells = 5000,   // adaptive density target (max drawn glyphs)
}) {
  const canvasRef = useRef(null);

  // Reduce all speeds by 70% for a calmer effect
  const SPEED_SCALE = 0.03;

  // Resolve daily seed once (client side)
  const resolvedSeed = useMemo(() => {
    if (seed !== "today" && seed != null) return Number(seed) >>> 0;
    const d = new Date();
    const y = useUTC ? d.getUTCFullYear() : d.getFullYear();
    const m = (useUTC ? d.getUTCMonth() : d.getMonth()) + 1;
    const day = useUTC ? d.getUTCDate() : d.getDate();
    return (y * 10000 + m * 100 + day) >>> 0; // YYYYMMDD
  }, [seed, useUTC]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { alpha: true });

    // --- Cap DPR for perf (Retina is expensive for text) ---
    const DPR = Math.min(maxDPR, window.devicePixelRatio || 1);

    // ---------- Seeded PRNG ----------
    function mulberry32(a) {
      return function () {
        let t = (a += 0x6d2b79f5);
        t = Math.imul(t ^ (t >>> 15), t | 1);
        t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
      };
    }
    const rand = mulberry32(resolvedSeed);

    // ---------- Simplex 3D Noise (trimmed & fast) ----------
    const F3 = 1 / 3, G3 = 1 / 6;
    const grad3 = [
      [1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],
      [1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],
      [0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1],
    ];
    const p = new Uint8Array(256);
    for (let i = 0; i < 256; i++) p[i] = i;
    for (let i = 255; i > 0; i--) {
      const j = (rand() * (i + 1)) | 0;
      [p[i], p[j]] = [p[j], p[i]];
    }
    const perm = new Uint8Array(512);
    for (let i = 0; i < 512; i++) perm[i] = p[i & 255];

    function dot3(g, x, y, z) { return g[0]*x + g[1]*y + g[2]*z; }
    function simplex3(xin, yin, zin) {
      let n0, n1, n2, n3;
      const s = (xin + yin + zin) * F3;
      const i = Math.floor(xin + s);
      const j = Math.floor(yin + s);
      const k = Math.floor(zin + s);
      const t = (i + j + k) * G3;
      const X0 = i - t, Y0 = j - t, Z0 = k - t;
      const x0 = xin - X0, y0 = yin - Y0, z0 = zin - Z0;

      let i1, j1, k1, i2, j2, k2;
      if (x0 >= y0) {
        if (y0 >= z0)      { i1=1;j1=0;k1=0; i2=1;j2=1;k2=0; }
        else if (x0 >= z0) { i1=1;j1=0;k1=0; i2=1;j2=0;k2=1; }
        else               { i1=0;j1=0;k1=1; i2=1;j2=0;k2=1; }
      } else {
        if (y0 < z0)       { i1=0;j1=0;k1=1; i2=0;j2=1;k2=1; }
        else if (x0 < z0)  { i1=0;j1=1;k1=0; i2=0;j2=1;k2=1; }
        else               { i1=0;j1=1;k1=0; i2=1;j2=1;k2=0; }
      }

      const x1 = x0 - i1 + G3, y1 = y0 - j1 + G3, z1 = z0 - k1 + G3;
      const x2 = x0 - i2 + 2*G3, y2 = y0 - j2 + 2*G3, z2 = z0 - k2 + 2*G3;
      const x3 = x0 - 1 + 3*G3, y3 = y0 - 1 + 3*G3, z3 = z0 - 1 + 3*G3;

      const ii = i & 255, jj = j & 255, kk = k & 255;

      let t0 = 0.6 - x0*x0 - y0*y0 - z0*z0;
      if (t0 < 0) n0 = 0; else {
        const gi0 = grad3[perm[ii + perm[jj + perm[kk]]] % 12];
        t0 *= t0; n0 = t0 * t0 * dot3(gi0, x0, y0, z0);
      }
      let t1 = 0.6 - x1*x1 - y1*y1 - z1*z1;
      if (t1 < 0) n1 = 0; else {
        const gi1 = grad3[perm[ii + i1 + perm[jj + j1 + perm[kk + k1]]] % 12];
        t1 *= t1; n1 = t1 * t1 * dot3(gi1, x1, y1, z1);
      }
      let t2 = 0.6 - x2*x2 - y2*y2 - z2*z2;
      if (t2 < 0) n2 = 0; else {
        const gi2 = grad3[perm[ii + i2 + perm[jj + j2 + perm[kk + k2]]] % 12];
        t2 *= t2; n2 = t2 * t2 * dot3(gi2, x2, y2, z2);
      }
      let t3 = 0.6 - x3*x3 - y3*y3 - z3*z3;
      if (t3 < 0) n3 = 0; else {
        const gi3 = grad3[perm[ii + 1 + perm[jj + 1 + perm[kk + 1]]] % 12];
        t3 *= t3; n3 = t3 * t3 * dot3(gi3, x3, y3, z3);
      }
      return 32 * (n0 + n1 + n2 + n3); // ~[-1,1]
    }

    // fBm with fewer octaves (cheaper)
    function fbm(x, y, z, oct = 3, lac = 2.0, gain = 0.5) {
      let amp = 0.5, freq = 1.0, sum = 0.0;
      for (let o = 0; o < oct; o++) {
        sum += amp * simplex3(x * freq, y * freq, z * freq);
        freq *= lac; amp *= gain;
      }
      return 0.5 + 0.5 * sum; // [0,1]
    }

    // --- Sizing / font (updated on resize) ---
    const fontFamily =
      'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

    function resize() {
      const w = Math.floor(window.innerWidth);
      const h = Math.floor(window.innerHeight);
      canvas.width = Math.floor(w * DPR);
      canvas.height = Math.floor(h * DPR);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      // font is set dynamically when effective cell changes (see draw)
    }
    resize();
    window.addEventListener("resize", resize);

    // --- Animation (throttled FPS + adaptive density) ---
    // Exploit/code-centric ramp (ordered light → heavy)
    const chars = " .,:;(){}[]<>/*\\+-_=!$#%&|^@";
    const prefersStill = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let t = rand() * 1000;
    let raf;
    let lastTime = 0;
    const frameInterval = 1000 / Math.max(1, fps);

    // cache to avoid resetting font too often
    let lastEffCell = -1;

    function draw(now) {
      const w = canvas.width / DPR;
      const h = canvas.height / DPR;

      // ----- Adaptive density: keep total drawn glyphs under maxCells -----
      let effCell = cell;
      let C = Math.ceil(w / effCell);
      let R = Math.ceil(h / effCell);
      const total = C * R;
      if (total > maxCells) {
        const scale = Math.sqrt(total / maxCells);
        effCell = Math.ceil(effCell * scale);
        C = Math.ceil(w / effCell);
        R = Math.ceil(h / effCell);
      }

      // Update font size only when effCell changes
      if (effCell !== lastEffCell) {
        const fontSize = Math.max(10, Math.floor(effCell * 0.9));
        ctx.font = `${fontSize}px ${fontFamily}`;
        ctx.textBaseline = "top";
        lastEffCell = effCell;
      }

      ctx.clearRect(0, 0, w, h);

      // advance time scaled by real dt (so FPS cap doesn’t slow “speed”)
      const dt = Math.min(100, now - lastTime || frameInterval);
      t += (speed * SPEED_SCALE) * (dt / 16.67);

      // swirl center
      const cx = 0.5, cy = 0.45;

      // main loops
      for (let gy = 0; gy < R; gy++) {
        // normalize once per row
        let v0 = gy / R;
        for (let gx = 0; gx < C; gx++) {
          let u0 = gx / C;

          // --- lightweight swirl field (1 trig pair per cell) ---
          const dx = u0 - cx, dy = v0 - cy;
          const r = Math.hypot(dx, dy);
          const ang = simplex3(u0 * 0.7, v0 * 0.7, t * 0.35) * Math.PI * 0.3;
          const s = Math.sin(ang), c = Math.cos(ang);
          const strength = Math.min(1, r * 2.0);
          let u = cx + (dx * c - dy * s) * (0.985 + 0.015 * strength);
          let v = cy + (dx * s + dy * c) * (0.985 + 0.015 * strength);

          // --- single domain-warp per axis (cheaper than two) ---
          const wx = 0.12 * simplex3(u * 1.6, v * 1.6, t * 0.45);
          const wy = 0.12 * simplex3(v * 1.5 + 4.2, u * 1.4 + 2.7, -t * 0.4);
          const px = u + wx;
          const py = v + wy;

          // intensity via cheaper combo (3-oct fBm only)
          const f = fbm(px * 2.0, py * 2.0, t * 0.25, 3, 2.0, 0.55); // [0,1]

          // character by intensity
          const ch = chars[(f * (chars.length - 1)) | 0];

          // color (slightly bright violets)
          const tw = 0.9 + 0.25 * simplex3(gx * 0.25 + 11, gy * 0.25 - 7, t * 0.8);
          const hue = 266;
          const sat = 50 + f * 42;
          const light = 34 + f * 46;

          // alpha clamp (kept modest to reduce overdraw)
          const alpha = Math.max(0.10, Math.min(0.50, (0.12 + f * 0.45) * tw));
          ctx.globalAlpha = alpha;
          ctx.fillStyle = `hsl(${hue} ${sat}% ${light}%)`;
          ctx.fillText(ch, gx * effCell, gy * effCell);
        }
      }
      ctx.globalAlpha = 1;
    }

    function tick(now) {
      if (!lastTime || now - lastTime >= frameInterval) {
        draw(now);
        lastTime = now;
      }
      raf = requestAnimationFrame(tick);
    }

    if (prefersStill) {
      // One static frame for accessibility
      draw(performance.now());
    } else {
      raf = requestAnimationFrame(tick);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [cell, speed, opacity, resolvedSeed, fps, maxDPR, maxCells]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      data-darkreader-ignore
      className={`fixed inset-0 -z-30 pointer-events-none select-none ${className}`}
      style={{ opacity }}
    />
  );
}

