import { Button } from '@/components/Button';
import SponsorsCard, { type Sponsors } from './SponsorCard';

import FGF from '@/public/Main/Sponsors/FGF.svg';
import KlickHealth from '@/public/Main/Sponsors/Klick Health.svg';
import theScore from '@/public/Main/Sponsors/theScore.svg';
import VectorInstitute from '@/public/Main/Sponsors/Vector Institute.svg';
import MSReactor from '@/public/Main/Sponsors/MSReactor.svg';
import MLH from '@/public/Main/Sponsors/MLH.svg';
import Databricks from '@/public/Main/Sponsors/Databricks.svg';

const sponsors: Sponsors[] = [
  { name: 'Databricks', logo: Databricks, link: 'https://www.databricks.com/' },
  {
    name: 'Vector Institute',
    logo: VectorInstitute,
    link: 'https://vectorinstitute.ai/',
  },
  {
    name: 'Microsoft Reactor',
    logo: MSReactor,
    link: 'https://developer.microsoft.com/en-us/reactor/',
    className: 'p-2',
  },
  { name: 'FGF Brands', logo: FGF, link: 'https://www.fgfbrands.com/' },
  { name: 'TheScore', logo: theScore, link: 'https://www.thescore.com/' },
  { name: 'MLH', logo: MLH, link: 'https://mlh.io/' },
  { name: 'Klick Health', logo: KlickHealth, link: 'https://www.klick.com/' },
];

export default function Sponsors() {
  return (
    <section
      id="sponsors"
      className="flex flex-col items-center justify-center py-24 md:py-[15vh] text-center">
      <h2 className="text-white text-5xl font-bold tracking-wide pb-8">
        Support Our Mission!
      </h2>
      <p className="description text-2xl px-4 md:px-20 lg:px-28 mb-6">
        Support our mission and make your organization visible to numerous
        capable University of Toronto students. From merchandise to customized
        events, we curate sponsorship packages that fit your needs.
      </p>
      <a href="mailto:thedatasciencecube@gmail.com">
        <Button className="mt-6">Contact Us</Button>
      </a>

      <h3 className="text-white text-3xl font-semibold tracking-wide mt-16 mb-8">
        Our Sponsors
      </h3>

      <div className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-10 w-full max-w-7xl mx-auto mt-6">
        {sponsors.map((sponsor, idx) => (
          <SponsorsCard
            key={idx}
            {...sponsor}
          />
        ))}
      </div>
    </section>
  );
}
