import { ChevronLeft, ChevronRight, Download, Maximize2, Minus, Plus } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { PAGE_COUNT } from '@/data/portfolioData';

type PortfolioDeckProps = {
  children: React.ReactNode;
  onBack?: () => void;
};

/** On-screen viewer that stacks A4 pages with zoom + print + keyboard nav. */
export function PortfolioDeck({ children, onBack }: PortfolioDeckProps) {
  const [scale, setScale] = useState(0.62);
  const [activePage, setActivePage] = useState(1);
  const stageRef = useRef<HTMLDivElement>(null);
  const pagesRef = useRef<HTMLDivElement>(null);

  const fitToWidth = useCallback(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const avail = stage.clientWidth - 48;
    // 210mm in px at 96dpi ≈ 793px
    setScale(Math.min(0.92, Math.max(0.35, avail / 794)));
  }, []);

  useEffect(() => {
    fitToWidth();
    const onResize = () => fitToWidth();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [fitToWidth]);

  // Track which page is in view for the indicator
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const handler = () => {
      const viewportMid = stage.scrollTop + stage.clientHeight / 2;
      const els = stage.querySelectorAll<HTMLElement>('.a4-page');
      let current = 1;
      els.forEach((el, i) => {
        const top = el.offsetTop;
        const bottom = top + el.offsetHeight * scale;
        if (viewportMid >= top && viewportMid < bottom) current = i + 1;
      });
      setActivePage(current);
    };
    stage.addEventListener('scroll', handler, { passive: true });
    return () => stage.removeEventListener('scroll', handler);
  }, [scale]);

  const goTo = (page: number) => {
    const stage = stageRef.current;
    if (!stage) return;
    const el = stage.querySelectorAll<HTMLElement>('.a4-page')[page - 1];
    if (el) stage.scrollTo({ top: el.offsetTop - 16, behavior: 'smooth' });
  };

  const zoom = (delta: number) =>
    setScale((s) => Math.min(1.1, Math.max(0.35, +(s + delta).toFixed(2))));

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        goTo(Math.min(PAGE_COUNT, activePage + 1));
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
 goTo(Math.max(1, activePage - 1));
      } else if ((e.metaKey || e.ctrlKey) && e.key === 'p') {
        e.preventDefault();
        window.print();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  const handlePrint = () => window.print();

  return (
    <div className="fixed inset-0 z-[80] flex flex-col bg-ink-900">
      {/* Toolbar */}
      <div className="glass-strong z-10 flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
        <div className="flex items-center gap-3">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-brand-600 to-accent-500 text-xs font-bold text-white">
            T
          </span>
          <div className="hidden sm:block">
            <p className="text-sm font-semibold leading-tight text-white">Digital Marketing Portfolio</p>
            <p className="text-[11px] text-slate-400">Tuba Ansari · A4 · PDF-ready</p>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => goTo(Math.max(1, activePage - 1))}
            disabled={activePage <= 1}
            aria-label="Previous page"
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition-colors hover:bg-white/10 disabled:opacity-40"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <span className="min-w-[64px] text-center text-xs tabular-nums text-slate-300">
            {String(activePage).padStart(2, '0')} / {String(PAGE_COUNT).padStart(2, '0')}
          </span>
          <button
            type="button"
            onClick={() => goTo(Math.min(PAGE_COUNT, activePage + 1))}
            disabled={activePage >= PAGE_COUNT}
            aria-label="Next page"
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition-colors hover:bg-white/10 disabled:opacity-40"
          >
            <ChevronRight className="h-4 w-4" />
          </button>

          <span className="mx-1 h-5 w-px bg-white/10" />

          <button
            type="button"
            onClick={() => zoom(-0.08)}
            aria-label="Zoom out"
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition-colors hover:bg-white/10"
          >
            <Minus className="h-4 w-4" />
          </button>
          <span className="w-12 text-center text-xs tabular-nums text-slate-300">
            {Math.round(scale * 100)}%
          </span>
          <button
            type="button"
            onClick={() => zoom(0.08)}
            aria-label="Zoom in"
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition-colors hover:bg-white/10"
          >
            <Plus className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={fitToWidth}
            aria-label="Fit to width"
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition-colors hover:bg-white/10"
          >
            <Maximize2 className="h-4 w-4" />
          </button>

          <span className="mx-1 h-5 w-px bg-white/10" />

          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-brand-600 to-accent-500 px-3 py-1.5 text-xs font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            <Download className="h-3.5 w-3.5" />
            Export PDF
          </button>

          {onBack && (
            <button
              type="button"
              onClick={onBack}
              className="ml-1 rounded-lg px-2.5 py-1.5 text-xs font-medium text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
            >
              Back to site
            </button>
          )}
        </div>
      </div>

      {/* Scrollable stage */}
      <div ref={stageRef} className="flex-1 overflow-y-auto">
        <div ref={pagesRef} className="deck-stage print-root" style={{ '--deck-scale': scale } as React.CSSProperties}>
          <div
            style={{
              transform: `scale(${scale})`,
              transformOrigin: 'top center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '10mm',
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
