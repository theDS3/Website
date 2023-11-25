import Image from 'next/image';
import Link from 'next/link';

import Button from '@/components/Button';
import Team from '@/public/team.jpg';

export default function Hero() {
  return (
    <section
      id="intro"
      className="grid grid-cols-[1fr] gap-1 min-[620px]:grid-cols-[1fr_2fr] min-[620px]:gap-10">
      <Image
        priority
        src={Team}
        alt="Data Science & Statistics Society Team Picture"
        className="mb-8 rounded-3xl"
      />
      <div className="flex flex-col gap-8 xl:gap-12">
        <h1 className="col-span-2 text-[#d9d9d9] text-6xl lg:text-7xl min-[1800px]:text-8xl min-[1800px]:pb-[5rem] font-medium tracking-widest">
          Data Science
          <span className="font-light"> &amp; </span>
          Statistics
          <span className="font-light"> Society </span>
        </h1>
        <p className="text-white text-2xl lg:text-4xl">
          We are a group of like-minded individuals at the
          <span className="text-green-500"> University of Toronto </span>
          driving impact in the fields of ‎
          <span className="text-pink-500">
            data science, statistics, and machine learning
          </span>
        </p>
        <Button className="mt-6 mr-auto">
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSe2-hoS0EmTDOii6JXt3ljkfPo8nuz1EdHfSy71FQuTMJhnCw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="intro-button">
            Join Us
          </Link>
        </Button>
      </div>
    </section>
  );
}
