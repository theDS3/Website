import KritGrover from '@/public/Main/Executives/Krit Grover.jpg';
import ShreyasRao from '@/public/Main/Executives/Shreyas Rao.jpg';
import JaydenYip from '@/public/Main/Executives/Jayden Yip.jpg';
import AshwinMalik from '@/public/Main/Executives/Ashwin Mallik.png';
import ChrisYan from '@/public/Main/Executives/Chris Yan.jpg';
import DivyWadhwani from '@/public/Main/Executives/Divy Wadhwani.jpg';
import NirmayThakkar from '@/public/Main/Executives/Nirmay Thakkar.jpg';
import HelenaZhao from '@/public/Main/Executives/Helena Zhao.jpg';
import PaulNguyen from '@/public/Main/Executives/Paul Nguyen.jpg';
import ShawnJiang from '@/public/Main/Executives/Shawn Jiang.jpg';

import TeamCard, { type TeamMember } from '@/components/TeamCard';

const executives: TeamMember[] = [
  {
    name: 'Krit Grover',
    position: 'Co-President',
    src: KritGrover,
    alt: 'Krit Grover',
  },
  {
    name: 'Chris Yan',
    position: 'Co-President',
    src: ChrisYan,
    alt: 'Chris Yan',
  },
  {
    name: 'Shreyas Rao',
    position: 'Vice President of Technology',
    src: ShreyasRao,
    alt: 'Shreyas Rao',
  },
  {
    name: 'Jayden Yip',
    position: 'Vice President of Operations',
    src: JaydenYip,
    alt: 'Jayden Yip',
  },
  {
    name: 'Ashwin Malik',
    position: 'Vice President of Academics',
    src: AshwinMalik,
    alt: 'Ashwin Malik',
  },
  {
    name: 'Divy Wadhwani',
    position: 'Vice President of Academics',
    src: DivyWadhwani,
    alt: 'Divy Wadhwani',
  },
  {
    name: 'Nirmay Thakkar',
    position: 'Vice President of Finance',
    src: NirmayThakkar,
    alt: 'Nirmay Thakkar',
  },
  {
    name: 'Helena Zhao',
    position: 'Vice President of Outreach',
    src: HelenaZhao,
    alt: 'Helena Zhao',
  },
  {
    name: 'Shawn Jiang',
    position: 'Vice President of Marketing',
    src: ShawnJiang,
    alt: 'Shawn Jiang',
  },
  {
    name: 'Paul Nguyen',
    position: 'Vice President of Marketing',
    src: PaulNguyen,
    alt: 'Paul Nguyen',
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
