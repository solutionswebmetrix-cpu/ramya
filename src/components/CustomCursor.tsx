import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/** Premium glowing cursor: a bright dot that tracks instantly + a trailing ring
 *  that lags and grows over interactive elements. Desktop / fine-pointer only. */
export function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 140, damping: 18, mass: 0.5 });
  const ringY = useSpring(y, { stiffness: 140, damping: 18, mass: 0.5 });
  const [hovering, setHovering] = useState(false);
  const [down, setDown] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    setEnabled(true);
    document.body.classList.add('custom-cursor-active');

    let raf = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        x.set(e.clientX);
        y.set(e.clientY);
      });
    };
    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      setHovering(!!t?.closest('a, button, input, textarea, [data-cursor], label'));
    };
    const onDown = () => setDown(true);
    const onUp = () => setDown(false);

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      cancelAnimationFrame(raf);
      document.body.classList.remove('custom-cursor-active');
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[9999]">
      {/* Core dot */}
      <motion.div
        style={{ x, y }}
        animate={{ scale: down ? 0.7 : 1 }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        className="absolute -ml-[3px] -mt-[3px] h-1.5 w-1.5 rounded-full bg-accent-400 shadow-[0_0_10px_3px_rgba(6,182,212,0.7)]"
      />
      {/* Trailing ring */}
      <motion.div
        style={{ x: ringX, y: ringY }}
        animate={{
          scale: hovering ? 1.9 : down ? 0.85 : 1,
          opacity: hovering ? 0.7 : 0.35,
        }}
        transition={{ type: 'spring', stiffness: 250, damping: 22 }}
        className="absolute -ml-4 -mt-4 h-8 w-8 rounded-full border border-brand-400/60"
      />
      {/* Soft glow halo */}
      <motion.div
        style={{ x: ringX, y: ringY }}
        animate={{ opacity: hovering ? 0.25 : 0.12 }}
        className="absolute -ml-12 -mt-12 h-24 w-24 rounded-full bg-brand-500/40 blur-2xl"
      />
    </div>
  );
}
