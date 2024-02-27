import { Metadata } from 'next';

import Leaderboard from '@/components/Datathon/Leaderboard';
import NavBar, { type Link } from '@/components/Navabr';

import pastFinalDatathonLeaderboard from './data';

const links: Link[] = [
  { title: 'Home', href: '/' },
  { title: 'Datathon', href: '/datathon' },
];

export const metadata: Metadata = {
  title: 'DS3 | Past Final Leaderboard',
};

export default async function PastFinalDatathonLeaderboard() {
  const datathonStartDate = new Date('2024/01/14 07:00:00');
  const year = '2024';

  return (
    <>
      <NavBar links={links} />
      <main className="min-h-screen">
        <section className="flex flex-col items-center justify-center">
          <div className="container mx-auto my-8 text-white">
            <h1 className="text-4xl font-bold mb-4 text-center">
              {year} Final Datathon Leaderboard
            </h1>
            <Leaderboard
              leaderboard={pastFinalDatathonLeaderboard[year]}
              startDate={datathonStartDate}
              description="Final scores are based on the private leaderboard on Kaggle and bonus points from in-person events."
            />
          </div>
        </section>
      </main>
    </>
  );
}
