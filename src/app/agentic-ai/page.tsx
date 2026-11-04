import PageShell from '@/components/v2/PageShell';
import About_Bootcamp from '@/components/Bootcamp/About';
import Content from '@/components/Bootcamp/Content';
import FAQ from '@/components/Bootcamp/FAQ';
import ContentCarousel from '@/components/Bootcamp/ContentCarousel';
import ProjectShowcase from '@/components/Bootcamp/ProjectShowcase';
import BootcampCarousel from '@/components/Bootcamp/BootcampCarousel';

export default function MLPage() {
  return (
    <PageShell>
      <main className="pt-16">
        <About_Bootcamp />
        <BootcampCarousel />
        <ContentCarousel />
        <ProjectShowcase />
        <FAQ />
      </main>
    </PageShell>
  );
}
