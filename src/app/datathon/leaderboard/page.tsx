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
  title: 'DS3 | Public Leaderboard',
  description: `${datathonStartDate.getFullYear()} Public Datathon Leaderboard`,
};

export const revalidate = 60;
export default async function PublicDatathonLeaderboard() {
  const leaderboard = await getLeaderboardData();

  return (
    <>
      <NavBar links={links} />
      <main className="min-h-screen">
        <section className="flex flex-col items-center justify-center">
          <div className="container mx-auto my-8 text-white">
            <h1 className="text-4xl font-bold mb-4 text-center">
              {datathonStartDate.getFullYear()} Datathon Public Leaderboard
            </h1>
            <Leaderboard
              leaderboard={leaderboard}
              description="Scores based on the public leaderboard on Kaggle."
            />
          </div>
        </section>
      </main>
    </>
  );
}
