import { type StaticImageData } from "next/image";

import VectorInstitute from '@/public/Datathon/Sponsors/vector-institute.png'
import FGF from '@/public/Datathon/Sponsors/fgf.jpg'
import MSReactor from '@/public/Datathon/Sponsors/ms-reactor.jpeg'
import TheScore from '@/public/Datathon/Sponsors/thescore.jpeg'
import KlickHealth from '@/public/Datathon/Sponsors/klick-health.jpeg'
import MLH from '@/public/Datathon/Sponsors/mlh.png'

export interface Sponsors {
    name: string;
    logo: StaticImageData;
    link: string;
}

export const sponsors: Sponsors[] = [
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
        logo: TheScore,
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