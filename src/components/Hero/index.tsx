import React from 'react';
import Image from 'next/image';
import Team from '@/public/team.jpg';
import Button from '@/components/Button';
import Link from 'next/link';

export default function Hero() {
  return (
    <section
      id="intro"
      className="grid grid-cols-1 gap-1 md:grid-cols-1 lg:grid-cols-2">
      {/* Image */}
      <div className="intro-image">
        <Image
          src={Team}
          alt="Team picture"
          className="rounded-lg"
          width={500}
          height={400}
        />
      </div>

      {/* Heading */}
      <div className="col-span-2 lg:col-span-1">
        <h1 className="text-white text-6xl lg:text-7xl font-medium leading-normal tracking-wide">
          Data Science <span className="font-light">&amp;</span> Statistics{' '}
          <span className="font-light">Society</span>
        </h1>

        {/* Content */}
        <div className="text-white text-3xl lg:text-5xl mt-6 lg:mt-10">
          <p>
            We are a group of like-minded individuals at the{' '}
            <span className="text-green-500">University of Toronto</span>{' '}
            driving impact in the fields of{' '}
            <span className="text-pink-500">
              data science, statistics, and machine learning
            </span>
          </p>
        </div>

        {/* Button */}
        <div className="mt-6 lg:mt-10">
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSe2-hoS0EmTDOii6JXt3ljkfPo8nuz1EdHfSy71FQuTMJhnCw/viewform"
            target="_blank"
            className="intro-button">
            <Button>Join Us</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
