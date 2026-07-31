import { motion, useMotionTemplate, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion';
import { GradientBlob } from '@/components/ui/Animations';

/** Ambient animated background: floating 3D gradient spheres, morphing shapes,
 *  parallax grid, and a mouse-following soft light. Purely decorative. */
export function Background() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 140]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -90]);
  const y3 = useTransform(scrollY, [0, 1200], [0, 200]);

  // Mouse-following soft light
  const lx = useMotionValue(50);
  const ly = useMotionValue(30);
  const slx = useSpring(lx, { stiffness: 40, damping: 20 });
  const sly = useSpring(ly, { stiffness: 40, damping: 20 });
  const lightX = useTransform(slx, (v) => `${v}%`);
  const lightY = useTransform(sly, (v) => `${v}%`);
  const light = useMotionTemplate`radial-gradient(600px circle at ${lightX} ${lightY}, rgba(37,99,235,0.10), transparent 60%)`;

  const onMove = (e: React.MouseEvent) => {
    lx.set((e.clientX / window.innerWidth) * 100);
    ly.set((e.clientY / window.innerHeight) * 100);
  };

  return (
    <div
      aria-hidden
      onMouseMove={onMove}
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Grid with parallax */}
      <motion.div style={{ y: y2 }} className="absolute inset-0 bg-grid opacity-60" />
      <motion.div style={{ y: y2 }} className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#0f172a_95%)]" />

      {/* Mouse-following soft light */}
      <motion.div style={{ background: light }} className="absolute inset-0" />

      {/* Floating 3D gradient spheres */}
      <motion.div style={{ y: y1 }}>
        <GradientBlob className="-left-24 top-10" from="#2563eb" to="#06b6d4" size={460} duration={20} />
      </motion.div>
      <motion.div style={{ y: y3 }}>
        <GradientBlob className="right-[-6rem] top-1/3" from="#06b6d4" to="#2563eb" size={380} delay={3} duration={24} />
      </motion.div>
      <motion.div style={{ y: y2 }}>
        <GradientBlob className="bottom-0 left-1/3" from="#3b82f6" to="#06b6d4" size={340} delay={6} duration={22} />
      </motion.div>

      {/* Slow rotating gradient ring */}
      <motion.div style={{ y: y1 }} className="absolute left-1/2 top-1/2 h-[60rem] w-[60rem] -translate-x-1/2 -translate-y-1/2 opacity-[0.07]">
        <div
          className="h-full w-full rounded-full animate-spin-slow"
          style={{
            background:
              'conic-gradient(from 0deg, transparent 0deg, #2563eb 60deg, #06b6d4 180deg, transparent 300deg)',
            maskImage: 'radial-gradient(transparent 58%, #000 60%)',
            WebkitMaskImage: 'radial-gradient(transparent 58%, #000 60%)',
          }}
        />
      </motion.div>

      {/* Morphing shape accents */}
      <motion.div
        className="absolute left-[8%] top-[60%] h-40 w-40 opacity-20"
        animate={{ borderRadius: ['40% 60% 70% 30%', '60% 40% 30% 70%', '40% 60% 70% 30%'], rotate: [0, 90, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
        style={{ background: 'linear-gradient(135deg, #2563eb55, transparent)', filter: 'blur(8px)' }}
      />
      <motion.div
        className="absolute right-[12%] top-[75%] h-32 w-32 opacity-20"
        animate={{ borderRadius: ['60% 40% 30% 70%', '30% 70% 60% 40%', '60% 40% 30% 70%'], rotate: [0, -90, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        style={{ background: 'linear-gradient(135deg, #06b6d455, transparent)', filter: 'blur(8px)' }}
      />
    </div>
  );
}
