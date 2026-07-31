import { useCallback, useEffect, useRef } from 'react';
import {
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from 'framer-motion';

/** Global normalized mouse position (-1..1 on each axis) with spring smoothing. */
export function useMousePosition(stiffness = 40, damping = 20) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness, damping });
  const y = useSpring(my, { stiffness, damping });

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    let raf = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        mx.set((e.clientX / window.innerWidth - 0.5) * 2);
        my.set((e.clientY / window.innerHeight - 0.5) * 2);
      });
    };
    window.addEventListener('mousemove', onMove);
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, [mx, my]);

  return { x, y };
}

/** Raw pixel mouse position with spring smoothing, for cursor + lighting effects. */
export function useMousePixel(stiffness = 500, damping = 40) {
  const mx = useMotionValue(-100);
  const my = useMotionValue(-100);
  const x = useSpring(mx, { stiffness, damping });
  const y = useSpring(my, { stiffness, damping });

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    let raf = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        mx.set(e.clientX);
        my.set(e.clientY);
      });
    };
    window.addEventListener('mousemove', onMove);
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, [mx, my]);

  return { x, y };
}

/** Scroll-driven parallax: maps window scrollY to a vertical pixel offset. */
export function useParallaxScroll(start = 0, end = 600, from = 0, to = 120) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [start, end], [from, to]);
  return y;
}

/** 3D tilt: returns spring-smoothed rotateX/rotateY motion values + mouse handlers. */
export function useTilt(max = 12) {
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const rotateX = useSpring(rx, { stiffness: 150, damping: 15, mass: 0.4 });
  const rotateY = useSpring(ry, { stiffness: 150, damping: 15, mass: 0.4 });
  const gx = useMotionValue(50);
  const gy = useMotionValue(50);
  const glareX = useSpring(gx, { stiffness: 200, damping: 20 });
  const glareY = useSpring(gy, { stiffness: 200, damping: 20 });

  const onMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      ry.set(px * max * 2);
      rx.set(-py * max * 2);
      gx.set((px + 0.5) * 100);
      gy.set((py + 0.5) * 100);
    },
    [max, rx, ry, gx, gy]
  );

  const onLeave = useCallback(() => {
    rx.set(0);
    ry.set(0);
    gx.set(50);
    gy.set(50);
  }, [rx, ry, gx, gy]);

  return { rotateX, rotateY, glareX, glareY, onMove, onLeave };
}

/** Magnetic pull: element drifts toward the cursor while hovered, springs back on leave. */
export function useMagnetic(strength = 0.35) {
  const ref = useRef<HTMLElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 250, damping: 18, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 250, damping: 18, mass: 0.5 });

  const onMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      x.set((e.clientX - cx) * strength);
      y.set((e.clientY - cy) * strength);
    },
    [strength, x, y]
  );

  const onLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return { ref, x: springX, y: springY, onMove, onLeave };
}

/** Convenience: viewport scroll progress 0..1 across the whole page. */
export function useScrollProgress(): MotionValue<number> {
  const { scrollYProgress } = useScroll();
  return scrollYProgress;
}
