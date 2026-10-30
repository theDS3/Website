import { Button } from '@/components/Button';
import SponsorsCard, { type Sponsors } from './SponsorCard';

import FGF from '@/public/Sponsors/FGF.svg';
import KlickHealth from '@/public/Sponsors/Klick Health.svg';
import theScore from '@/public/Sponsors/theScore.svg';
import VectorInstitute from '@/public/Sponsors/Vector Institute.svg';
import MSReactor from '@/public/Sponsors/MSReactor.svg';
import MLH from '@/public/Sponsors/MLH.svg';
import Databricks from '@/public/Sponsors/Databricks.svg';

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

// The animation slides the track left by exactly half its width, so the
// content is repeated 4 times: the second half then matches the first and
// the loop restarts with no visible jump (even on very wide screens).
const track = [...sponsors, ...sponsors, ...sponsors, ...sponsors];

export default function Sponsors() {
  return (
    <section
      id="sponsors"
      className="flex flex-col items-center justify-center py-24 md:py-[15vh] text-center !px-0">
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

      <h3 className="text-white text-5xl font-semibold tracking-wide mt-32 mb-8">
        Our Sponsors
      </h3>

      <div
        className="marquee w-full overflow-hidden bg-white/10 py-8 mt-6"
        style={{
          maskImage:
            'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
        }}>
        <div className="marquee-track">
          {track.map((sponsor, idx) => (
            <div
              key={idx}
              className="shrink-0 mx-3">
              <SponsorsCard {...sponsor} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
