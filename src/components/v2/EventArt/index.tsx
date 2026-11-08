'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

const fade = 'linear-gradient(to bottom, black 55%, transparent)';
const ease = [0.22, 1, 0.36, 1] as const;

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
  const [shown, setShown] = useState(1);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(
      () => setShown((n) => (n >= codeLines.length + 2 ? 0 : n + 1)),
      650,
    );
    return () => clearInterval(id);
  }, [reduce]);

  const count = reduce ? codeLines.length : shown;

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
                {i === count - 1 && !reduce && (
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
  return (
    <div className="relative h-full px-8 pt-8">
      <div className="relative flex h-44 items-end gap-3 border-b border-white/15">
        {bars.map((keys, i) => (
          <motion.div
            key={i}
            className="flex-1 rounded-t-md"
            style={{
              background: `linear-gradient(to top, ${color}33, ${color})`,
              height: `${keys[0]}%`,
            }}
            animate={reduce ? undefined : { height: keys.map((k) => `${k}%`) }}
            transition={{
              duration: 3.2 + i * 0.35,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
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
            initial={{ pathLength: reduce ? 1 : 0 }}
            animate={reduce ? undefined : { pathLength: [0, 1, 1, 0] }}
            transition={{
              duration: 6,
              times: [0, 0.45, 0.85, 1],
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </svg>
      </div>
    </div>
  );
}

/* HACKATHON: a live countdown, a sprint progress bar, and the ideate/build/ship phases */
const phases = ['Ideate', 'Build', 'Ship'];

const pad = (n: number) => String(n).padStart(2, '0');

export function CountdownPreview({ color }: { color: string }) {
  const reduce = useReducedMotion();
  const [left, setLeft] = useState(24 * 3600 - 1);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const tick = setInterval(
      () => setLeft((s) => (s <= 0 ? 24 * 3600 - 1 : s - 1)),
      1000,
    );
    const cycle = setInterval(() => setPhase((p) => (p + 1) % 3), 2200);
    return () => {
      clearInterval(tick);
      clearInterval(cycle);
    };
  }, [reduce]);

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
          initial={{ width: reduce ? '60%' : '0%' }}
          animate={reduce ? undefined : { width: ['0%', '100%'] }}
          transition={{ duration: 6.6, repeat: Infinity, ease: 'linear' }}
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

/* AGENTIC AI: a central agent sending tasks out to tools and getting results back */
const agentNodes = [
  { x: 40, y: 28 },
  { x: 260, y: 28 },
  { x: 40, y: 152 },
  { x: 260, y: 152 },
];

export function AgentPreview({ color }: { color: string }) {
  const reduce = useReducedMotion();
  const cx = 150;
  const cy = 90;

  return (
    <div className="h-full px-6 pt-4">
      <svg
        viewBox="0 0 300 180"
        className="h-full w-full"
        role="img"
        aria-label="An AI agent connected to tools">
        {agentNodes.map((n, i) => (
          <line
            key={`l${i}`}
            x1={cx}
            y1={cy}
            x2={n.x}
            y2={n.y}
            stroke="rgba(255,255,255,0.18)"
            strokeWidth={1.5}
            strokeDasharray="4 5"
          />
        ))}

        {/* pulse rings around the agent */}
        {!reduce &&
          [0, 1].map((i) => (
            <motion.circle
              key={`r${i}`}
              cx={cx}
              cy={cy}
              fill="none"
              stroke={color}
              strokeWidth={1.5}
              animate={{ r: [20, 46], opacity: [0.6, 0] }}
              transition={{
                duration: 2.4,
                delay: i * 1.2,
                repeat: Infinity,
                ease: 'easeOut',
              }}
            />
          ))}

        {agentNodes.map((n, i) => (
          <circle
            key={`n${i}`}
            cx={n.x}
            cy={n.y}
            r={13}
            fill="#101010"
            stroke="rgba(255,255,255,0.45)"
            strokeWidth={1.5}
          />
        ))}

        <circle
          cx={cx}
          cy={cy}
          r={22}
          fill={color}
        />
        <circle
          cx={cx}
          cy={cy}
          r={8}
          fill="#101010"
        />

        {/* packets travelling out to a tool and back */}
        {!reduce &&
          agentNodes.map((n, i) => (
            <motion.circle
              key={`p${i}`}
              r={4.5}
              fill="white"
              initial={{ cx, cy, opacity: 0 }}
              animate={{
                cx: [cx, n.x, cx],
                cy: [cy, n.y, cy],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 2.6,
                delay: i * 0.65,
                repeat: Infinity,
                repeatDelay: 0.8,
                ease: 'easeInOut',
              }}
            />
          ))}
      </svg>
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
