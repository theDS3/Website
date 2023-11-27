import Hero from '@/components/Hero';

import AboutUs from '@/components/Main/AboutUs';
import Executives from '@/components/Main/Executives';
import Sponsor from '@/components/Main/Sponsors';
import Upcoming from '@/components/Main/Upcoming';

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <Sponsor />
      <Executives />
      <Upcoming />
    </main>
  );
}
