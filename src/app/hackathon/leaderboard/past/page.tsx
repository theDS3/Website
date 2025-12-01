import { Metadata } from 'next';

import Leaderboard from '@/components/Datathon/Leaderboard';
import NavBar, { type Link } from '@/components/Navabr';

import { pastFinalDatathonLeaderboard } from '@/utils/datathon';

const links: Link[] = [
  { title: 'Home', href: '/' },
  { title: 'Hackathon', href: '/hackathon' },
];

export const metadata: Metadata = {
  title: 'DS3 | Past Leaderboard',
  description: 'Past Datathon Leaderboard',
};

export default function PastFinalDatathonLeaderboard() {
  return (
    <>
      <NavBar links={links} />
      <main className="min-h-screen">
        <section className="flex flex-col items-center justify-center">
          <div className="container mx-auto my-8 py-10 text-white">
            <h1 className="text-5xl font-bold mb-5 text-center">
              Past Final Datathon Leaderboards
            </h1>
            <div className="my-12">
              <h2 className="text-3xl font-bold my-2 py-3 text-center">
                2025 Datathon Leaderboard
              </h2>
              <Leaderboard
                leaderboard={pastFinalDatathonLeaderboard['2025']}
                description="Final scores are based on the private leaderboard on Kaggle and bonus points from in-person events."
              />
            </div>
            <div className="mt-16">
              <h2 className="text-3xl font-bold my-2 py-3 text-center">
                2024 Datathon Leaderboard
              </h2>
              <Leaderboard
                leaderboard={pastFinalDatathonLeaderboard['2024']}
                description="Final scores are based on the private leaderboard on Kaggle and bonus points from in-person events."
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
