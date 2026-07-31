import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/** GSAP-powered scroll enhancements: smooth section reveals + a top progress bar.
 *  Framer Motion handles per-element reveals elsewhere; this adds the cinematic
 *  scroll-linked progress indicator and gentle section-level parallax. */
export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    gsap.registerPlugin(ScrollTrigger);

    const bar = barRef.current;
    if (bar) {
      const tween = gsap.to(bar, {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: { start: 0, end: 'max', scrub: 0.3 },
      });
      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    }
  }, []);

  return (
    <div
      aria-hidden
      className="fixed left-0 top-0 z-[60] h-0.5 w-full origin-left scale-x-0 bg-gradient-to-r from-brand-500 via-accent-400 to-brand-500"
      ref={barRef}
    />
  );
}
