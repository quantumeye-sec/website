'use client';

import { useEffect, useRef } from 'react';

/**
 * Slow, low-CPU canvas animation:
 * - violet nodes with soft glows
 * - subtle connecting lines when points are near
 * - respects prefers-reduced-motion
 */
export default function BackgroundCyber({ points = 80 }) {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext('2d');
    let w, h, rafId, last = 0;
    const dpr = Math.max(1, window.devicePixelRatio || 1);
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const resize = () => {
      // Fill viewport
      canvas.width = Math.floor(canvas.clientWidth * dpr);
      canvas.height = Math.floor(canvas.clientHeight * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
    };

    const pts = Array.from({ length: points }, () => ({
      x: Math.random() * w || Math.random(),
      y: Math.random() * h || Math.random(),
      vx: (Math.random() - 0.5) * 0.03, // slow drift
      vy: (Math.random() - 0.5) * 0.03,
    }));

    const step = (t) => {
      const dt = Math.min(33, (t - last) || 16) / 16.0; // normalize ~60fps, cap large jumps
      last = t;

      ctx.clearRect(0, 0, w, h);

      // advance points
      for (const p of pts) {
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
      }

      // faint links
      ctx.globalCompositeOperation = 'lighter';
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const a = pts[i], b = pts[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          const max = 180 * 180; // link distance
          if (d2 < max) {
            const alpha = 1 - d2 / max;
            ctx.strokeStyle = `rgba(139,92,246,${0.08 * alpha})`; // violet-500 RGBA
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // glow nodes
      for (const p of pts) {
        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 8);
        grd.addColorStop(0, 'rgba(167,139,250,0.9)'); // violet-400
        grd.addColorStop(1, 'rgba(167,139,250,0)');
        ctx.fillStyle = grd;
        ctx.beginPath(); ctx.arc(p.x, p.y, 8, 0, Math.PI * 2); ctx.fill();

        ctx.fillStyle = 'rgba(255,255,255,0.75)';
        ctx.beginPath(); ctx.arc(p.x, p.y, 1.2, 0, Math.PI * 2); ctx.fill();
      }

      if (!reduceMotion) rafId = requestAnimationFrame(step);
    };

    const onResize = () => {
      resize();
      // reset points into the new space
      for (const p of pts) {
        p.x = Math.random() * w;
        p.y = Math.random() * h;
      }
    };

    resize();
    window.addEventListener('resize', onResize);
    rafId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', onResize);
    };
  }, [points]);

  return (
    <>
      {/* Canvas */}
      <canvas
        ref={ref}
        className="fixed inset-0 -z-10 pointer-events-none [filter:contrast(110%)_saturate(115%)]"
      />
      {/* Optional vignette to deepen edges */}
      <div className="fixed inset-0 -z-10 pointer-events-none bg-[radial-gradient(70%_60%_at_50%_40%,transparent,rgba(0,0,0,0.35))]" />
    </>
  );
}

