'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

const fade = 'linear-gradient(to bottom, black 55%, transparent)';
const ease = [0.22, 1, 0.36, 1] as const;
const pad = (n: number) => String(n).padStart(2, '0');

/* EventCard tells its preview whether to play. Outside a card it always plays. */
const PlayContext = createContext(true);
export const usePlaying = () => useContext(PlayContext);

/* Pills that slide in one by one, hold, then start over */
export function StepsPreview({
  items,
  color,
}: {
  items: string[];
  color: string;
}) {
  const reduce = useReducedMotion();
  const playing = usePlaying();
  const [shown, setShown] = useState(1);

  useEffect(() => {
    if (reduce || !playing) return;
    setShown(1);
    const id = setInterval(
      () => setShown((n) => (n >= items.length + 1 ? 0 : n + 1)),
      1300,
    );
    return () => clearInterval(id);
  }, [items.length, reduce, playing]);

  const count = reduce || !playing ? items.length : shown;

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
            transition={{ duration: 0.45, ease }}
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

/* WORKSHOPS: a tiny code editor that types itself out line by line */
const codeLines: { indent: number; parts: number[] }[] = [
  { indent: 0, parts: [36, 64] },
  { indent: 1, parts: [52, 28, 40] },
  { indent: 1, parts: [76, 34] },
  { indent: 2, parts: [44, 60] },
  { indent: 1, parts: [30] },
  { indent: 0, parts: [24] },
];

export function CodePreview({ color }: { color: string }) {
  const reduce = useReducedMotion();
  const playing = usePlaying();
  const [shown, setShown] = useState(1);

  useEffect(() => {
    if (reduce || !playing) return;
    setShown(1);
    const id = setInterval(
      () => setShown((n) => (n >= codeLines.length + 2 ? 0 : n + 1)),
      650,
    );
    return () => clearInterval(id);
  }, [reduce, playing]);

  const live = playing && !reduce;
  const count = live ? shown : codeLines.length;

  return (
    <div className="h-full px-8 pt-8">
      <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
        <div className="mb-4 flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        </div>
        <div className="flex min-h-[132px] flex-col gap-2.5">
          <AnimatePresence>
            {codeLines.slice(0, count).map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease }}
                style={{ originX: 0, marginLeft: line.indent * 20 }}
                className="flex items-center gap-2">
                {line.parts.map((w, j) => (
                  <span
                    key={j}
                    className="h-2.5 rounded-full"
                    style={{
                      width: w,
                      background: j === 0 ? color : 'rgba(255,255,255,0.28)',
                    }}
                  />
                ))}
                {live && i === count - 1 && (
                  <motion.span
                    className="h-4 w-1.5 rounded-sm bg-white"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.9, repeat: Infinity }}
                  />
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

/* DATATHONS: bars that keep re-settling, plus a trend line drawing over them */
const bars = [
  [30, 62, 44, 30],
  [55, 34, 72, 55],
  [40, 78, 50, 40],
  [68, 46, 84, 68],
  [36, 58, 32, 36],
  [74, 52, 66, 74],
];

export function BarsPreview({ color }: { color: string }) {
  const reduce = useReducedMotion();
  const live = usePlaying() && !reduce;

  return (
    <div className="relative h-full px-8 pt-8">
      <div className="relative flex h-44 items-end gap-3 border-b border-white/15">
        {bars.map((keys, i) => (
          <motion.div
            key={i}
            className="flex-1 rounded-t-md"
            style={{
              background: `linear-gradient(to top, ${color}33, ${color})`,
            }}
            initial={false}
            animate={{
              height: live ? keys.map((k) => `${k}%`) : `${keys[0]}%`,
            }}
            transition={
              live
                ? {
                    duration: 3.2 + i * 0.35,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }
                : { duration: 0.5 }
            }
          />
        ))}
        <svg
          viewBox="0 0 100 50"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-0 h-full w-full">
          <motion.path
            d="M2 38 L20 26 L38 32 L56 14 L74 20 L98 6"
            fill="none"
            stroke="white"
            strokeWidth={1.6}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
            initial={false}
            animate={{ pathLength: live ? [0, 1, 1, 0] : 1 }}
            transition={
              live
                ? {
                    duration: 6,
                    times: [0, 0.45, 0.85, 1],
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }
                : { duration: 0.4 }
            }
          />
        </svg>
      </div>
    </div>
  );
}

/* HACKATHON: live countdown, sprint progress bar, ideate/build/ship phases */
const phases = ['Ideate', 'Build', 'Ship'];
const START_LEFT = 24 * 3600 - 1;

export function CountdownPreview({ color }: { color: string }) {
  const reduce = useReducedMotion();
  const playing = usePlaying();
  const [left, setLeft] = useState(START_LEFT);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    setLeft(START_LEFT);
    setPhase(0);
    if (reduce || !playing) return;
    const tick = setInterval(
      () => setLeft((s) => (s <= 0 ? START_LEFT : s - 1)),
      1000,
    );
    const cycle = setInterval(() => setPhase((p) => (p + 1) % 3), 2200);
    return () => {
      clearInterval(tick);
      clearInterval(cycle);
    };
  }, [reduce, playing]);

  const live = playing && !reduce;
  const h = Math.floor(left / 3600);
  const m = Math.floor((left % 3600) / 60);
  const s = left % 60;

  return (
    <div className="flex h-full flex-col items-center px-8 pt-8">
      <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/40">
        Submissions close in
      </p>
      <p className="mt-3 font-mono text-5xl font-bold tabular-nums text-white">
        {pad(h)}
        <span style={{ color }}>:</span>
        {pad(m)}
        <span style={{ color }}>:</span>
        {pad(s)}
      </p>
      <div className="mt-6 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
        <motion.div
          className="h-full rounded-full"
          style={{ background: color }}
          initial={false}
          animate={{ width: live ? ['0%', '100%'] : '60%' }}
          transition={
            live
              ? { duration: 6.6, repeat: Infinity, ease: 'linear' }
              : { duration: 0.4 }
          }
        />
      </div>
      <div className="mt-5 flex gap-2">
        {phases.map((p, i) => (
          <span
            key={p}
            className="rounded-full px-4 py-1.5 text-xs font-semibold transition-colors duration-300"
            style={{
              background: i === phase ? color : 'rgba(255,255,255,0.08)',
              color: i === phase ? '#101010' : 'rgba(255,255,255,0.6)',
            }}>
            {p}
          </span>
        ))}
      </div>
    </div>
  );
}

/* The card: no glow, no lift. The preview inside it plays while hovered. */
export default function EventCard({
  kicker,
  text,
  cta,
  href,
  preview,
}: {
  kicker: string;
  text: string;
  cta: string;
  href: string;
  preview: React.ReactNode;
  accent?: string; // still accepted so existing callers don't break
}) {
  const [hover, setHover] = useState(false);
  const [canHover, setCanHover] = useState(true);

  useEffect(() => {
    setCanHover(window.matchMedia('(hover: hover)').matches);
  }, []);

  const playing = hover || !canHover; // touch devices have no hover, so always play

  return (
    <Link
      href={href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
      className="group relative flex flex-col overflow-hidden rounded-3xl bg-black text-center ring-1 ring-white/10 transition-colors duration-300 hover:ring-white/25">
      <PlayContext.Provider value={playing}>
        <div
          className="h-60"
          style={{ maskImage: fade, WebkitMaskImage: fade }}>
          {preview}
        </div>
      </PlayContext.Provider>
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
