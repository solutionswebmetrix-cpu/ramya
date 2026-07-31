import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

/** Dark / light theme toggle that persists to localStorage. */
export function ThemeToggle({ className = '' }: { className?: string }) {
  const [light, setLight] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const isLight = stored === 'light';
    setLight(isLight);
    document.documentElement.classList.toggle('light', isLight);
    document.documentElement.classList.toggle('dark', !isLight);
  }, []);

  const toggle = () => {
    const next = !light;
    setLight(next);
    document.documentElement.classList.toggle('light', next);
    document.documentElement.classList.toggle('dark', !next);
    localStorage.setItem('theme', next ? 'light' : 'dark');
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={light ? 'Switch to dark mode' : 'Switch to light mode'}
      className={`group relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all hover:border-accent-400/60 hover:bg-white/10 ${className}`}
    >
      <Sun
        className={`h-4 w-4 transition-all duration-500 ${
          light ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
        }`}
      />
      <Moon
        className={`absolute h-4 w-4 transition-all duration-500 ${
          light ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
        }`}
      />
    </button>
  );
}
