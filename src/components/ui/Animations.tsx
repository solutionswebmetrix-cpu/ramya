import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { useTilt, useMagnetic } from '@/lib/motion';
import { Icon } from '@/components/ui/Primitives';

/* ------------------------------------------------------------------ */
/*  TiltCard — 3D perspective tilt with mouse-tracked glare + depth.  */
/* ------------------------------------------------------------------ */
export function TiltCard({
  children,
  className = '',
  max = 10,
  glare = true,
  lift = 14,
}: {
  children: React.ReactNode;
  className?: string;
  max?: number;
  glare?: boolean;
  lift?: number;
}) {
  const { rotateX, rotateY, glareX, glareY, onMove, onLeave } = useTilt(max);
  const glareBg = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(96,165,250,0.18), transparent 60%)`;

  return (
    <motion.div
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', transformPerspective: 900 }}
      whileHover={{ y: -lift }}
      transition={{ type: 'spring', stiffness: 200, damping: 18 }}
      className={`relative ${className}`}
    >
      {children}
      {glare && (
        <motion.div
          style={{ background: glareBg }}
          className="pointer-events-none absolute inset-0 z-20 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
      )}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  MagneticButton — button/link that drifts toward the cursor.       */
/*  + ripple on click.                                                */
/* ------------------------------------------------------------------ */
export function MagneticButton({
  children,
  className = '',
  href,
  onClick,
  strength = 0.3,
  download,
  ariaLabel,
  type = 'button',
  disabled,
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  strength?: number;
  download?: boolean;
  ariaLabel?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}) {
  const { ref, x, y, onMove, onLeave } = useMagnetic(strength);
  const ripples = useMotionValue<number[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (el) {
      const rect = el.getBoundingClientRect();
      const id = Date.now();
      // store ripple origin via data attr rendered below
      el.dataset.rippleX = String(e.clientX - rect.left);
      el.dataset.rippleY = String(e.clientY - rect.top);
      const next = [...ripples.get(), id];
      ripples.set(next);
      setTimeout(() => ripples.set(ripples.get().filter((r) => r !== id)), 650);
    }
    onClick?.(e);
  };

  const rippleList = ripples.get();

  const sharedProps = {
    ref: ref as never,
    'aria-label': ariaLabel,
    onClick: handleClick,
    onMouseMove: onMove,
    onMouseLeave: onLeave,
    style: { x, y },
    whileTap: { scale: 0.96 },
    className: `relative overflow-hidden ${className}`,
  };

  if (href) {
    return (
      <motion.a {...sharedProps} href={href} download={download}>
        {children}
        {rippleList.map((id) => {
          const el = ref.current;
          const rx = el?.dataset.rippleX ?? '50%';
          const ry = el?.dataset.rippleY ?? '50%';
          return (
            <motion.span
              key={id}
              initial={{ scale: 0, opacity: 0.5 }}
              animate={{ scale: 4, opacity: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="pointer-events-none absolute h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/30"
              style={{ left: rx, top: ry }}
            />
          );
        })}
      </motion.a>
    );
  }

  return (
    <motion.button {...sharedProps} type={type} disabled={disabled}>
      {children}
      {rippleList.map((id) => {
        const el = ref.current;
        const rx = el?.dataset.rippleX ?? '50%';
        const ry = el?.dataset.rippleY ?? '50%';
        return (
          <motion.span
            key={id}
            initial={{ scale: 0, opacity: 0.5 }}
            animate={{ scale: 4, opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="pointer-events-none absolute h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/30"
            style={{ left: rx, top: ry }}
          />
        );
      })}
    </motion.button>
  );
}

/* ------------------------------------------------------------------ */
/*  FloatingIcon3D — a floating, mouse-reactive 3D icon sphere.       */
/* ------------------------------------------------------------------ */
export function FloatingIcon3D({
  name,
  label,
  className = '',
  delay = 0,
  tint = '#2563EB',
}: {
  name: string;
  label: string;
  className?: string;
  delay?: number;
  tint?: string;
}) {
  const rx = useSpring(useMotionValue(0), { stiffness: 120, damping: 12 });
  const ry = useSpring(useMotionValue(0), { stiffness: 120, damping: 12 });
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    ry.set(px * 30);
    rx.set(-py * 30);
  };
  const handleLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      style={{ rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d', transformPerspective: 600 }}
      className={`group relative ${className}`}
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4 + delay, repeat: Infinity, ease: 'easeInOut' }}
        className="relative grid place-items-center"
        style={{ transform: 'translateZ(20px)' }}
      >
        <div
          className="absolute inset-0 rounded-2xl blur-xl opacity-40 transition-opacity group-hover:opacity-70"
          style={{ background: tint }}
        />
        <div
          className="relative grid h-12 w-12 place-items-center rounded-2xl border border-white/15 text-white shadow-lg backdrop-blur-xl"
          style={{ background: `linear-gradient(135deg, ${tint}cc, ${tint}44)` }}
        >
          <Icon name={name} className="h-6 w-6" />
        </div>
      </motion.div>
      <span className="mt-2 block text-center text-[10px] font-medium text-slate-300">{label}</span>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  GlowingBorder — animated conic gradient border (for project cards)*/
/* ------------------------------------------------------------------ */
export function GlowingBorder({
  children,
  className = '',
  active = true,
}: {
  children: React.ReactNode;
  className?: string;
  active?: boolean;
}) {
  return (
    <div className={`group/card relative overflow-hidden rounded-[inherit] ${className}`}>
      {active && (
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-[1px] rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover/card:opacity-100"
          style={{
            background:
              'conic-gradient(from var(--angle, 0deg), #2563eb, #06b6d4, #2563eb)',
            animation: 'spin-slow 6s linear infinite',
          }}
        />
      )}
      <div className="relative rounded-[inherit]">{children}</div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  GradientBlob — soft morphing gradient sphere for section bg.      */
/* ------------------------------------------------------------------ */
export function GradientBlob({
  className = '',
  from = '#2563eb',
  to = '#06b6d4',
  size = 400,
  delay = 0,
  duration = 18,
}: {
  className?: string;
  from?: string;
  to?: string;
  size?: number;
  delay?: number;
  duration?: number;
}) {
  return (
    <motion.div
      aria-hidden
      className={`pointer-events-none absolute rounded-full blur-[100px] ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${from}55, ${to}22 60%, transparent 75%)`,
      }}
      animate={{
        x: [0, 30, -20, 0],
        y: [0, -25, 15, 0],
        scale: [1, 1.15, 0.95, 1],
        borderRadius: ['50%', '45% 55% 50% 50%', '55% 45% 50% 50%', '50%'],
      }}
      transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut' }}
    />
  );
}

/* ------------------------------------------------------------------ */
/*  RevealMotion — Framer Motion powered scroll reveal (replaces CSS  */
/*  Reveal with richer variants while keeping same API).              */
/* ------------------------------------------------------------------ */
export function RevealMotion({
  children,
  className = '',
  delay = 0,
  y = 28,
  once = true,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
