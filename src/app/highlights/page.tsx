import NavBar, { type Link } from '@/components/Navabr';
import { HighlightsHero, AnnualProjects, PastSponsors } from '@/components/Highlights';

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
        <PastSponsors />
      </main>
    </>
  );
}
