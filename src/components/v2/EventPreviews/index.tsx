'use client';

import { useEffect, useState } from 'react';
import {
  AnimatePresence,
  animate,
  motion,
  useReducedMotion,
} from 'framer-motion';
import {
  BarsPreview,
  CodePreview,
  CountdownPreview,
  StepsPreview,
  usePlaying,
} from '@/components/v2/EventCard';

const ease = [0.22, 1, 0.36, 1] as const;

/* ------------------------------------------------------------------ */
/* BUILD YOUR OWN WRAPPED: story slides, like a year-in-review         */
/* ------------------------------------------------------------------ */
const genres = [
  { label: 'Indie', pct: 92 },
  { label: 'Hip-hop', pct: 68 },
  { label: 'Lo-fi', pct: 44 },
];

function CountUp({ to, run }: { to: number; run: boolean }) {
  const [n, setN] = useState(to);

  useEffect(() => {
    if (!run) {
      setN(to);
      return;
    }
    const controls = animate(0, to, {
      duration: 1.6,
      ease: 'easeOut',
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => controls.stop();
  }, [to, run]);

  return <>{n.toLocaleString('en-US')}</>;
}

export function WrappedPreview({ color }: { color: string }) {
  const reduce = useReducedMotion();
  const playing = usePlaying();
  const live = playing && !reduce;
  const [slide, setSlide] = useState(0);
  const SLIDE_MS = 2800;

  useEffect(() => {
    setSlide(0);
    if (!live) return;
    const id = setInterval(() => setSlide((s) => (s + 1) % 3), SLIDE_MS);
    return () => clearInterval(id);
  }, [live]);

  const label =
    'text-[11px] font-semibold uppercase tracking-[0.25em] text-white/40';

  return (
    <div className="flex h-full flex-col px-8 pt-6">
      {/* story progress segments */}
      <div className="flex gap-1.5">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="h-1 flex-1 overflow-hidden rounded-full bg-white/15">
            {live && i === slide ? (
              <motion.div
                key={slide}
                className="h-full rounded-full bg-white"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: SLIDE_MS / 1000, ease: 'linear' }}
              />
            ) : (
              <div
                className="h-full rounded-full bg-white"
                style={{
                  width: live
                    ? i < slide
                      ? '100%'
                      : '0%'
                    : i === 0
                      ? '100%'
                      : '0%',
                }}
              />
            )}
          </div>
        ))}
      </div>

      <div className="relative mt-5 flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide}
            className="absolute inset-0"
            initial={{ opacity: 0, x: reduce ? 0 : 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: reduce ? 0 : -24 }}
            transition={{ duration: 0.4, ease }}>
            {slide === 0 && (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <p className={label}>Your year in data</p>
                <p
                  className="mt-3 text-6xl font-extrabold tabular-nums"
                  style={{ color }}>
                  <CountUp
                    to={12480}
                    run={live}
                  />
                </p>
                <p className="mt-2 text-sm text-white/60">minutes listened</p>
              </div>
            )}

            {slide === 1 && (
              <div className="flex h-full flex-col justify-center gap-3">
                <p className={`${label} text-center`}>Your top genres</p>
                {genres.map((g, i) => (
                  <div
                    key={g.label}
                    className="flex items-center gap-3">
                    <span className="w-5 text-sm font-bold text-white/50">
                      #{i + 1}
                    </span>
                    <div className="h-7 flex-1 overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        className="flex h-full items-center rounded-full px-3 text-xs font-semibold text-black"
                        style={{ background: color, opacity: 1 - i * 0.22 }}
                        initial={{ width: '0%' }}
                        animate={{ width: `${g.pct}%` }}
                        transition={{
                          delay: 0.15 + i * 0.15,
                          duration: 0.7,
                          ease,
                        }}>
                        {g.label}
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {slide === 2 && (
              <div className="flex h-full items-center justify-center gap-6">
                <svg
                  viewBox="0 0 100 100"
                  className="h-28 w-28 -rotate-90">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="10"
                  />
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke={color}
                    strokeWidth="10"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 0.72 }}
                    transition={{ duration: 1.1, ease }}
                  />
                </svg>
                <div className="text-left">
                  <p className="text-4xl font-extrabold text-white">72%</p>
                  <p className="mt-1 text-sm text-white/60">
                    of listening after midnight
                  </p>
                  <p
                    className="mt-2 text-xs font-semibold uppercase tracking-widest"
                    style={{ color }}>
                    Night owl
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* ML BOOTCAMP: a neural network passing a signal forward              */
/* ------------------------------------------------------------------ */
const layers = [3, 4, 4, 2];
const layerX = [48, 116, 184, 252];

export function NeuralPreview({ color }: { color: string }) {
  const reduce = useReducedMotion();
  const live = usePlaying() && !reduce;
  const T = 3.8; // seconds per forward pass
  const times = (p: number) => [0, p - 0.08, p, p + 0.16, 1];

  const pos = layers.map((count, l) =>
    Array.from({ length: count }, (_, i) => ({
      x: layerX[l],
      y: 18 + ((i + 0.5) * 124) / count,
    })),
  );

  return (
    <div className="h-full px-6 pt-6">
      <svg
        viewBox="0 0 300 160"
        className="h-full w-full"
        role="img"
        aria-label="A neural network passing a signal forward">
        {/* connections */}
        {pos.slice(0, -1).flatMap((from, l) =>
          from.flatMap((a, i) =>
            pos[l + 1].map((b, j) => (
              <motion.line
                key={`e${l}-${i}-${j}`}
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
                stroke={color}
                strokeWidth={1.2}
                initial={false}
                animate={{
                  opacity: live ? [0.12, 0.12, 0.85, 0.12, 0.12] : 0.22,
                }}
                transition={
                  live
                    ? {
                        duration: T,
                        times: times(0.28 + l * 0.2),
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }
                    : { duration: 0.4 }
                }
              />
            )),
          ),
        )}

        {/* neurons: each layer lights up a beat after the one before */}
        {pos.map((col, l) =>
          col.map((n, i) => (
            <g key={`n${l}-${i}`}>
              <circle
                cx={n.x}
                cy={n.y}
                r={10}
                fill="#101010"
                stroke="rgba(255,255,255,0.35)"
                strokeWidth={1.5}
              />
              <motion.circle
                cx={n.x}
                cy={n.y}
                r={6.5}
                fill={color}
                initial={false}
                animate={{
                  opacity: live ? [0.2, 0.2, 1, 0.2, 0.2] : 0.55,
                }}
                transition={
                  live
                    ? {
                        duration: T,
                        times: times(0.18 + l * 0.2),
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }
                    : { duration: 0.4 }
                }
              />
            </g>
          )),
        )}

        {[
          { t: 'INPUT', x: layerX[0] },
          { t: 'HIDDEN', x: (layerX[1] + layerX[2]) / 2 },
          { t: 'OUTPUT', x: layerX[3] },
        ].map(({ t, x }) => (
          <text
            key={t}
            x={x}
            y={156}
            fontSize={8}
            fontWeight={600}
            letterSpacing={1.6}
            textAnchor="middle"
            fill="rgba(255,255,255,0.4)">
            {t}
          </text>
        ))}
      </svg>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* AGENTIC AI BOOTCAMP: the think / act / observe loop                 */
/* ------------------------------------------------------------------ */
const loopNodes = [
  { label: 'THINK', hint: 'plan the next step', x: 150, y: 28, w: 78 },
  { label: 'ACT', hint: 'call a tool', x: 246, y: 138, w: 62 },
  { label: 'OBSERVE', hint: 'read the result', x: 54, y: 138, w: 92 },
];

export function LoopPreview({ color }: { color: string }) {
  const reduce = useReducedMotion();
  const live = usePlaying() && !reduce;
  const [active, setActive] = useState(0);

  useEffect(() => {
    setActive(0);
    if (!live) return;
    const id = setInterval(() => setActive((a) => (a + 1) % 3), 1500);
    return () => clearInterval(id);
  }, [live]);

  const target = loopNodes[active];

  return (
    <div className="h-full px-6 pt-6">
      <svg
        viewBox="0 0 300 170"
        className="h-full w-full"
        role="img"
        aria-label="An agent looping through think, act and observe">
        {/* the loop */}
        {loopNodes.map((n, i) => {
          const m = loopNodes[(i + 1) % 3];
          return (
            <line
              key={n.label}
              x1={n.x}
              y1={n.y}
              x2={m.x}
              y2={m.y}
              stroke="rgba(255,255,255,0.2)"
              strokeWidth={1.5}
              strokeDasharray="4 5"
            />
          );
        })}

        {/* the token travelling between steps (passes under the pills) */}
        <motion.circle
          r={6}
          fill="white"
          initial={{ cx: loopNodes[0].x, cy: loopNodes[0].y }}
          animate={{ cx: target.x, cy: target.y }}
          transition={{ duration: 1.1, ease: 'easeInOut' }}
        />

        {/* center caption */}
        <text
          x={150}
          y={86}
          fontSize={9}
          fontWeight={700}
          letterSpacing={2}
          textAnchor="middle"
          fill={color}>
          AGENT LOOP
        </text>
        <AnimatePresence mode="wait">
          <motion.text
            key={active}
            x={150}
            y={106}
            fontSize={12}
            textAnchor="middle"
            fill="rgba(255,255,255,0.75)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}>
            {loopNodes[active].hint}
          </motion.text>
        </AnimatePresence>

        {/* the three steps */}
        {loopNodes.map((n, i) => {
          const on = i === active;
          return (
            <g key={n.label}>
              <rect
                x={n.x - n.w / 2}
                y={n.y - 14}
                width={n.w}
                height={28}
                rx={14}
                strokeWidth={1.4}
                style={{
                  fill: on ? color : '#101010',
                  stroke: on ? color : 'rgba(255,255,255,0.4)',
                  transition: 'fill 0.3s, stroke 0.3s',
                }}
              />
              <text
                x={n.x}
                y={n.y + 4}
                fontSize={11}
                fontWeight={700}
                letterSpacing={1.4}
                textAnchor="middle"
                style={{
                  fill: on ? '#101010' : '#ffffff',
                  transition: 'fill 0.3s',
                }}>
                {n.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* AGENTIC AI HACKATHON: live leaderboard of agent-building teams      */
/* ------------------------------------------------------------------ */
const teams = ['AutoPilot', 'ToolSmith', 'MemoryLane', 'SwarmOps'];
const startScores = [20, 12, 26, 8];

export function LeaderboardPreview({ color }: { color: string }) {
  const reduce = useReducedMotion();
  const live = usePlaying() && !reduce;
  const [scores, setScores] = useState(startScores);

  useEffect(() => {
    setScores(startScores);
    if (!live) return;
    const id = setInterval(() => {
      setScores((prev) => {
        const next = prev.map((s) => s + 3 + Math.floor(Math.random() * 14));
        return next.some((s) => s >= 100) ? startScores : next;
      });
    }, 1400);
    return () => clearInterval(id);
  }, [live]);

  const ranked = teams
    .map((name, i) => ({ name, score: scores[i] }))
    .sort((a, b) => b.score - a.score);

  return (
    <div className="h-full px-6 pt-6">
      <div className="mb-3 flex items-center justify-between px-1">
        <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/40">
          Agent build-off
        </p>
        <span
          className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest"
          style={{ color }}>
          <motion.span
            className="h-1.5 w-1.5 rounded-full"
            style={{ background: color }}
            animate={live ? { opacity: [1, 0.2, 1] } : { opacity: 1 }}
            transition={
              live ? { duration: 1.2, repeat: Infinity } : { duration: 0.2 }
            }
          />
          Live
        </span>
      </div>

      <div className="flex flex-col gap-2">
        {ranked.map((t, pos) => (
          <motion.div
            key={t.name}
            layout
            transition={{ type: 'spring', stiffness: 380, damping: 32 }}
            className="flex items-center gap-3 rounded-xl bg-white/5 px-3 py-2">
            <span
              className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold"
              style={{
                background: pos === 0 ? color : 'rgba(255,255,255,0.1)',
                color: pos === 0 ? '#101010' : 'rgba(255,255,255,0.7)',
              }}>
              {pos + 1}
            </span>
            <span className="w-24 shrink-0 truncate text-left text-sm font-semibold text-white">
              {t.name}
            </span>
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full rounded-full"
                style={{ background: color }}
                initial={false}
                animate={{ width: `${Math.min(100, t.score)}%` }}
                transition={{ duration: 0.9, ease }}
              />
            </div>
            <span className="w-8 shrink-0 text-right text-xs tabular-nums text-white/50">
              {t.score}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Picks the right animation for an event from its title               */
/* ------------------------------------------------------------------ */
export function pickPreview(title: string, color: string) {
  const t = title.toLowerCase();

  if (/wrapped/.test(t)) return <WrappedPreview color={color} />;
  if (/\b(ml|machine learning|neural|deep learning)\b/.test(t))
    return <NeuralPreview color={color} />;
  if (/agent/.test(t))
    return /hack/.test(t) ? (
      <LeaderboardPreview color={color} />
    ) : (
      <LoopPreview color={color} />
    );
  if (/hack/.test(t)) return <CountdownPreview color={color} />;
  if (/data/.test(t)) return <BarsPreview color={color} />;
  if (/workshop|bootcamp|python|sql/.test(t))
    return <CodePreview color={color} />;

  return (
    <StepsPreview
      items={['Sign up', 'Show up', 'Build something']}
      color={color}
    />
  );
}
