import { Metadata } from 'next';

import LinkButton from '@/components/Button/LinkButton';
import CountdownTimer from '@/components/Datathon/CountdownTimer';
import NavBar, { Link } from '@/components/Navabr';

import { datathonStartDate, isDatathonWeek } from '@/utils/datathon';
import DatathonHero from '@/components/Datathon/Hero';
import AboutDatathon from '@/components/Datathon/About';
import { FAQ } from '@/components/Datathon/FAQ';
import { ImageCarousel } from '@/components/Datathon/HighlightCarousel';

import img1 from '@/public/Datathon/carousel/IMG_1818.png';
import img2 from '@/public/Datathon/carousel/IMG_1883.png';
import img3 from '@/public/Datathon/carousel/IMG_1898.png';
import img4 from '@/public/Datathon/carousel/IMG_7688.png';
import img5 from '@/public/Datathon/carousel/IMG_7700.png';
import img6 from '@/public/Datathon/carousel/IMG_7703.png';
import img7 from '@/public/Datathon/carousel/IMG_7704.png';
import img8 from '@/public/Datathon/carousel/IMG_7735.png';

export const metadata: Metadata = {
  title: `DS3 | ${datathonStartDate.getFullYear()} Datathon`,
  description: `The ${datathonStartDate.getFullYear()} Datathon ${datathonStartDate > new Date() ? 'is' : 'was'} held on ${datathonStartDate.toDateString()} at
    ${datathonStartDate.getHours()}:${datathonStartDate.getMinutes()}:${datathonStartDate.getSeconds()} EST.`,
};

export default function Datathon() {
  const layoutStyle =
    'min-w-screen min-h-screen flex items-center justify-center px-5';

  const faqs: FAQ[] = [
    {
      question: 'What is the DS3 Datathon?',
      answer:
        'A week long data science hackathon where students will be tested on the accuracy of their models',
    },
    {
      question: 'When and where will the Datathon take place?',
      answer: 'February 17th-22nd, 2025 @ UTSC',
    },
    {
      question: 'Who can participate?',
      answer: 'Students from all universities/high schools are welcome!',
    },
    {
      question: 'Is there a registration fee?',
      answer: 'No! It is a free event!',
    },
    {
      question: 'Is it individual or in groups?',
      answer: 'Both are fine! However, groups may have a maximum of 4 members',
    },
    {
      question: 'Will there be prizes?',
      answer:
        'Yes! We have exciting prizes for the top teams, including cash awards, internship opportunities, and tech gadgets. Specific prize details will be announced closer to the event.',
    },
  ];

  const images: string[] = [
    img1.src,
    img2.src,
    img3.src,
    img4.src,
    img5.src,
    img6.src,
    img7.src,
    img8.src,
  ];

  const links: Link[] = [
    { title: 'Home', href: '/' },
    { title: 'About', href: '#about-us' },
    //{ title: 'Sponsors', href: '#sponsors' },
    { title: 'Highlights', href: '#highlights' },
    { title: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      <NavBar links={links} />
      <main>
        {!isDatathonWeek() ? (
          <div className={`${layoutStyle} flex-col gap-8 `}>
            <DatathonHero />
            <AboutDatathon />
            {datathonStartDate > new Date() && (
              <CountdownTimer date={datathonStartDate} />
            )}
            <p className="text-white text-3xl md:text-4xl lg:text-5xl text-center font-medium mt-8">
              Take a look at the past Final Leaderboards!
            </p>
            <LinkButton
              href="/datathon/leaderboard/past"
              className="mt-6 px-12 py-2 text-lg md:text-2xl lg:text-6xl font-bold transition-all shadow-lg">
              →
            </LinkButton>
            {/* <Sponsors/> Tag Removed */}
            <ImageCarousel images={images} />
            <FAQ faqs={faqs} />
          </div>
        ) : (
          <div className={layoutStyle}>
            <div className="text-white">
              <h1 className="text-7xl text-center mb-3">
                {datathonStartDate.getFullYear()} Datathon will be here soon!
              </h1>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
