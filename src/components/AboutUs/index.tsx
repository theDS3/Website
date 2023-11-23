'use client';

import Mission from '@/public/mission.svg';
import Vision from '@/public/vision.svg';
import Image from 'next/image';

export default function AboutUs() {
  return (
    <section
      id="about-us"
      className="pt-[inherit] flex flex-col items-center justify-center text-white">
      <div className="text-center flex flex-col items-center">
        <div className="flex items-center justify-center">
          <Image
            priority
            src={Vision}
            alt="Vision Icon"
            width={130}
            height={130}
          />
        </div>
        <h2 className="lg:text-4xl text-3xl font-bold pb-4 pt-4">VISION</h2>
        <p className="px-4 lg:text-3xl text-xl">
          To be the most student-centric community to create an environment
          where students feel encouraged to engage with data science and
          statistics
        </p>
      </div>
      <div className="text-center mt-10 flex flex-col items-center">
        <div className="flex items-center justify-center">
          <Image
            priority
            src={Mission}
            alt="Mission Icon"
            width={130}
            height={130}
          />
        </div>
        <h2 className="lg:text-4xl text-3xl font-bold pb-4 pt-4">MISSION</h2>
        <p className="px-4 lg:text-3xl text-xl">
          To make a contribution to our student community by creating
          opportunities for engagement in Data Science and Statistics.
        </p>
      </div>
    </section>
  );
}
