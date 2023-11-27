import Image from 'next/image';

import upcoming from '@/public/Main/upcoming.png';

export default function Events() {
  return (
    <section
      id="events"
      className="flex flex-col items-center py-[12vh]">
      <h2 className="text-gray-400 text-5xl font-bold pb-8 text-center tracking-widest">
        Upcoming Events
      </h2>
      <div className="pb-8 flex flex-col items-center md:flex-row md:space-x-3 lg:space-x-4 xl:space-x-8">
        <Image
          src={upcoming}
          alt="Upcoming Event - DS3 Datathon"
          className="pb-8 sm:h-[300px] md:h-[300px] lg:h-[450px] transition-all duration-300"
        />
        <p className="text-white text-center text-2xl transition-all md:text-1xl md:text-left lg:text-3xl xl:text-5xl">
          The DS3 Datathon presents a unique opportunity for participants to
          delve into the realm of data science and tackle real-world problems
          through the application of advanced tools and techniques.
        </p>
      </div>
    </section>
  );
}
