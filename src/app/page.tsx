import Hero from '@/components/Hero';
import MainHero from '@/components/Main/Hero';
import NavBar, { type Link } from '@/components/Navabr';

import AboutUs from '@/components/Main/AboutUs';
import Executives from '@/components/Main/Executives';
import Sponsor from '@/components/Main/Sponsors';
import Upcoming from '@/components/Main/Upcoming';

const links: Link[] = [
  { title: 'About Us', href: '/#about-us' },
  { title: 'Sponsors', href: '/#sponsors' },
  { title: 'Team', href: '/#team' },
  { title: 'Events', href: '/#events' },
  { title: 'Datathon', href: '/datathon' },
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
        <Upcoming />
      </main>
    </>
  );
}
