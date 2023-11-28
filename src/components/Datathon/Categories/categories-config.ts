import { type StaticImageData } from "next/image";
import Placeholder from '@/public/Datathon/Categories/placeholder.png'

export interface Themes {
    name: string;
    image: StaticImageData;
    description: string;
}

export const themes: Themes[] = [
    {
      name: 'Theme 1',
      image: Placeholder,
      description: 'Healthcare is the maintenance or improvement of health via the prevention, diagnosis, treatment, recovery, or cure of disease, illness, injury, and other physical and mental impairments in people.'
    },
    {
      name: 'Theme 2',
      image: Placeholder,
      description: 'Education is the process of facilitating learning, or the acquisition of knowledge, skills, values, morals, beliefs, and habits.'
    },
    {
      name: 'Theme 3',
      image: Placeholder,
      description: 'Finance is a term for matters regarding the management, creation, and study of money and investments.'
    },
]