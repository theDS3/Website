'use client';

import { useState } from 'react';
import FanCards from '@/components/v2/FanCards';
import { brand } from '@/utils/brand';

type Status = 'current' | 'past';

const events = {
  current: [
    {
      title: 'Build Your Own Wrapped',
      text: 'Turn your own data into a personal year-in-review.',
      tag: 'workshop',
      href: '/events', // placeholder until this event has a page
      color: brand.pink,
    },
    {
      title: 'Machine Learning Bootcamp',
      text: 'A hands-on introduction to building and evaluating ML models.',
      tag: 'bootcamp',
      href: '/events', // placeholder until this event has a page
      color: brand.purple,
    },
  ],
  past: [
    {
      title: 'Agentic AI Bootcamp',
      text: 'Hands-on sessions on building with AI agents.',
      tag: 'bootcamp',
      href: '/agentic-ai',
      color: '#5eb0ff',
    },
    {
      title: 'Agentic AI Hackathon',
      text: 'Work in a team, build something in a weekend, and show it off.',
      tag: 'hackathon',
      href: '/hackathon',
      color: '#ffb020',
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

      <div className="mt-16">
        {/* key remounts the fan so its entrance animation replays on switch */}
        <FanCards
          key={filter}
          cards={events[filter]}
        />
      </div>
    </>
  );
}
