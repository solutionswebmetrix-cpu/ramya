import { useEffect, useState } from 'react';

/** Branded loading screen with animated progress, fades out once the page is ready. */
export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const start = performance.now();
    const duration = 1500;
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setProgress(Math.round(eased * 100));
      if (p < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setDone(true), 300);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-ink-900 transition-opacity duration-500 ${
        done ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-hidden={done}
    >
      <div className="flex flex-col items-center gap-6">
        {/* Monogram */}
        <div className="relative">
          <div className="absolute inset-0 rounded-2xl bg-brand-600/40 blur-xl animate-pulse" />
          <div className="relative grid h-20 w-20 place-items-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
            <span className="bg-gradient-to-br from-brand-400 to-accent-400 bg-clip-text text-4xl font-extrabold text-transparent">
              T
            </span>
          </div>
        </div>

        <div className="text-center">
          <p className="text-sm font-medium tracking-wide text-white">Tuba Ansari</p>
          <p className="mt-1 text-xs text-slate-400">Crafting your experience…</p>
        </div>

        {/* Progress bar */}
        <div className="h-1 w-56 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-gradient-to-r from-brand-500 to-accent-400 transition-[width] duration-200"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="text-xs tabular-nums text-slate-500">{progress}%</span>
      </div>
    </div>
  );
}
