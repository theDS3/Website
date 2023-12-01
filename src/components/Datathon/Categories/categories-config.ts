import { type StaticImageData } from 'next/image';
import Placeholder from '@/public/Datathon/Categories/placeholder.png';
import Academia from '@/public/Datathon/Categories/Academia/Academics (coloured).svg';
import Industry from '@/public/Datathon/Categories/Industry/Working 1 (coloured).svg';
import Government from '@/public/Datathon/Categories/Government/Government 1 (coloured).svg';

export interface Themes {
  name: string;
  image: StaticImageData;
  description: string;
}

export const themes: Themes[] = [
    {
      name: 'Academia',
      image: Academia,
      description: 'Capture the essence of curiosity. Academia unveils the beauty of data science through research, innovation, and the relentless pursuit of knowledge.'
    },
    {
      name: 'Industry',
      image: Industry,
      description: 'The heartbeat of businesses. Data scientists transform raw data into actionable insights, shaping industries and fostering growth.'
    },
    {
      name: 'Government',
      image: Government,
      description: 'Armed with analytics, data scientists inform policy decisions, enhance public services, and ensure data-driven strategies to empower nations and thrive in the digital age.'
    },
]
