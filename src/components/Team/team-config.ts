import Aditya_Kulkarni from '@/public/Team/Executives/Aditya Kulkarni.jpg';
import AnaqiAmir from '@/public/Team/Executives/Anaqi Amir.jpg';
import ChristineVan from '@/public/Team/Executives/Christine Van.png';
import IvyChen from '@/public/Team/Executives/Ivy Chen.jpg';
import KhadeemSankar from '@/public/Team/Executives/Khadeem Sankar.jpg';
import MalharPandya from '@/public/Team/Executives/Malhar Pandya.jpg';
import ThanareeSrirawewongsa from '@/public/Team/Executives/Thanaree Srirawewongsa (Jean).jpg';
import TiannePane from '@/public/Team/Executives/Tianne Pane.jpg';

export interface TeamMember {
  name: string;
  position: string;
  src: string;
  alt: string;
}

type TeamGroups = 'Executives';

export const team: Record<TeamGroups, TeamMember[]> = {
  Executives: [
    {
      name: 'Aditya Kulkarni',
      position: 'President',
      src: Aditya_Kulkarni.src,
      alt: 'Aditya Kulkarni',
    },
    {
      name: 'Tianne Pane',
      position: 'Vice President of Operations',
      src: TiannePane.src,
      alt: 'Tianne Pane',
    },
    {
      name: 'Christine Van',
      position: 'Vice President of Operations',
      src: ChristineVan.src,
      alt: 'Christine Van',
    },
    {
      name: 'Anaqi Amir',
      position: 'Vice President of Academics',
      src: AnaqiAmir.src,
      alt: 'Anaqi Amir',
    },
    {
      name: 'Malhar Pandya',
      position: 'Vice President of Academics',
      src: MalharPandya.src,
      alt: 'Malhar Pandya',
    },
    {
      name: 'Ivy Chen',
      position: 'Vice President of Communications',
      src: IvyChen.src,
      alt: 'Ivy Chen',
    },
    {
      name: 'Thanaree Srirawewongsa (Jean)',
      position: 'Vice President of Campus Life',
      src: ThanareeSrirawewongsa.src,
      alt: 'Thanaree Srirawewongsa (Jean)',
    },
    {
      name: 'Khadeem Sankar',
      position: 'Vice President of Outreach',
      src: KhadeemSankar.src,
      alt: 'Khadeem Sankar',
    },
  ],
};
