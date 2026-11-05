'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import EventCard from '@/components/v2/EventCard';
import { pickPreview } from '@/components/v2/EventPreviews';
import { brand } from '@/utils/brand';

type Status = 'current' | 'past';

type EventItem = {
  title: string;
  text: string;
  tag: string;
  href: string;
  color: string;
};

const events: Record<Status, EventItem[]> = {
  current: [
    {
      title: 'Build Your Own Wrapped',
      text: 'Turn your own data into a personal year-in-review.',
      tag: 'workshop',
      href: '/events/build-your-own-wrapped',
      color: brand.pink,
    },
    {
      title: 'Machine Learning Bootcamp',
      text: 'A hands-on introduction to building and evaluating ML models.',
      tag: 'bootcamp',
      href: '/events/machine-learning-bootcamp',
      color: brand.purple,
    },
  ],
  past: [
    {
      title: 'Agentic AI Bootcamp',
      text: 'Hands-on sessions on building with AI agents.',
      tag: 'bootcamp',
      href: '/events/agentic-ai-bootcamp',
      color: brand.green,
    },
    {
      title: 'Agentic AI Hackathon',
      text: 'Work in a team, build something in a weekend, and show it off.',
      tag: 'hackathon',
      href: '/events/agentic-ai-hackathon',
      color: brand.purple,
    },
  ],
};

const filters: { key: Status; label: string }[] = [
  { key: 'current', label: 'Current events' },
  { key: 'past', label: 'Past events' },
];

export default function EventsFilter({
  initial = 'current',
}: {
  initial?: Status;
}) {
  const [filter, setFilter] = useState<Status>(initial);

  return (
    <>
      <div className="mt-12 flex flex-wrap justify-center gap-3">
        {filters.map(({ key, label }) => {
          const on = filter === key;
          return (
            <button
              key={key}
              type="button"
              onClick={() => setFilter(key)}
              aria-pressed={on}
              className={`rounded-full border px-5 py-2 text-sm font-semibold transition-colors duration-200 ${
                on
                  ? 'border-white bg-white text-[#101010]'
                  : 'border-white/30 text-white/80 hover:border-white/60 hover:text-white'
              }`}>
              {label}
            </button>
          );
        })}
      </div>

      {/* key remounts the grid so the fade-in replays when you switch filters */}
      <motion.div
        key={filter}
        className="mx-auto mt-16 grid w-full max-w-4xl gap-3 md:grid-cols-2"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}>
        {events[filter].map((c) => (
          <EventCard
            key={c.title}
            kicker={c.title}
            text={c.text}
            cta="Explore"
            href={c.href}
            accent={c.color}
            preview={pickPreview(c.title, c.color)}
          />
        ))}
      </motion.div>
    </>
  );
}
