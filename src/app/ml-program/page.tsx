import NavBar, { type Link } from '@/components/Navabr';
import About_ML from '@/components/ML/About';
import Outline from '@/components/ML/Outline';
import Content from '@/components/ML/Content';

const links: Link[] = [
  { title: 'Home', href: '/#intro' },
  { title: 'Outline', href: '/ml-program#outline' },
  { title: 'Content', href: '/ml-program#content' },
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
