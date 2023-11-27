'use client';
import Image from 'next/image';

import Mission from '@/public/Main/mission.svg'
import Vision from '@/public/Main/vision.svg';

const content = [
  {
    heading: 'VISION',
    description:
      'To be the most student-centric community to create an environment where students feel encouraged to engage with data science and statistics',
    src: Vision,
    alt: 'Vision Icon',
  },
  {
    heading: 'MISSION',
    description:
      'To make a contribution to our student community by creating opportunities for engagement in Data Science and Statistics.',
    src: Mission,
    alt: 'Mission Icon',
  },
];

export default function AboutUs() {
  return (
    <section
      id="about-us"
      className="flex flex-col items-center justify-center space-y-10 text-white">
      {content.map(({ heading, description, src, alt }, id) => {
        return (
          <div
            key={id}
            className="text-center flex flex-col items-center">
            <Image
              src={src}
              alt={alt}
              className="w-[130px] h-[130px] transition-all duration-500"
            />
            <h2 className="text-5xl font-bold pb-4 pt-4">{heading}</h2>
            <p className="text-xl px-4 font-normal md:text-2xl lg:text-3xl ">
              {description}
            </p>
          </div>
        );
      })}
    </section>
  );
}
