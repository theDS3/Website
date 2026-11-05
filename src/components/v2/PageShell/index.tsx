import { Poppins } from 'next/font/google';
import Footer from '@/components/Footer';
import Halftone from '@/components/v2/Halftone';
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
      className={`${poppins.className} relative isolate min-h-screen bg-[#08030d] text-white`}>
      <Halftone />
      <Nav delay={navDelay} />
      {children}
      <Footer />
    </div>
  );
}
