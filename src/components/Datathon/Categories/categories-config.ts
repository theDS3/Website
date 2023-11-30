import { type StaticImageData } from "next/image";
import Placeholder from '@/public/Datathon/Categories/placeholder.png'
import Academia from '@/public/Datathon/Categories/Academia/Academics (coloured).svg'
import Industry from '@/public/Datathon/Categories/Industry/Working 1 (coloured).svg'
import Government from '@/public/Datathon/Categories/Government/Government 1 (coloured).svg'

export interface Themes {
    name: string;
    image: StaticImageData;
    description: string;
}

export const themes: Themes[] = [
    {
      name: 'Academia',
      image: Academia,
      description: 'Experience life like a data scientist in the areas of ...'
    },
    {
      name: 'Industry',
      image: Industry,
      description: 'Experience life like a data scientist in the areas of ...'
    },
    {
      name: 'Government',
      image: Government,
      description: 'Experience life like a data scientist in the areas of ...'
    },
]