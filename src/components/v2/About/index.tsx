'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Libre_Baskerville } from 'next/font/google';
import { motion } from 'framer-motion';
import { brand } from '@/utils/brand';
import teamPhoto from '@/public/Main/team27.png';

const baskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const heading = 'We are DS3';
const palette = [brand.purple, brand.pink, brand.green, '#ffb020', '#5eb0ff'];

const cards = [
  {
    title: 'Workshops',
    text: 'Learn by doing. Our sessions cover machine learning, LLMs, AI agents, and more. No prior experience required.',
    color: brand.purple,
    tilt: -2,
  },
  {
    title: 'Datathons & competitions',
    text: 'Work in a team on a real dataset, build something in a weekend, and show it off.',
    color: brand.pink,
    tilt: 1.5,
  },
  {
    title: 'Industry networking',
    text: 'Meet people working in data science, analytics, and ML, and get a feel for what the work and career paths look like.',
    color: brand.green,
    tilt: -1,
  },
];

function Hl({
  href,
  color,
  children,
}: {
  href: string;
  color: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="font-semibold underline decoration-2 underline-offset-4"
      style={{ color }}>
      {children}
    </Link>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-5xl scroll-mt-20 px-6 py-28">
      <motion.p
        className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1 text-[11px] uppercase tracking-widest text-white/60"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}>
        <span
          className="h-1.5 w-1.5 rounded-full"
          style={{ background: brand.green }}
        />
        University of Toronto Scarborough
      </motion.p>

      {/* Heading: every letter in its own color, rising in one by one */}
      <h2
        className={`${baskerville.className} text-6xl font-bold leading-tight sm:text-8xl`}
        aria-label={heading}>
        {Array.from(heading).map((ch, i) =>
          ch === ' ' ? (
            <span key={i}>&nbsp;</span>
          ) : (
            <motion.span
              key={i}
              aria-hidden
              className="inline-block"
              style={{ color: palette[i % palette.length] }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{
                delay: i * 0.05,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}>
              {ch}
            </motion.span>
          ),
        )}
      </h2>

      {/* Team photo */}
      <motion.div
        className="mt-10 overflow-hidden rounded-2xl border border-white/10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
        <Image
          src={teamPhoto}
          alt="The DS3 team"
          sizes="(min-width: 1024px) 960px, 100vw"
          className="h-auto w-full"
          placeholder="blur"
        />
      </motion.div>

      <motion.p
        className="mt-8 max-w-3xl text-xl leading-relaxed text-white/80 sm:text-2xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ delay: 0.3, duration: 0.6 }}>
        DS3 is the University of Toronto&rsquo;s student community for data
        science and statistics. We help students build real skills through
        hands-on workshops, industry connections, and competitions like our{' '}
        <Hl
          href="/hackathon"
          color="#ffb020">
          datathon
        </Hl>
        . Meet the{' '}
        <Hl
          href="/team"
          color={brand.green}>
          team
        </Hl>
        , or explore our{' '}
        <Hl
          href="/agentic-ai"
          color="#5eb0ff">
          Agentic AI program
        </Hl>
        .
      </motion.p>

      {/* Three tilted cards */}
      <div className="mt-16 grid gap-6 sm:grid-cols-3">
        {cards.map(({ title, text, color, tilt }, i) => (
          <motion.div
            key={title}
            className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
            initial={{ opacity: 0, y: 40, rotate: tilt }}
            whileInView={{ opacity: 1, y: 0, rotate: tilt }}
            whileHover={{ rotate: 0, y: -8 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{
              delay: i * 0.12,
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}>
            <span
              className="mb-4 block h-1.5 w-12 rounded-full"
              style={{ background: color }}
            />
            <h3
              className="text-xl font-bold"
              style={{ color }}>
              {title}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-white/70">
              {text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
