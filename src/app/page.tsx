import AboutUs from '../components/AboutUs';
import Team from '../components/Team/team';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <AboutUs />
      <Team />
    </main>
  );
}
