import { Metadata } from 'next';

import Hero from '@/components/Hero';
import DatathonHero from '@/components/Hero/content/datathon';
import NavBar, { type Link } from '@/components/Navabr';

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
      </main>
    </>
  );
}
