import BlobTitle from '@/components/v2/BlobTitle';
import FanCards from '@/components/v2/FanCards';
import PageShell from '@/components/v2/PageShell';
import { brand } from '@/utils/brand';

export const metadata = { title: 'Events | DS3' };

export default function EventsPage() {
  return (
    <PageShell>
      <main className="flex min-h-screen flex-col items-center px-6 pb-24 pt-32 text-center">
        <BlobTitle color={brand.purple}>Events</BlobTitle>

        <div className="mt-16">
          <FanCards
            cards={[
              {
                title: 'Hackathon',
                text: 'Work in a team, build something in a weekend, and show it off.',
                tag: 'event',
                href: '/hackathon',
                color: brand.purple,
              },
              {
                title: 'Agentic AI Program',
                text: 'Hands-on sessions on building with AI agents.',
                tag: 'program',
                href: '/agentic-ai',
                color: brand.pink,
              },
              {
                title: 'Volunteer',
                text: 'Help run DS3 events and join the team behind them.',
                tag: 'join',
                href: '/volunteer',
                color: brand.green,
              },
            ]}
          />
        </div>

        <p className="mt-16 max-w-xl text-lg text-white/70">
          Hackathons, programs and ways to get involved with DS3.
        </p>
      </main>
    </PageShell>
  );
}
