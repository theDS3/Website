import Image from 'next/image';
import Team from '../../public/team.jpg';

const Hero = () => {
  return (
    <section className="grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-2 lg:gap-6">
      {/* Image */}
      <div className="rounded-lg lg:col-span-1 lg:row-span-2 relative">
        <Image
          src={Team}
          alt="Team picture"
          objectFit="cover"
          className="rounded-lg"
          width={450}
          height={330}
        />
      </div>

      {/* Text content */}
      <div className="flex flex-col justify-center lg:col-span-1 lg:row-span-1 pl-4 lg:pl-0">
        {/* Heading */}
        <h1 className="text-white text-6xl lg:text-7xl font-medium leading-normal tracking-wide">
          Data Science <span className="font-light">&amp;</span> Statistics{' '}
          <span className="font-light">Society</span>
        </h1>

        {/* Paragraph - Changed text color to white */}
        <p className="text-white text-3xl lg:text-4xl mt-6 lg:mt-10">
          We are a group of like-minded individuals at the{' '}
          <span className="text-green-500">University of Toronto</span> driving
          impact in the fields of{' '}
          <span className="text-pink-500">
            data science, statistics, and machine learning
          </span>
        </p>

        {/* Button */}
        <div className="mt-6">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSe2-hoS0EmTDOii6JXt3ljkfPo8nuz1EdHfSy71FQuTMJhnCw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white border border-white rounded-full px-6 py-3 text-lg font-bold hover:bg-gray-800 hover:text-white transition duration-300 ease-in-out">
            Join Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
