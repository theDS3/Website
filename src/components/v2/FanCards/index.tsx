'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export type FanCardData = {
  title: string;
  text: string;
  tag: string;
  href: string;
  color: string;
};

const tilts = [-6, 2, 7];
const lifts = [0, -14, 0];

export default function FanCards({ cards }: { cards: FanCardData[] }) {
  return (
    <div className="flex flex-col items-center gap-6 md:flex-row md:justify-center md:gap-0">
      {cards.map((c, i) => (
        <motion.div
          key={c.title}
          className="relative h-80 w-64 shrink-0 rounded-3xl md:-mx-5"
          style={{ backgroundColor: c.color, zIndex: i === 1 ? 2 : 1 }}
          initial={{ opacity: 0, y: 80, rotate: 0 }}
          animate={{ opacity: 1, y: lifts[i % 3], rotate: tilts[i % 3] }}
          whileHover={{ y: -24, rotate: 0, scale: 1.04, zIndex: 10 }}
          transition={{
            delay: 0.15 * i,
            type: 'spring',
            stiffness: 120,
            damping: 14,
          }}>
          <Link
            href={c.href}
            className="flex h-full flex-col justify-between p-6 text-left text-[#101010]">
            <span className="self-end rounded-full border border-[#101010]/40 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-widest">
              {c.tag}
            </span>
            <div>
              <h3 className="text-3xl font-extrabold leading-tight">
                {c.title}
              </h3>
              <p className="mt-3 text-sm leading-snug opacity-80">{c.text}</p>
            </div>
            <span className="text-sm font-bold">Explore →</span>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
