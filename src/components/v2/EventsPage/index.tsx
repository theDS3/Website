'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import {
  FaCalendarAlt,
  FaClock,
  FaImage,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import BlobTitle from '@/components/v2/BlobTitle';
import { pickPreview } from '@/components/v2/EventPreviews';
import type { LeaderboardContent } from '@/db/models/leaderboard';
import { brand } from '@/utils/brand';
import { pastFinalDatathonLeaderboard } from '@/utils/datathon';
import type { EventData } from '@/utils/events';
import { instrumentSerif } from '@/utils/fonts';

const palette = [brand.purple, brand.pink, brand.green];

// A soft tint of a color over the page's dark base (works for any CSS color)
const tint = (c: string) =>
  `linear-gradient(135deg, color-mix(in srgb, ${c} 38%, #101010), #1a0b2e)`;

// Placeholder links like 'PASTE-SLIDES-URL' count as "not ready yet"
const isLink = (u?: string | null): u is string =>
  !!u && !u.startsWith('PASTE-');

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
        className={`${instrumentSerif.className} text-4xl font-normal text-white sm:text-5xl`}>
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

type Standing = LeaderboardContent['standings'][number];

function Leaderboard({ color }: { color: string }) {
  const boards = pastFinalDatathonLeaderboard as Record<
    string,
    LeaderboardContent
  >;

  // Newest year first. Adding a new year to datathon.ts adds a tab automatically.
  const years = Object.keys(boards).sort((a, b) => Number(b) - Number(a));
  const [year, setYear] = useState(years[0]);
  const [all, setAll] = useState(false);

  const rows: Standing[] = boards[year].standings;
  const shown = all ? rows : rows.slice(0, 10);

  return (
    <div className="mx-auto mt-10 max-w-3xl">
      {/* Year tabs */}
      <div className="flex flex-wrap justify-center gap-2">
        {years.map((y) => {
          const on = y === year;
          return (
            <button
              key={y}
              type="button"
              aria-pressed={on}
              onClick={() => {
                setYear(y);
                setAll(false);
              }}
              className={`rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors ${
                on
                  ? 'border-white bg-white text-[#101010]'
                  : 'border-white/30 text-white/80 hover:border-white/60 hover:text-white'
              }`}>
              {y}
            </button>
          );
        })}
      </div>

      {/* Standings */}
      <div className="mt-8 flex flex-col gap-2 text-left">
        {shown.map((r, i) => {
          const up = r.delta.startsWith('+');
          const down = /^-\d/.test(r.delta);
          return (
            <Reveal
              key={`${year}-${r.name}-${i}`}
              delay={Math.min(i, 6) * 0.05}>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 sm:gap-4 sm:px-5">
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold"
                  style={{
                    background: i === 0 ? color : 'rgba(255,255,255,0.1)',
                    color: i === 0 ? '#101010' : 'rgba(255,255,255,0.7)',
                  }}>
                  {i + 1}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate font-semibold text-white">{r.name}</p>
                  <p className="text-xs text-white/50">{r.attempts} attempts</p>
                </div>
                <span
                  className="w-10 shrink-0 text-right text-xs font-semibold tabular-nums"
                  style={{
                    color: up
                      ? brand.green
                      : down
                        ? brand.pink
                        : 'rgba(255,255,255,0.35)',
                  }}>
                  {up ? '▲' : down ? '▼' : '–'}
                  {r.delta.replace(/^[+-]/, '')}
                </span>
                <span
                  className="w-20 shrink-0 text-right text-lg font-bold tabular-nums"
                  style={{ color }}>
                  {(r.finalScore ?? 0).toFixed(2)}
                </span>
              </div>
            </Reveal>
          );
        })}
      </div>

      {rows.length > 10 && (
        <button
          type="button"
          onClick={() => setAll((v) => !v)}
          className="mt-6 rounded-full border border-white/40 px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#101010]">
          {all ? 'Show top 10' : `Show all ${rows.length} teams`}
        </button>
      )}
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

        {/* Animated preview that matches the event */}
        <Reveal
          delay={0.1}
          className="mt-12 w-full max-w-md">
          <div
            className="h-64 overflow-hidden rounded-3xl bg-black ring-1 ring-white/10"
            style={{ boxShadow: `0 0 60px -20px ${event.color}` }}>
            {pickPreview(event.title, event.color)}
          </div>
        </Reveal>
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

      {/* Session content (bootcamps): date, title, slides and notebook links */}
      {event.content && event.content.length > 0 && (
        <section className="mt-24">
          <Reveal>
            <Heading color={brand.green}>Session content</Heading>
          </Reveal>
          <div className="mx-auto mt-10 flex max-w-3xl flex-col gap-3 text-left">
            {event.content.map((s, i) => {
              // null hides a link, anything not ready yet shows "soon"
              const links = [
                { label: 'Slides', url: s.slides },
                { label: 'Notebook', url: s.notebook },
              ].filter((l) => l.url !== null);

              return (
                <Reveal
                  key={s.title}
                  delay={Math.min(i, 6) * 0.05}>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4">
                    <span className="w-16 shrink-0 text-sm tabular-nums text-white/50">
                      {s.date}
                    </span>
                    <p className="min-w-0 flex-1 font-semibold text-white">
                      {s.title}
                    </p>
                    <div className="flex gap-2">
                      {links.map(({ label, url }) =>
                        isLink(url) ? (
                          <a
                            key={label}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full border border-white/30 px-3 py-1 text-xs font-semibold text-white transition-colors hover:bg-white hover:text-[#101010]">
                            {label}
                          </a>
                        ) : (
                          <span
                            key={label}
                            className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/35">
                            {label} soon
                          </span>
                        ),
                      )}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </section>
      )}

      {/* Highlights */}
      <section className="mt-24">
        <Reveal>
          <Heading color={brand.pink}>Highlights</Heading>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
          {event.photos?.length
            ? event.photos.map((photo, i) => (
                <Reveal
                  key={i}
                  delay={(i % 3) * 0.08}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
                    <Image
                      src={photo}
                      alt={`${event.title} highlight ${i + 1}`}
                      fill
                      placeholder="blur"
                      sizes="(min-width: 768px) 33vw, 50vw"
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </Reveal>
              ))
            : event.highlights.map((caption, i) => (
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

      {/* Project showcase (hidden when an event has none) */}
      {event.showcase.length > 0 && (
        <section className="mt-24">
          <Reveal>
            <Heading color={brand.green}>Project showcase</Heading>
          </Reveal>
          <div className="mt-10 grid gap-6 text-left sm:grid-cols-3">
            {event.showcase.map((p, i) => {
              const c = palette[i % palette.length];
              const photo = p.photos?.[0];
              return (
                <Reveal
                  key={i}
                  delay={i * 0.12}>
                  <div className="h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] transition-transform duration-300 hover:-translate-y-1">
                    <div
                      className="relative aspect-video overflow-hidden"
                      style={photo ? undefined : { background: tint(c) }}>
                      {photo ? (
                        <Image
                          src={photo}
                          alt={`${p.title} by ${p.team}`}
                          fill
                          placeholder="blur"
                          sizes="(min-width: 640px) 33vw, 100vw"
                          className="object-cover"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center text-white/50">
                          <FaImage className="text-2xl" />
                        </div>
                      )}
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
      )}

      {/* Leaderboard (hackathon / datathon events) */}
      {/hack|datathon/i.test(event.title) && (
        <section className="mt-24">
          <Reveal>
            <Heading color={brand.pink}>Leaderboard</Heading>
          </Reveal>
          <Leaderboard color={event.color} />
        </section>
      )}

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
