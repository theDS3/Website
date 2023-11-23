import Image from 'next/image';
import Team from '../../public/team.jpg';
import Button from '../Button/index';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-2 lg:gap-6">
      {/* Image */}
      <div className="lg:col-span-1 lg:row-span-2 relative ">
        <div className="rounded-lg overflow-hidden">
          <Image
            src={Team}
            alt="Team picture"
            objectFit="cover"
            className="rounded-lg"
            width={450}
            height={330}
          />
        </div>
      </div>

      {/* Text content */}
      <div className="flex flex-col justify-center lg:col-span-1 lg:row-span-1 pl-4 lg:pl-0">
        {/* Heading */}
        <h1 className="text-white text-6xl lg:text-7xl font-medium leading-normal tracking-wide">
          Data Science <span className="font-light">&amp;</span> Statistics{' '}
          <span className="font-light">Society</span>
        </h1>

        {/* Paragraph */}
        <p className="text-white text-3xl lg:text-4xl mt-6 lg:mt-10">
          We are a group of like-minded individuals at the{' '}
          <span className="text-green-500">University of Toronto</span> driving
          impact in the fields of{' '}
          <span className="text-pink-500">
            data science, statistics, and machine learning
          </span>
        </p>

        {/* Button */}
        <Link
          href={
            'https://docs.google.com/forms/d/e/1FAIpQLSe2-hoS0EmTDOii6JXt3ljkfPo8nuz1EdHfSy71FQuTMJhnCw/viewform'
          }
          target="_blank">
          <Button className="mt-6">Join Us</Button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
