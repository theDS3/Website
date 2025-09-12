import NavBar, { type Link } from '@/components/Navabr';
import About_ML from '@/components/ML/About';
import Content from '@/components/ML/Content';
import FAQ from '@/components/ML/FAQ';
const links: Link[] = [
  { title: 'Home', href: '/#intro' },
  { title: 'Content', href: '/ml-program#content' },
  { title: 'FAQ', href: '/ml-program#faq' },
];

export default function MLPage() {
  return (
    <>
      <NavBar links={links} />
      <main>
        <About_ML />
        <Content sheetName={'2025'}
                 hasSlides={true}
                 hasRecordings={false}/>
        <FAQ />
      </main>
    </>
  );
}
