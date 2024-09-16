import NavBar, { type Link } from '@/components/Navabr';
import About_ML from '@/components/ML/About';
import Outline from '@/components/ML/Outline';
import Content from '@/components/ML/Content';

const links: Link[] = [
  { title: 'Outline', href: '/ml#outline' },
  { title: 'Content', href: '/ml#content' },
  { title: 'Home', href: '/#intro' },
];

export default function MLPage() {
  return (
    <>
      <NavBar links={links} />
      <main>
        <About_ML />
        <Outline />
        <Content />
      </main>
    </>
  );
}
