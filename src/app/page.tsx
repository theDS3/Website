import { Metadata } from 'next';

import Hero from '@/components/Hero';
import AboutUs from '@/components/Main/AboutUs';
import MainHero from '@/components/Main/Hero';
import Sponsor from '@/components/Main/Sponsors';
import NavBar from '@/components/Navbar';

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <Hero>
          <MainHero />
        </Hero>
        <AboutUs />
        <Sponsor />
      </main>
    </>
  );
}
