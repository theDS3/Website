import Leaderboard from '@/components/Datathon/Leaderboard';
import NavBar, { type Link } from '@/components/Navabr';

import { pastFinalDatathonLeaderboard } from '@/utils/datathon';

const links: Link[] = [
  { title: 'Home', href: '/' },
  { title: 'Datathon', href: '/datathon' },
];

export default function PastFinalDatathonLeaderboard() {
  return (
    <>
      <NavBar links={links} />
      <main className="min-h-screen">
        <section className="flex flex-col items-center justify-center">
          <div className="container mx-auto my-8 text-white">
            <h1 className="text-4xl font-bold mb-4 text-center">
              Past Final Datathon Leaderboard
            </h1>
            <Leaderboard
              leaderboard={pastFinalDatathonLeaderboard['2024']}
              description="Final scores are based on the private leaderboard on Kaggle and bonus points from in-person events."
            />
          </div>
        </section>
      </main>
    </>
  );
}
