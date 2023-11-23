import Upcoming from '@/components/Upcoming';
import Team from '@/components/Team';
import AboutUs from '@/components/AboutUs';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <AboutUs />
      <Team />
      <Upcoming />
    </main>
  );
}
