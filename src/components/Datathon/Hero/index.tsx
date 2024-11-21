'use client';

import React from 'react';
import Image from 'next/image';
import HeroBackgroundImg from '@/public/ML/ml-hero-bg.svg';
import HeroBackgroundImgMobile from '@/public/ML/ml-hero-bg-2.jpg';
import img from '@/public/Datathon/Title/img.png';

export default function DatathonHero() {
  return (
    <section className="relative w-screen h-screen flex flex-col items-center justify-center text-white overflow-hidden">
      <div className="absolute inset-0 -z-30">
        <Image
          src={HeroBackgroundImg}
          alt="Background"
          fill
          priority
          className="hidden md:block object-cover"
        />
        <Image
          src={HeroBackgroundImgMobile}
          alt="Background Mobile"
          fill
          priority
          className="block md:hidden object-cover"
        />
      </div>

      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#151019]"></div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between w-full z-10 px-6 lg:px-12 gap-8 lg:gap-14 max-w-7xl mx-auto">
        <div className="text-left max-w-2xl">
          <h1 className="text-[#d9d9d9] text-4xl md:text-6xl lg:text-8xl font-medium tracking-wide">
            DS3 Datathon
          </h1>
          <p className="text-white text-xl md:text-2xl lg:text-4xl mt-4">
            1st–2nd February 2025 ❅ In-person Event
          </p>
          <p className="text-white text-lg md:text-xl lg:text-2xl mt-6 lg:mt-12">
            Unleash your data science skills at our in-person datathon event!
          </p>
        </div>

        <div className="flex-shrink-0">
          <Image
            src={img}
            alt="Logo"
            width={500}
            height={500}
            priority
            className="object-contain w-40 md:w-60 lg:w-96"
          />
        </div>
      </div>
    </section>
  );
}
