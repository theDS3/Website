import { Metadata } from 'next';

import About from '@/components/Datathon/About';
import DatathonHero from '@/components/Datathon/Hero';
import Sponsors from '@/components/Datathon/Sponsors';
import Themes from '@/components/Datathon/Themes';
import Hero from '@/components/Hero';
import NavBar, { type Link } from '@/components/Navabr';

const links: Link[] = [
  { title: 'About Us', href: '/datathon#about-us' },
  { title: 'Themes', href: '/datathon#themes' },
  { title: 'Sponsors', href: '/datathon#sponsors' },
  { title: 'Leaderboard', href: '/datathon/leaderboard' },
];

export const metadata: Metadata = {
  title: 'DS3 | Datathon',
};

export default function Datathon() {
  return (
    <>
      <NavBar links={links} />
      <main>
        <Hero className="max-sm:justify-items-center min-[620px]:py-[30vh]">
          <DatathonHero />
        </Hero>
        <About />
        <Themes />
        <Sponsors />
      </main>
    </>
  );
}
