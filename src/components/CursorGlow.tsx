import { useEffect, useRef } from 'react';

/**
 * Custom luxury cursor: a soft gold glow that trails the pointer,
 * plus a small precise dot. Disabled on touch devices.
 */
export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let glowX = mouseX;
    let glowY = mouseY;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }
    };

    const onDown = () => dotRef.current?.classList.add('scale-50');
    const onUp = () => dotRef.current?.classList.remove('scale-50');

    const tick = () => {
      glowX += (mouseX - glowX) * 0.12;
      glowY += (mouseY - glowY) * 0.12;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${glowX}px, ${glowY}px)`;
      }
      raf = requestAnimationFrame(tick);
    };
    tick();

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
    };
  }, []);

  return (
    <>
      <div
        ref={glowRef}
        className="pointer-events-none fixed left-0 top-0 z-[100] h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 mix-blend-screen will-change-transform"
        style={{
          background: 'radial-gradient(circle, rgba(212,144,47,0.35) 0%, rgba(212,144,47,0.1) 35%, transparent 70%)',
          marginLeft: '-128px',
          marginTop: '-128px',
        }}
        aria-hidden="true"
      />
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[101] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-500 will-change-transform transition-transform duration-150"
        style={{ marginLeft: '-4px', marginTop: '-4px' }}
        aria-hidden="true"
      />
    </>
  );
}
