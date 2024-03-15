import { Metadata } from 'next';

import CountdownTimer from '@/components/Datathon/CountdownTimer';
import NavBar, { type Link } from '@/components/Navabr';

import { datathonStartDate, isDatathonWeek } from '@/app/datathon/data';

const links: Link[] = [
  { title: '2024 Leaderboard', href: '/datathon/leaderboard/past' },
];

export const metadata: Metadata = {
  title: `DS3 | ${datathonStartDate.getFullYear()} Datathon`,
  description: `The ${datathonStartDate.getFullYear()} Datathon ${datathonStartDate > new Date() ? 'is' : 'was'} held on ${datathonStartDate.toDateString()} at
    ${datathonStartDate.getHours()}:${datathonStartDate.getMinutes()}:${datathonStartDate.getSeconds()} EST.`,
};

export default function Datathon() {
  return (
    <>
      <NavBar links={links} />
      <main>
        {!isDatathonWeek() ? (
          <CountdownTimer date={datathonStartDate} />
        ) : (
          <div className="min-w-screen min-h-screen flex items-center justify-center px-5 py-5">
            <div className="text-white">
              <h1 className="text-7xl text-center mb-3">
                {datathonStartDate.getFullYear()} Datathon will here soon!
              </h1>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
