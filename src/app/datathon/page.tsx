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
      question: 'What is a Datathon?',
      answer:
        'A Datathon is a data-focused hackathon where participants use data science skills to solve real-world challenges over a short period, typically 24-48 hours.',
    },
    {
      question: 'Who can participate?',
      answer:
        'Our Datathon is open to all university students, regardless of their major or level of study. We welcome beginners to advanced data enthusiasts!',
    },
    {
      question: 'Do I need to know programming?',
      answer:
        'Basic programming knowledge is helpful, but not required. We offer workshops and mentoring to help you get started and learn throughout the event.',
    },
    {
      question: 'What should I bring?',
      answer:
        "Bring your laptop, charger, and any other devices you might need. We'll provide food, drinks, and a comfortable workspace for the duration of the event.",
    },
    {
      question: 'Is there a participation fee?',
      answer:
        'No, participation in our Datathon is completely free of charge, thanks to our generous sponsors and university support.',
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
    { title: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      <NavBar links={links} />
      <main>
        {!isDatathonWeek() ? (
          <div className={`${layoutStyle} flex-col gap-8`}>
            <DatathonHero />
            <AboutDatathon />
            <CountdownTimer date={datathonStartDate} />
            <p className="text-white text-2xl text-center">
              Take a look at the 2024 Leaderboard!
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
                {datathonStartDate.getFullYear()} Datathon will be here soon!
              </h1>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
