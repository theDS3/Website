import Sponsor from '@/components/Main/Sponsors';
import About from '@/components/v2/About';
import Hero from '@/components/v2/Hero';
import Intro from '@/components/v2/Intro';
import PageShell from '@/components/v2/PageShell';

export default function Home() {
  return (
    <PageShell navDelay={1.6}>
      <Intro />
      <main>
        <Hero />
        <About />
        <Sponsor />
      </main>
    </PageShell>
  );
}
