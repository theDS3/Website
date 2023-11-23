import Upcoming from '@/components/Upcoming';
import AboutUs from '@/components/AboutUs';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <AboutUs />
      <Upcoming />
    </main>
  );
}
