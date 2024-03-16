import { Metadata } from 'next';

import Leaderboard from '@/components/Datathon/Leaderboard';
import NavBar, { type Link } from '@/components/Navabr';
import { getLeaderboardData } from '@/db/utils';

import { datathonStartDate } from '@/app/datathon/data';

const links: Link[] = [
  { title: 'Home', href: '/' },
  { title: 'Datathon', href: '/datathon' },
];

export const metadata: Metadata = {
  title: 'DS3 | Final Leaderboard',
  description: `${datathonStartDate.getFullYear()} Final Datathon Leaderboard`,
};

export const revalidate = 60;
export default async function FinalDatathonLeaderboard() {
  const leaderboard = await getLeaderboardData('final');

  return (
    <>
      <NavBar links={links} />
      <main className="min-h-screen">
        <section className="flex flex-col items-center justify-center">
          <div className="container mx-auto my-8 text-white">
            <h1 className="text-4xl font-bold mb-4 text-center">
              {datathonStartDate.getFullYear()} Datathon Final Leaderboard
            </h1>
            <Leaderboard
              leaderboard={leaderboard}
              description="Final scores are based on the private leaderboard on Kaggle and bonus points from in-person events."
            />
          </div>
        </section>
      </main>
    </>
  );
}
