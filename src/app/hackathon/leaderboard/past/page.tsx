import type { Metadata } from 'next';

import NavBar, { type Link } from '@/components/Navabr';
import PastFinalDatathonLeaderboardClient from '@/components/Datathon/PastFinalDatathonLeaderboardClient';

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
      <PastFinalDatathonLeaderboardClient />
    </>
  );
}
