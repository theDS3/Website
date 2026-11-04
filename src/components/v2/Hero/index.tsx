'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { MotionConfig, motion } from 'framer-motion';
import {
  FaBrain,
  FaChartBar,
  FaCode,
  FaDatabase,
  FaRobot,
} from 'react-icons/fa';
import { brand } from '@/utils/brand';

const START = 1.7; // seconds: waits for the purple intro to slide away
const JOIN_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSe2-hoS0EmTDOii6JXt3ljkfPo8nuz1EdHfSy71FQuTMJhnCw/viewform';

const letters = [
  { char: 'D', x: 265, color: brand.purple },
  { char: 'S', x: 500, color: brand.pink },
  { char: '3', x: 735, color: brand.green },
];

// cx/cy = label center, w = label width, path = the line, dot = where it lands on a letter
const tags = [
  {
    label: 'about',
    href: '/#about',
    cx: 95,
    cy: 150,
    w: 82,
    path: 'M136 150 H200 V300',
    dot: [200, 300],
    color: brand.purple,
  },
  {
    label: 'sponsors',
    href: '/#sponsors',
    cx: 410,
    cy: 110,
    w: 114,
    path: 'M467 110 H505 V233',
    dot: [505, 233],
    color: brand.pink,
  },
  {
    label: 'team',
    href: '/team',
    cx: 736,
    cy: 70,
    w: 72,
    path: 'M736 84 V233',
    dot: [736, 233],
    color: brand.green,
  },
  {
    label: 'hackathon',
    href: '/hackathon',
    cx: 880,
    cy: 190,
    w: 125,
    path: 'M817 190 H775 V300',
    dot: [775, 300],
    color: '#ffb020',
  },
  {
    label: 'agentic ai',
    href: '/agentic-ai',
    cx: 880,
    cy: 480,
    w: 135,
    path: 'M812 480 H760 V395',
    dot: [760, 395],
    color: '#5eb0ff',
  },
];

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
          {/* The big letters */}
          <g
            fontSize="300"
            fontWeight="800"
            textAnchor="middle">
            {letters.map(({ char, x, color }, i) => (
              <motion.g
                key={char}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: START + i * 0.12,
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}>
                <text
                  x={x}
                  y={430}
                  fill={color}>
                  {char}
                </text>
              </motion.g>
            ))}
          </g>

          {/* Labels + lines (hidden on phones, where chips are shown instead) */}
          <g className="hidden sm:inline">
            {tags.map(({ label, href, cx, cy, w, path, dot, color }, i) => {
              const on = active === label;
              const go = () => router.push(href);
              return (
                <motion.g
                  key={label}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: START + 0.9 + i * 0.12, duration: 0.4 }}
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
                      delay: START + 0.7 + i * 0.12,
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
          transition={{ delay: START + 1.4, duration: 0.6 }}>
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
          transition={{ delay: START + 1.6, duration: 0.6 }}>
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

        <motion.a
          href={JOIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 rounded-full border border-white/40 px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#101010]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: START + 1.8, duration: 0.6 }}>
          Join us
        </motion.a>
      </section>
    </MotionConfig>
  );
}
