import SponsorsCard, { type Sponsors } from './SponsorsCard';

import FGF from '@/public/Datathon/Sponsors/FGF.svg';
import KlickHealth from '@/public/Datathon/Sponsors/Klick Health.svg';
import MLH from '@/public/Datathon/Sponsors/MLH.svg';
import MSReactor from '@/public/Datathon/Sponsors/MSReactor.svg';
import VectorInstitute from '@/public/Datathon/Sponsors/Vector Institute.svg';
import theScore from '@/public/Datathon/Sponsors/theScore.svg';

const sponsors: Sponsors[] = [
  {
    name: 'Vector Institute',
    logo: VectorInstitute,
    link: 'https://vectorinstitute.ai/',
  },
  {
    name: 'FGF Brands',
    logo: FGF,
    link: 'https://www.fgfbrands.com/',
  },
  {
    name: 'Microsoft Reactor',
    logo: MSReactor,
    link: 'https://developer.microsoft.com/en-us/reactor/',
  },
  {
    name: 'TheScore',
    logo: theScore,
    link: 'https://www.thescore.com/',
  },
  {
    name: 'MLH',
    logo: MLH,
    link: 'https://mlh.io/',
  },
  {
    name: 'Klick Health',
    logo: KlickHealth,
    link: 'https://www.klick.com/',
  },
];

export default function Sponsors() {
  return (
    <section
      id="sponsors"
      className="flex flex-col items-center justify-center">
      <h2 className="text-gray-300/60 text-5xl font-bold tracking-wide pb-8 text-center">
        Our Sponsors
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-20">
        {sponsors.map(({ name, logo, link }: Sponsors, id) => (
          <SponsorsCard
            key={id}
            name={name}
            logo={logo}
            link={link}
          />
        ))}
      </div>
    </section>
  );
}
