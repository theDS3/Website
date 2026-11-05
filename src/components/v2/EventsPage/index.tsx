'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Libre_Baskerville } from 'next/font/google';
import { AnimatePresence, motion } from 'framer-motion';
import {
  FaCalendarAlt,
  FaClock,
  FaImage,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import BlobTitle from '@/components/v2/BlobTitle';
import { brand } from '@/utils/brand';
import type { EventData } from '@/utils/events';

const baskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const palette = [brand.purple, brand.pink, brand.green];

// A soft tint of a color over the page's dark base (works for any CSS color)
const tint = (c: string) =>
  `linear-gradient(135deg, color-mix(in srgb, ${c} 38%, #101010), #1a0b2e)`;

function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}

function Heading({ color, children }: { color: string; children: string }) {
  return (
    <>
      <span
        className="mx-auto mb-4 block h-1.5 w-12 rounded-full"
        style={{ background: color }}
      />
      <h2
        className={`${baskerville.className} text-4xl font-bold text-white sm:text-5xl`}>
        {children}
      </h2>
    </>
  );
}

function Faq({ items }: { items: EventData['faqs'] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto mt-10 flex max-w-3xl flex-col gap-3 text-left">
      {items.map((f, i) => {
        const on = open === i;
        return (
          <div
            key={f.question}
            className="rounded-2xl border border-white/10 bg-white/[0.04]">
            <button
              type="button"
              onClick={() => setOpen(on ? null : i)}
              aria-expanded={on}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-lg font-semibold text-white">
              {f.question}
              <span
                className={`text-2xl leading-none transition-transform duration-200 ${on ? 'rotate-45' : ''}`}>
                +
              </span>
            </button>
            <AnimatePresence initial={false}>
              {on && (
                <motion.div
                  key="answer"
                  className="overflow-hidden"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}>
                  <p className="px-6 pb-5 text-base leading-relaxed text-white/70">
                    {f.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

export default function EventPage({ event }: { event: EventData }) {
  const info = [
    {
      label: 'Date',
      value: event.date,
      icon: <FaCalendarAlt />,
      color: brand.purple,
    },
    { label: 'Time', value: event.time, icon: <FaClock />, color: brand.pink },
    {
      label: 'Location',
      value: event.location,
      icon: <FaMapMarkerAlt />,
      color: brand.green,
    },
  ];

  return (
    <div className="mx-auto max-w-5xl px-6 pb-28 pt-32 text-center">
      {/* Header */}
      <div className="flex flex-col items-center">
        <Link
          href={`/events?show=${event.status}`}
          className="mb-8 text-sm text-white/60 transition-colors hover:text-white">
          ← All {event.status} events
        </Link>

        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1 text-[11px] uppercase tracking-widest text-white/60">
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ background: event.color }}
          />
          {event.status === 'current' ? 'Current event' : 'Past event'}
        </p>

        <BlobTitle color={event.color}>{event.title}</BlobTitle>

        <p className="mt-10 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl">
          {event.tagline}
        </p>
      </div>

      {/* Date, time, location */}
      <div className="mt-16 grid gap-6 text-left sm:grid-cols-3">
        {info.map(({ label, value, icon, color }, i) => (
          <Reveal
            key={label}
            delay={i * 0.1}>
            <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-transform duration-300 hover:-translate-y-1">
              <span
                className="mb-4 flex h-10 w-10 items-center justify-center rounded-full text-lg"
                style={{
                  color,
                  background: `color-mix(in srgb, ${color} 18%, transparent)`,
                }}>
                {icon}
              </span>
              <p className="text-[11px] uppercase tracking-widest text-white/50">
                {label}
              </p>
              <p className="mt-1 text-lg font-semibold text-white">{value}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* About */}
      <Reveal className="mt-24">
        <Heading color={brand.purple}>About the event</Heading>
        <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-white/80 sm:text-xl">
          {event.about}
        </p>
      </Reveal>

      {/* Highlights */}
      <section className="mt-24">
        <Reveal>
          <Heading color={brand.pink}>Highlights</Heading>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
          {event.highlights.map((caption, i) => (
            <Reveal
              key={i}
              delay={(i % 3) * 0.08}>
              <div
                className="relative flex aspect-[4/3] flex-col items-center justify-center gap-2 overflow-hidden rounded-2xl border border-white/10 text-white/60"
                style={{ background: tint(palette[i % palette.length]) }}>
                <FaImage className="text-2xl" />
                <span className="text-xs uppercase tracking-widest">
                  {caption}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Project showcase */}
      <section className="mt-24">
        <Reveal>
          <Heading color={brand.green}>Project showcase</Heading>
        </Reveal>
        <div className="mt-10 grid gap-6 text-left sm:grid-cols-3">
          {event.showcase.map((p, i) => {
            const c = palette[i % palette.length];
            return (
              <Reveal
                key={i}
                delay={i * 0.12}>
                <div className="h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] transition-transform duration-300 hover:-translate-y-1">
                  <div
                    className="flex aspect-video items-center justify-center text-white/50"
                    style={{ background: tint(c) }}>
                    <FaImage className="text-2xl" />
                  </div>
                  <div className="p-6">
                    <h3
                      className="text-xl font-bold"
                      style={{ color: c }}>
                      {p.title}
                    </h3>
                    <p className="mt-1 text-xs uppercase tracking-widest text-white/50">
                      {p.team}
                    </p>
                    <p className="mt-3 text-base leading-relaxed text-white/70">
                      {p.text}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/70">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-24">
        <Reveal>
          <Heading color={event.color}>FAQ</Heading>
        </Reveal>
        <Faq items={event.faqs} />
      </section>

      {/* Call to action */}
      <Reveal className="mt-24">
        <p className="text-lg text-white/70">
          {event.status === 'current'
            ? 'Want to hear first when details drop?'
            : 'Missed this one? Catch the next event.'}
        </p>
        <Link
          href={event.status === 'current' ? '/join' : '/events?show=current'}
          className="mt-6 inline-block rounded-full border border-white/40 px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#101010]">
          {event.status === 'current'
            ? 'Join the mailing list'
            : 'See current events'}
        </Link>
      </Reveal>
    </div>
  );
}
