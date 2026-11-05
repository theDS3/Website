'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

const fade = 'linear-gradient(to bottom, black 55%, transparent)';

/* Pills that slide in one by one, hold, then start over */
export function StepsPreview({
  items,
  color,
}: {
  items: string[];
  color: string;
}) {
  const reduce = useReducedMotion();
  const [shown, setShown] = useState(1);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(
      () => setShown((n) => (n >= items.length + 1 ? 0 : n + 1)),
      1300,
    );
    return () => clearInterval(id);
  }, [items.length, reduce]);

  const count = reduce ? items.length : shown;

  return (
    <div className="flex h-full flex-col gap-3 px-8 pt-8">
      <AnimatePresence>
        {items.slice(0, count).map((label) => (
          <motion.div
            key={label}
            layout
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3 rounded-full bg-white/10 px-5 py-3.5 text-lg text-white">
            <span
              className="flex h-6 w-6 items-center justify-center rounded-full text-[13px] font-bold text-black"
              style={{ background: color }}>
              ✓
            </span>
            {label}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

/* A grid of colored tiles that drifts upward forever */
export function TilesPreview({ colors }: { colors: string[] }) {
  const tiles = [...colors, ...colors]; // doubled so the loop has no jump
  return (
    <div className="h-full overflow-hidden px-6 pt-6">
      <motion.div
        className="grid grid-cols-3 gap-3 pb-3"
        animate={{ y: ['0%', '-50%'] }}
        transition={{ duration: 18, ease: 'linear', repeat: Infinity }}>
        {tiles.map((c, i) => (
          <div
            key={i}
            className="h-24 rounded-xl p-3"
            style={{ background: `linear-gradient(135deg, ${c}, #1a0b2e)` }}>
            <div className="h-1.5 w-2/3 rounded-full bg-white/60" />
            <div className="mt-2 h-1.5 w-1/2 rounded-full bg-white/30" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function EventCard({
  kicker,
  text,
  cta,
  href,
  preview,
  accent = '#a855f7',
}: {
  kicker: string;
  text: string;
  cta: string;
  href: string;
  preview: React.ReactNode;
  accent?: string;
}) {
  return (
    <Link
      href={href}
      className="group relative flex flex-col overflow-hidden rounded-3xl bg-black text-center ring-1 ring-white/10 transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_60px_-12px_var(--accent)]"
      style={{ '--accent': accent } as React.CSSProperties}>
      <div
        className="h-60"
        style={{ maskImage: fade, WebkitMaskImage: fade }}>
        {preview}
      </div>
      <div className="flex flex-1 flex-col items-center px-8 pb-10">
        <p className="text-sm font-medium text-white">{kicker}</p>
        <p className="mt-4 max-w-xs text-base leading-relaxed text-white/50">
          {text}
        </p>
        <span className="mt-auto pt-8 text-2xl font-bold text-white">
          {cta}{' '}
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
