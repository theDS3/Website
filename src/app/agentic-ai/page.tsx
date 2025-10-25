import NavBar, { type Link } from '@/components/Navabr';
import About_Bootcamp from '@/components/Bootcamp/About';
import Content from '@/components/Bootcamp/Content';
import FAQ from '@/components/Bootcamp/FAQ';
import ContentCarousel from '@/components/Bootcamp/ContentCarousel';

import ProjectShowcase from '@/components/Bootcamp/ProjectShowcase';
import BootcampCarousel from '@/components/Bootcamp/BootcampCarousel';

const links: Link[] = [
  { title: 'Home', href: '/#intro' },
  { title: 'Content', href: '/agentic-ai#content' },
  { title: 'FAQ', href: '/agentic-ai#faq' },
];

export default function MLPage() {
  return (
    <>
      <NavBar links={links} />
      <main>
        <About_Bootcamp />
        <BootcampCarousel />
        <ContentCarousel />
        <ProjectShowcase />
        <FAQ />
      </main>
    </>
  );
}
