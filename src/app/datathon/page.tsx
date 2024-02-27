import { Metadata } from 'next';

import CountdownTimer from '@/components/Datathon/CountdownTimer';
import NavBar, { type Link } from '@/components/Navabr';

const links: Link[] = [
  { title: '2024 Leaderboard', href: '/datathon/leaderboard/past' },
];

const eventDate = new Date('Jan 17, 2025 9:00:00');

export const metadata: Metadata = {
  title: `DS3 | ${eventDate.getFullYear()} Datathon`,
  description: `The ${eventDate.getFullYear()} Datathon ${eventDate > new Date() ? 'is' : 'was'} held on ${eventDate.toDateString()} at
    ${eventDate.getHours()}:${eventDate.getMinutes()}:${eventDate.getSeconds()} EST.`,
};

export default function Datathon() {
  const currentDate = new Date();

  return (
    <>
      <NavBar links={links} />
      <main>
        {eventDate > currentDate ? (
          <CountdownTimer date={eventDate} />
        ) : (
          <div className="min-w-screen min-h-screen flex items-center justify-center px-5 py-5">
            <div className="text-white">
              <h1 className="text-7xl text-center mb-3">
                {eventDate.getFullYear()} Datathon will here soon!
              </h1>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
