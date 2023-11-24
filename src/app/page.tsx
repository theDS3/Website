import AboutUs from '@/components/AboutUs';
import Hero from '@/components/Hero';
import Team from '@/components/Team';
import Upcoming from '@/components/Upcoming';

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <Team />
      <Upcoming />
    </main>
  );
}
