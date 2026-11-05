import Footer from '@/components/Footer';
import Halftone from '@/components/v2/Halftone';
import Nav from '@/components/v2/Nav';
import { parkinsans } from '@/utils/fonts';

export default function PageShell({
  children,
  navDelay = 0,
}: {
  children: React.ReactNode;
  navDelay?: number;
}) {
  return (
    <div
      className={`${parkinsans.className} relative isolate min-h-screen bg-[#08030d] text-white`}>
      <Halftone />
      <Nav delay={navDelay} />
      {children}
      <Footer />
    </div>
  );
}
