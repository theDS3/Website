import { Metadata } from 'next';

import DatathonHero from '@/components/Datathon/Hero';
import Hero from '@/components/Hero';
import NavBar, { type Link } from '@/components/Navabr';
import Sponsors from '@/components/Datathon/Sponsors';

const links: Link[] = [
  { title: 'About Us', href: '/datathon#about-us' },
  { title: 'Categories', href: '/datathon#categories' },
  { title: 'Sponsors', href: '/datathon#sponsors' },
];

export const metadata: Metadata = {
  title: 'DS3 | Datathon',
};

export default function Datathon() {
  return (
    <>
      <NavBar links={links} />
      <main>
        <Hero className="max-sm:justify-items-center">
          <DatathonHero />
        </Hero>
        <Sponsors />
      </main>
    </>
  );
}
