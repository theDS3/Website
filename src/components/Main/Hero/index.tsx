import Image from 'next/image';

import LinkButton from '@/components/Button/LinkButton';
import hero from '@/public/Main/team27.png';

export default function MainHero() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 px-6 pt-28 pb-16 text-center">
      <h1 className="text-[#d9d9d9] text-4xl sm:text-5xl lg:text-7xl min-[1800px]:text-8xl min-[1800px]:pb-[1rem] font-medium tracking-widest">
        Data Science
        <span className="font-light"> &amp; </span>
        Statistics
        <span className="font-light"> Society </span>
      </h1>

      <p className="max-w-4xl text-white text-xl sm:text-2xl lg:text-4xl">
        We are a group of like-minded individuals at the
        <span className="text-green-500"> University of Toronto </span>
        driving impact in the fields of ‎
        <span className="text-pink-500">
          data science, statistics, and machine learning.
        </span>
      </p>

      <Image
        src={hero}
        alt="Data Science & Statistics Society Team Picture"
        placeholder="blur"
        priority={true}
        className="w-full max-w-3xl lg:max-w-5xl min-[1800px]:max-w-6xl rounded-3xl"
      />

      <div className="flex flex-wrap items-center justify-center gap-4">
        <a
          href="#about-us"
          className="inline-flex items-center gap-3 rounded-full bg-white/20 py-2 pl-6 pr-2 text-lg font-semibold text-white backdrop-blur transition hover:bg-white/30">
          Learn More
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#4c1d95]">
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </span>
        </a>

        <LinkButton
          newTab
          href="https://docs.google.com/forms/d/e/1FAIpQLSe2-hoS0EmTDOii6JXt3ljkfPo8nuz1EdHfSy71FQuTMJhnCw/viewform"
          prefetch={false}
          className="w-max">
          Join Us
        </LinkButton>
      </div>
    </div>
  );
}
