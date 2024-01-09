import { Metadata } from 'next';

import NavBar, { type Link } from '@/components/Navabr';
import Leaderboard from '@/components/Datathon/Leaderboard';

const links: Link[] = [
  { title: 'Home', href: '/' },
  { title: 'Datathon', href: '/datathon' },
];

export const metadata: Metadata = {
  title: 'DS3 | Datathon',
};

export default function Datathon() {
  return (
    <>
      <NavBar links={links} />
      <main>
        <Leaderboard />
      </main>
    </>
  );
}
