import { Metadata } from 'next';

import Leaderboard from '@/components/Datathon/Leaderboard';
import NavBar, { type Link } from '@/components/Navabr';
import { type ILeaderboard } from '@/db/models/leaderboard';
import { getLeaderboardData } from '@/db/utils';

const links: Link[] = [
  { title: 'Home', href: '/' },
  { title: 'Datathon', href: '/datathon' },
];

export const metadata: Metadata = {
  title: 'DS3 | Final Leaderboard',
  description: `${new Date().getFullYear()} Final Datathon Leaderboard`,
};

export const revalidate = 60;
export default async function FinalDatathonLeaderboard() {
  const leaderboard: ILeaderboard = await getLeaderboardData('final');

  const datathonStartDate = new Date('2024/01/14 07:00:00');

  return (
    <>
      <NavBar links={links} />
      <main className="min-h-screen">
        <section className="flex flex-col items-center justify-center">
          <div className="container mx-auto my-8 text-white">
            <h1 className="text-4xl font-bold mb-4 text-center">
              {new Date().getFullYear()} Datathon Final Leaderboard
            </h1>
            <Leaderboard
              leaderboard={leaderboard}
              startDate={datathonStartDate}
              description="Final scores are based on the private leaderboard on Kaggle and bonus points from in-person events."
            />
          </div>
        </section>
      </main>
    </>
  );
}
