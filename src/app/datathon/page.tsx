import { Metadata } from 'next';

import LinkButton from '@/components/Button/LinkButton';
import CountdownTimer from '@/components/Datathon/CountdownTimer';
import NavBar, { Link } from '@/components/Navabr';

import { datathonStartDate, isDatathonWeek } from '@/utils/datathon';
import DatathonHero from '@/components/Datathon/Hero';
import AboutDatathon from '@/components/Datathon/About';
import DatathonHero from '@/components/Datathon/Hero';
import AboutDatathon from '@/components/Datathon/About';
import { FAQ, FAQs } from '@/components/Datathon/FAQ';
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
    'min-w-screen min-h-screen flex items-center justify-center px-5 py-5';
  return (
    <>
      <NavBar links={links} />
      <main>
        {!isDatathonWeek() ? (
          <div className={`${layoutStyle} flex-col gap-8`}>
            <CountdownTimer date={datathonStartDate} />
            <p className="text-white text-2xl text-center">
              Take a look at the 2025 Leaderboard!
            </p>
            <LinkButton
              href="/datathon/leaderboard/past"
              className="mb-24">
              →
            </LinkButton>
            <ImageCarousel images={images} />
            <FAQ faqs={faqs} />
          </div>
        ) : (
          <div className={layoutStyle}>
            <div className="text-white">
              <h1 className="text-7xl text-center mb-3">
                {datathonStartDate.getFullYear()} Datathon will here soon!
              </h1>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
