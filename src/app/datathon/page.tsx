import { Metadata } from 'next';

import CountdownTimer from '@/components/Datathon/CountdownTimer';
import NavBar, { type Link } from '@/components/Navabr';

import { datathonDate } from './data';
const links: Link[] = [
  { title: '2024 Leaderboard', href: '/datathon/leaderboard/past' },
];


export const metadata: Metadata = {
  title: `DS3 | ${datathonDate.getFullYear()} Datathon`,
  description: `The ${datathonDate.getFullYear()} Datathon ${datathonDate > new Date() ? 'is' : 'was'} held on ${datathonDate.toDateString()} at
    ${datathonDate.getHours()}:${datathonDate.getMinutes()}:${datathonDate.getSeconds()} EST.`,
};

export default function Datathon() {
  const currentDate = new Date();

  return (
    <>
      <NavBar links={links} />
      <main>
        {datathonDate > currentDate ? (
          <CountdownTimer date={datathonDate} />
        ) : (
          <div className="min-w-screen min-h-screen flex items-center justify-center px-5 py-5">
            <div className="text-white">
              <h1 className="text-7xl text-center mb-3">
                {datathonDate.getFullYear()} Datathon will here soon!
              </h1>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
