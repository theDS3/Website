import NavBar, { type Link } from '@/components/Navabr';
import HighlightsHero from '@/components/Highlights/Hero';
import AnnualProjects from '@/components/Highlights/AnnualProjects';

const links: Link[] = [
  { title: 'Home', href: '/#intro' },
  { title: 'Projects', href: '/highlights#annual-projects' },
  { title: 'Past Sponsors', href: '/highlights#sponsors' },
  { title: 'Club Statistics', href: '/highlights#stats' },
];

export default function MLPage() {
  return (
    <>
      <NavBar links={links} />
      <main>
        <HighlightsHero />
        <AnnualProjects />
      </main>
    </>
  );
}
