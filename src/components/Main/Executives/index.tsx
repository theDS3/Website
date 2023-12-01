import Aditya_Kulkarni from '@/public/Main/Executives/Aditya Kulkarni.jpg';
import AnaqiAmir from '@/public/Main/Executives/Anaqi Amir.jpg';
import ChristineVan from '@/public/Main/Executives/Christine Van.png';
import IvyChen from '@/public/Main/Executives/Ivy Chen.jpg';
import KhadeemSankar from '@/public/Main/Executives/Khadeem Sankar.jpg';
import MalharPandya from '@/public/Main/Executives/Malhar Pandya.jpg';
import ThanareeSrirawewongsa from '@/public/Main/Executives/Thanaree Srirawewongsa (Jean).jpg';
import TiannePane from '@/public/Main/Executives/Tianne Pane.jpg';

import TeamCard, { type TeamMember } from '@/components/TeamCard';

const executives: TeamMember[] = [
  {
    name: 'Aditya Kulkarni',
    position: 'President',
    src: Aditya_Kulkarni,
    alt: 'Aditya Kulkarni',
  },
  {
    name: 'Tianne Pane',
    position: 'Vice President of Operations',
    src: TiannePane,
    alt: 'Tianne Pane',
  },
  {
    name: 'Christine Van',
    position: 'Vice President of Operations',
    src: ChristineVan,
    alt: 'Christine Van',
  },
  {
    name: 'Anaqi Amir',
    position: 'Vice President of Academics',
    src: AnaqiAmir,
    alt: 'Anaqi Amir',
  },
  {
    name: 'Malhar Pandya',
    position: 'Vice President of Academics',
    src: MalharPandya,
    alt: 'Malhar Pandya',
  },
  {
    name: 'Ivy Chen',
    position: 'Vice President of Communications',
    src: IvyChen,
    alt: 'Ivy Chen',
  },
  {
    name: 'Thanaree Srirawewongsa (Jean)',
    position: 'Vice President of Campus Life',
    src: ThanareeSrirawewongsa,
    alt: 'Thanaree Srirawewongsa (Jean)',
  },
  {
    name: 'Khadeem Sankar',
    position: 'Vice President of Outreach',
    src: KhadeemSankar,
    alt: 'Khadeem Sankar',
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
