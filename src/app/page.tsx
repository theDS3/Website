import { Metadata } from 'next';

import Hero from '@/components/Hero';
import AboutUs from '@/components/Main/AboutUs';
import Executives from '@/components/Main/Executives';
import MainHero from '@/components/Main/Hero';
import Sponsor from '@/components/Main/Sponsors';
import NavBar, { type Link } from '@/components/Navabr';

const links: Link[] = [
  { title: 'About Us', href: '/#about-us' },
  { title: 'Sponsors', href: '/#sponsors' },
  { title: 'Team', href: '/#team' },
  { title: 'Highlights', href: '/highlights' },
  { title: 'Datathon', href: '/datathon' },
  { title: 'ML Program', href: '/ml-program' },
];

export default function Home() {
  return (
    <>
      <NavBar links={links} />
      <main>
        <Hero>
          <MainHero />
        </Hero>
        <AboutUs />
        <Sponsor />
        <Executives />
      </main>
    </>
  );
}
