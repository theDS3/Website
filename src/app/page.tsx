import AboutUs from '@/components/AboutUs';
import Hero from '@/components/Hero';
import Team from '@/components/Team';
import Upcoming from '@/components/Upcoming';
import Sponsor from '@/components/Sponsors';
import About_Datathon from '@/components/About_Datathon';

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <Sponsor />
      <Team />
      <Upcoming />
      <About_Datathon />
    </main>
  );
}
