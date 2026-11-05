import Sponsor from '@/components/Main/Sponsors';
import About from '@/components/v2/About';
import Hero from '@/components/v2/Hero';
import PageShell from '@/components/v2/PageShell';

export default function Home() {
  return (
    <PageShell>
      <main>
        <Hero />
        <About />
        <Sponsor />
      </main>
    </PageShell>
  );
}
