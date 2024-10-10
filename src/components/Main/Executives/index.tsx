import KritGrover from '@/public/Main/Executives/Krit Grover.jpeg';
import ShreyasRao from '@/public/Main/Executives/Shreyas Rao.jpg';
import NevinAdaCakmak from '@/public/Main/Executives/Nevin Ada Cakmak.jpg';
import AshwinMalik from '@/public/Main/Executives/Ashwin Mallik.png';
import ChrisYan from '@/public/Main/Executives/Chris Yan.jpg';
import HarmanGill from '@/public/Main/Executives/Harman Gill.jpg';
import ThanareeSrirawewongsa from '@/public/Main/Executives/Thanaree Srirawewongsa.jpeg';
import ArnenchaPradavkaew from '@/public/Main/Executives/Arnencha Pradabkaew.jpg';
import AlbertHo from '@/public/Main/Executives/Albert Ho.jpg';
import FahmidKhan from '@/public/Main/Executives/Fahmid Khan.jpg';

import TeamCard, { type TeamMember } from '@/components/TeamCard';

const executives: TeamMember[] = [
  {
    name: 'Krit Grover',
    position: 'President',
    src: KritGrover,
    alt: 'Krit Grover',
  },
  {
    name: 'Shreyas Rao',
    position: 'Vice President of Technology',
    src: ShreyasRao,
    alt: 'Shreyas Rao',
  },
  {
    name: 'Nevin Ada Çakmak',
    position: 'Vice President of Operations',
    src: NevinAdaCakmak,
    alt: 'Nevin Ada Çakmak',
  },
  {
    name: 'Ashwin Malik',
    position: 'Vice President of Academics',
    src: AshwinMalik,
    alt: 'Ashwin Malik',
  },
  {
    name: 'Chris Yan',
    position: 'Vice President of Academics',
    src: ChrisYan,
    alt: 'Chris Yan',
  },
  {
    name: 'Harman Gill',
    position: 'Vice President of Finance',
    src: HarmanGill,
    alt: 'Harman Gill',
  },
  {
    name: 'Thanaree Srirawewongsa (Jean)',
    position: 'Vice President of Consulting',
    src: ThanareeSrirawewongsa,
    alt: 'Thanaree Srirawewongsa (Jean)',
  },
  {
    name: 'Arnencha Pradavkaew',
    position: 'Vice President of Outreach',
    src: ArnenchaPradavkaew,
    alt: 'Arnencha Pradavkaew',
  },
  {
    name: 'Albert Ho',
    position: 'Vice President of Campus Life',
    src: AlbertHo,
    alt: 'Albert Ho',
  },
  {
    name: 'Fahmid Khan',
    position: 'Vice President of Marketing',
    src: FahmidKhan,
    alt: 'Fahmid Khan',
  },
];

export default function Executives() {
  return (
    <section id="team">
      <h2 className="text-5xl font-bold tracking-wide pb-8 text-center">
        Our Team
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {executives.map((member: TeamMember, id) => (
          <TeamCard
            key={id}
            {...member}
          />
        ))}
      </div>
    </section>
  );
}
