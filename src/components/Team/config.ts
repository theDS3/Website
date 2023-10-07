import type { ImageMetadata } from 'astro';

import Aditya_Kulkarni from '../../assets/Team/Executives/Aditya Kulkarni.jpg';
import Anaqi_Amir from '../../assets/Team/Executives/Anaqi Amir.jpg';
import Christine_Van from '../../assets/Team/Executives/Christine Van.png';
import Hibah_Mehvish from '../../assets/Team/Executives/Hibah Mehvish.jpg';
import Khadeem_Sankar from '../../assets/Team/Executives/Khadeem Sankar.jpg';
import Malhar_Pandya from '../../assets/Team/Executives/Malhar Pandya.jpg';
import Thanaree_Srirawewongsa from '../../assets/Team/Executives/Thanaree Srirawewongsa (Jean).jpg';
import Tianne_Pane from '../../assets/Team/Executives/Tianne Pane.jpg';

export interface TeamMember {
  name: string;
  position: string;
  src: ImageMetadata;
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
      src: Tianne_Pane,
      alt: 'Tianne Pane',
    },
    {
      name: 'Christine Van',
      position: 'Vice President of Operations ',
      src: Christine_Van,
      alt: 'Christine Van',
    },
    {
      name: 'Anaqi Amir',
      position: 'Vice President of Academics',
      src: Anaqi_Amir,
      alt: 'Anaqi Amir',
    },
    {
      name: 'Malhar Pandya',
      position: 'Vice President of Academics',
      src: Malhar_Pandya,
      alt: 'Malhar Pandya',
    },
    {
      name: 'Hibah Mehvish',
      position: 'Vice President of Communications',
      src: Hibah_Mehvish,
      alt: 'Hibah Mehvish',
    },
    {
      name: 'Thanaree Srirawewongsa (Jean)',
      position: 'Vice President of Campus Life',
      src: Thanaree_Srirawewongsa,
      alt: 'Thanaree Srirawewongsa (Jean)',
    },
    {
      name: 'Khadeem Sankar',
      position: 'Vice President of Outreach ',
      src: Khadeem_Sankar,
      alt: 'Khadeem Sankar',
    },
  ],
};
