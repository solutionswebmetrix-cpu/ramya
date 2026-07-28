import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LogoImage from './LogoImage';

/**
 * Luxury preloader: a raw marble block is "carved" into a Ram bow emblem,
 * golden particles bloom, then the company name fades in and the curtain lifts.
 */
export default function Preloader({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    let p = 0;
    const interval = setInterval(() => {
      p += Math.random() * 6 + 2;
      if (p >= 100) {
        p = 100;
        clearInterval(interval);
        setTimeout(() => setExiting(true), 500);
        setTimeout(onDone, 1500);
      }
      setProgress(Math.min(p, 100));
    }, 90);
    return () => clearInterval(interval);
  }, [onDone]);

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden"
          style={{
            background:
              'radial-gradient(ellipse at center, #2a2218 0%, #14100b 70%, #0a0805 100%)',
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          {/* Floating gold particles */}
          {Array.from({ length: 28 }).map((_, i) => (
            <motion.span
              key={i}
              className="absolute rounded-full"
              style={{
                width: 2 + Math.random() * 3,
                height: 2 + Math.random() * 3,
                background: 'radial-gradient(circle, #e2ad4f, transparent 70%)',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1.2, 0],
                y: [0, -30 - Math.random() * 40],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: 'easeOut',
              }}
            />
          ))}

          {/* God ray backdrop */}
          <motion.div
            className="absolute h-[140vh] w-[40vw] rounded-full opacity-30 blur-3xl"
            style={{
              background: 'radial-gradient(ellipse, rgba(212,144,47,0.4) 0%, transparent 60%)',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.5, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
          />

          <div className="relative z-10 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              className="relative mb-10 flex h-32 w-32 items-center justify-center rounded-3xl bg-marble-950/70 p-4 shadow-soft md:h-36 md:w-36"
            >
              <LogoImage />
            </motion.div>
            {/* Carving animation: marble block morphing into Ram bow emblem */}
            <div className="relative mb-10 h-32 w-32">
              {/* Raw marble block */}
              <motion.div
                className="absolute inset-0 rounded-lg"
                style={{
                  background:
                    'linear-gradient(135deg, #ece3d6 0%, #ddd0bd 40%, #c7b59c 70%, #ab9576 100%)',
                  boxShadow: 'inset 0 0 30px rgba(108,90,72,0.4), 0 20px 50px rgba(0,0,0,0.5)',
                }}
                initial={{ opacity: 1, scale: 1, borderRadius: '12%' }}
                animate={{
                  opacity: progress > 30 ? 0 : 1,
                  scale: progress > 30 ? 0.85 : 1,
                  borderRadius: progress > 30 ? '50%' : '12%',
                }}
                transition={{ duration: 1.2 }}
              />

              {/* Gold chisel glow */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(212,144,47,0.8) 0%, transparent 60%)',
                  filter: 'blur(8px)',
                }}
                initial={{ opacity: 0, scale: 0.4 }}
                animate={{ opacity: progress > 20 && progress < 80 ? 1 : 0, scale: progress / 80 }}
                transition={{ duration: 0.6 }}
              />

              {/* Carved Ram bow emblem (revealed as carving completes) */}
              <motion.svg
                viewBox="0 0 100 100"
                className="absolute inset-0 h-full w-full"
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: progress > 55 ? 1 : 0, scale: progress > 55 ? 1 : 0.6 }}
                transition={{ duration: 1, ease: 'easeOut' }}
              >
                {/* Circular halo */}
                <motion.circle
                  cx="50"
                  cy="50"
                  r="44"
                  fill="none"
                  stroke="url(#preGold)"
                  strokeWidth="1.2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: progress > 55 ? 1 : 0 }}
                  transition={{ duration: 1.4, ease: 'easeInOut' }}
                />
                {/* Bow */}
                <motion.path
                  d="M30 50 Q50 25 70 50 Q50 75 30 50 Z"
                  fill="none"
                  stroke="url(#preGold)"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: progress > 60 ? 1 : 0 }}
                  transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.2 }}
                />
                {/* Arrow */}
                <motion.path
                  d="M20 50 L80 50"
                  stroke="url(#preGold)"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: progress > 70 ? 1 : 0 }}
                  transition={{ duration: 1, ease: 'easeInOut', delay: 0.4 }}
                />
                {/* Om-like top flourish */}
                <motion.path
                  d="M50 20 Q56 14 50 10 Q44 6 50 4"
                  fill="none"
                  stroke="url(#preGold)"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: progress > 80 ? 1 : 0 }}
                  transition={{ duration: 0.9, delay: 0.6 }}
                />
                <defs>
                  <linearGradient id="preGold" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#b97423" />
                    <stop offset="50%" stopColor="#faf2dc" />
                    <stop offset="100%" stopColor="#d4902f" />
                  </linearGradient>
                </defs>
              </motion.svg>
            </div>

            {/* Company name */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: progress > 75 ? 1 : 0, y: progress > 75 ? 0 : 20 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <h1 className="font-serif-lux text-3xl font-semibold tracking-[0.3em] text-marble-100 md:text-4xl">
                RAMYA
              </h1>
              <h1 className="font-serif-lux text-3xl font-semibold tracking-[0.3em] gold-text md:text-4xl">
                MARBLE MURTI
              </h1>
              <p className="mt-3 text-[0.65rem] uppercase tracking-[0.5em] text-marble-400">
                Est. 1989
              </p>
            </motion.div>

            {/* Progress line */}
            <div className="mt-10 h-px w-56 overflow-hidden bg-marble-800/40">
              <motion.div
                className="h-full bg-gradient-to-r from-gold-600 via-gold-200 to-gold-500"
                animate={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut' }}
              />
            </div>
            <p className="mt-3 font-serif-lux text-sm italic text-marble-400">
              Carving devotion… {Math.floor(progress)}%
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
