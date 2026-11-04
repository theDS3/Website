'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Libre_Baskerville } from 'next/font/google';
import { MotionConfig, motion } from 'framer-motion';
import {
  FaBrain,
  FaChartBar,
  FaCode,
  FaDatabase,
  FaRobot,
} from 'react-icons/fa';
import { brand } from '@/utils/brand';
import IsoLogo, { anchor, type GlyphKey } from './IsoLogo';

const baskerville = Libre_Baskerville({
  subsets: ['latin'],
  style: 'italic',
  weight: '400',
});

const START = 1.7; // seconds: waits for the purple intro to slide away
const STAGGER = 0.35;
const LOGO_DONE = START + 2 * STAGGER + 0.9;

// Where the 400x400 logo sits inside the 1000x540 hero SVG (cube center lands at x=500)
const OX = 180;
const OY = -40;
const SC = 1.6;

type Tag = {
  label: string;
  href: string;
  color: string;
  glyph: GlyphKey; // which letter the line lands on
  cell: [number, number]; // grid point on that letter (5x5, use .5 to land mid-cell)
  cx: number; // label center x (for 'v' tags it's taken from the dot)
  cy: number; // label center y (for 'h' tags it's taken from the dot, so the line is level)
  w: number; // label width
  dir: 'h' | 'v'; // h = straight horizontal line, v = straight vertical line
};

const tags: Tag[] = [
  {
    label: 'about',
    href: '/#about',
    color: brand.purple,
    glyph: 'D',
    cell: [0.5, 2.5],
    cx: 170,
    cy: 0,
    w: 82,
    dir: 'h',
  },
  {
    label: 'sponsors',
    href: '/#sponsors',
    color: brand.pink,
    glyph: 'S',
    cell: [0.5, 5.5],
    cx: 220,
    cy: 0,
    w: 114,
    dir: 'h',
  },
  {
    label: 'team',
    href: '/team',
    color: brand.green,
    glyph: 'S',
    cell: [2.5, 0.5],
    cx: 0,
    cy: 30,
    w: 72,
    dir: 'v',
  },
  {
    label: 'hackathon',
    href: '/hackathon',
    color: '#ffb020',
    glyph: 'S',
    cell: [4.5, 1.5],
    cx: 785,
    cy: 0,
    w: 125,
    dir: 'h',
  },
  {
    label: 'agentic ai',
    href: '/agentic-ai',
    color: '#5eb0ff',
    glyph: '3',
    cell: [3.5, 3.5],
    cx: 860,
    cy: 0,
    w: 135,
    dir: 'h',
  },
];

// Turn each tag into its drawn geometry (label position, line path, landing dot)
const placed = tags.map((t) => {
  const [lx, ly] = anchor(t.glyph, t.cell[0], t.cell[1]);
  const dot: [number, number] = [
    Math.round(OX + SC * lx),
    Math.round(OY + SC * ly),
  ];
  const cx = t.dir === 'v' ? dot[0] : t.cx;
  const cy = t.dir === 'v' ? t.cy : dot[1];
  const path =
    t.dir === 'v'
      ? `M${cx} ${cy + 14} V${dot[1]}`
      : `M${cx + (dot[0] > cx ? t.w / 2 : -t.w / 2)} ${cy} H${dot[0]}`;
  return { ...t, cx, cy, path, dot };
});

const dock = [
  { label: 'Workshops', icon: <FaCode />, color: brand.purple },
  { label: 'Statistics', icon: <FaChartBar />, color: '#ffb020' },
  { label: 'Datathons', icon: <FaDatabase />, color: brand.green },
  { label: 'Machine learning', icon: <FaBrain />, color: brand.pink },
  { label: 'AI agents', icon: <FaRobot />, color: '#5eb0ff' },
];

export default function Hero() {
  const router = useRouter();
  const [active, setActive] = useState<string | null>(null);

  return (
    <MotionConfig reducedMotion="user">
      <section className="flex min-h-screen flex-col items-center justify-center px-4 pb-12 pt-24 text-center">
        <svg
          viewBox="0 0 1000 540"
          className="w-full max-w-4xl"
          role="img"
          aria-label="DS3">
          {/* The isometric logo: S rises, then D, then 3 */}
          <g transform={`translate(${OX} ${OY}) scale(${SC})`}>
            <IsoLogo
              start={START}
              stagger={STAGGER}
            />
          </g>

          {/* Labels + lines (hidden on phones, where chips are shown instead) */}
          <g className="hidden sm:inline">
            {placed.map(({ label, href, cx, cy, w, path, dot, color }, i) => {
              const on = active === label;
              const go = () => router.push(href);
              return (
                <motion.g
                  key={label}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: LOGO_DONE + 0.3 + i * 0.12,
                    duration: 0.4,
                  }}
                  role="link"
                  tabIndex={0}
                  aria-label={label}
                  className="cursor-pointer outline-none"
                  onClick={go}
                  onKeyDown={(e) => e.key === 'Enter' && go()}
                  onMouseEnter={() => setActive(label)}
                  onMouseLeave={() => setActive(null)}
                  onFocus={() => setActive(label)}
                  onBlur={() => setActive(null)}>
                  <motion.path
                    d={path}
                    fill="none"
                    strokeWidth={on ? 2.5 : 1.5}
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{
                      delay: LOGO_DONE + 0.1 + i * 0.12,
                      duration: 0.8,
                      ease: 'easeInOut',
                    }}
                    className="transition-[stroke] duration-200"
                    style={{ stroke: on ? color : 'rgba(255,255,255,0.55)' }}
                  />
                  <circle
                    cx={dot[0]}
                    cy={dot[1]}
                    r={5}
                    className="transition-[fill] duration-200"
                    style={{ fill: on ? color : '#dddddd' }}
                  />
                  <rect
                    x={cx - w / 2}
                    y={cy - 14}
                    width={w}
                    height={28}
                    rx={14}
                    strokeWidth={1.2}
                    className="transition-[fill,stroke] duration-200"
                    style={{
                      fill: on ? color : '#101010',
                      stroke: on ? color : 'rgba(255,255,255,0.45)',
                    }}
                  />
                  <text
                    x={cx}
                    y={cy + 4}
                    fontSize="12"
                    fontWeight="600"
                    letterSpacing="1.4"
                    textAnchor="middle"
                    className="select-none transition-[fill] duration-200"
                    style={{ fill: on ? '#101010' : '#ffffff' }}>
                    {label.toUpperCase()}
                  </text>
                </motion.g>
              );
            })}
          </g>
        </svg>

        {/* Society name */}
        <motion.h1
          className={`${baskerville.className} -mt-2 text-2xl italic tracking-wide text-white sm:text-4xl`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: LOGO_DONE + 0.4, duration: 0.6 }}>
          Data Science and Statistics Society
        </motion.h1>

        {/* Phone version of the labels */}
        <div className="mt-2 flex flex-wrap justify-center gap-2 sm:hidden">
          {tags.map(({ label, href, color }) => (
            <Link
              key={label}
              href={href}
              className="rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-widest"
              style={{ borderColor: color, color }}>
              {label}
            </Link>
          ))}
        </div>

        {/* Tagline */}
        <motion.p
          className="mt-4 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: LOGO_DONE + 0.8, duration: 0.6 }}>
          A student community at the University of Toronto exploring{' '}
          <span style={{ color: brand.green }}>data science</span>,{' '}
          <span style={{ color: brand.purple }}>statistics</span> and{' '}
          <span style={{ color: brand.pink }}>machine learning</span>.
        </motion.p>

        {/* Icon dock */}
        <motion.div
          className="mt-8 inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-2"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: LOGO_DONE + 1.0, duration: 0.6 }}>
          {dock.map(({ label, icon, color }) => (
            <span
              key={label}
              className="group relative">
              <button
                type="button"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full text-lg transition-transform duration-200 hover:scale-125"
                style={{ color }}>
                {icon}
              </button>
              <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-white/10 px-2 py-1 text-[11px] text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                {label}
              </span>
            </span>
          ))}
        </motion.div>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: LOGO_DONE + 1.2, duration: 0.6 }}>
          <Link
            href="/join"
            className="inline-block rounded-full border border-white/40 px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#101010]">
            Join us
          </Link>
        </motion.div>
      </section>
    </MotionConfig>
  );
}
