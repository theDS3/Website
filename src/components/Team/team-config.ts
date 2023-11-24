import { type StaticImageData } from 'next/image';

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
  src: StaticImageData;
  alt: string;
}

type TeamGroups = 'Executives';

export const team: Record<TeamGroups, TeamMember[]> = {
  Executives: [
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
  ],
};
