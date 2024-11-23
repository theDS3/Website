'use client';

import React from 'react';
import Image from 'next/image';
import HeroBackgroundImg from '@/public/ML/ml-hero-bg.svg';
import HeroBackgroundImgMobile from '@/public/ML/ml-hero-bg-2.jpg';
import img from '@/public/Datathon/Title/img.png';
import LinkButton from '@/components/Button/LinkButton';

export default function DatathonHero() {
  return (
    <section className="relative w-screen h-screen flex flex-col items-center justify-center text-white overflow-hidden space-y-12 min-[620px]:py-[30vh]">
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
        <div className="text-left max-w-2xl space-y-6">
          <h1 className="text-[#d9d9d9] text-4xl md:text-6xl lg:text-8xl font-medium tracking-wide">
            DS3 Datathon
          </h1>
          <p className="text-white text-xl md:text-2xl lg:text-4xl">
            1st–2nd February 2025 ❅ In-person Event
          </p>
          <p className="text-white text-lg md:text-xl lg:text-2xl">
            <br />
            Unleash your data science skills at our in-person datathon event!
          </p>
          <div className="py-2 pt-8 mt-4 sm:mt-6 lg:mt-8">
            <LinkButton
              href="http://bit.ly/3Z0WQQg"
              className="px-12 py-7 text-lg md:text-xl lg:text-2xl font-medium shadow-lg transition-all">
              Sign Up!
            </LinkButton>
          </div>
        </div>

        <div className="flex-shrink-0 hidden md:block">
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
