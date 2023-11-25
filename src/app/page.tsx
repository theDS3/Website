import AboutUs from '@/components/AboutUs';
import Team from '@/components/Team';
import Upcoming from '@/components/Upcoming';
import Sponsor from '@/components/Sponsors';

export default function Home() {
  return (
    <main>
      <AboutUs />
      <Sponsor />
      <Team />
      <Upcoming />
    </main>
  );
}
