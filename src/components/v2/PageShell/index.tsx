import { Poppins } from 'next/font/google';
import Footer from '@/components/Footer';
import Nav from '@/components/v2/Nav';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

export default function PageShell({
  children,
  navDelay = 0,
}: {
  children: React.ReactNode;
  navDelay?: number;
}) {
  return (
    <div
      className={`${poppins.className} relative min-h-screen bg-[#101010] text-white`}
      style={{
        backgroundImage:
          'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
        backgroundSize: '48px 48px',
      }}>
      <Nav delay={navDelay} />
      {children}
      <Footer />
    </div>
  );
}
