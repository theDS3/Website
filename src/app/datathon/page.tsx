import { Metadata } from 'next';

import LinkButton from '@/components/Button/LinkButton';
import CountdownTimer from '@/components/Datathon/CountdownTimer';
import NavBar, { Link } from '@/components/Navabr';
import image1 from '@/public/Datathon/About/image1.png';
import image2 from '@/public/Datathon/About/image2.png';
import image3 from '@/public/Datathon/About/image3.png';

import { datathonStartDate, isDatathonWeek } from '@/utils/datathon';
import About_Datathon from '@/components/Datathon/About';
import ImageCarousel from '@/components/Datathon/ImageCarousel';
import { EmblaOptionsType } from 'embla-carousel'
import '@/components/Datathon/ImageCarousel/embla.css'

export const metadata: Metadata = {
  title: `DS3 | ${datathonStartDate.getFullYear()} Datathon`,
  description: `The ${datathonStartDate.getFullYear()} Datathon ${datathonStartDate > new Date() ? 'is' : 'was'} held on ${datathonStartDate.toDateString()} at
    ${datathonStartDate.getHours()}:${datathonStartDate.getMinutes()}:${datathonStartDate.getSeconds()} EST.`,
};

export default function Datathon() {
  const OPTIONS: EmblaOptionsType = { loop: true }
  const images: string[] = [
    image1.src,
    image2.src,
    image3.src
  ]
  const links: Link[] = [
    { title: 'About Us', href: '/#about-us' },
    { title: 'Sponsors', href: '/#sponsors' },
    { title: 'Team', href: '/#team' },
    { title: 'Datathon', href: '/datathon' },
    { title: 'ML Program', href: '/ml-program' },
  ];


  return (
    <>
      <NavBar links={links} />
      <main>
        <About_Datathon />
        <ImageCarousel images={images} options={OPTIONS} />
      </main>
    </>
  );
}
