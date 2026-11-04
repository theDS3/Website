import { Poppins } from 'next/font/google';
import Footer from '@/components/Footer';
import Sponsor from '@/components/Main/Sponsors';
import About from '@/components/v2/About';
import Hero from '@/components/v2/Hero';
import Intro from '@/components/v2/Intro';
import Nav from '@/components/v2/Nav';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

export default function Home() {
  return (
    <div
      className={`${poppins.className} relative min-h-screen bg-[#101010] text-white`}
      style={{
        backgroundImage:
          'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
        backgroundSize: '48px 48px',
      }}>
      <Intro />
      <Nav />
      <main>
        <Hero />
        <About />
        <Sponsor />
      </main>
      <Footer />
    </div>
  );
}
