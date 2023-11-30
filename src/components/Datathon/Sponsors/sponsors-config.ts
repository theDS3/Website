import { type StaticImageData } from "next/image";

import VectorInstitute from '@/public/Datathon/Sponsors/Vector Institute.svg'
import FGF from '@/public/Datathon/Sponsors/FGF Logo (2) (1) 1.svg'
import MSReactor from '@/public/Datathon/Sponsors/Reactor-logo-Dark 1.svg'
import TheScore from '@/public/Datathon/Sponsors/theScore signature logo (1) 1.svg'
import KlickHealth from '@/public/Datathon/Sponsors/Klick Health.svg'
import MLH from '@/public/Datathon/Sponsors/MLH.svg'

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