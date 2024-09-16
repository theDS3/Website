import Image from 'next/image';
import BootCampImg from '@/public/ML/bootcamp.png';

export default function About_ML() {
  return (
    <section className="flex flex-col items-center justify-center space-y-10 text-white">
      <div className="flex flex-col gap-6 xl:gap-12">
        <h1 className="text-center text-[#d9d9d9]  text-4xl font-medium tracking-widest md:text-5xl lg:text-7xl">
          ABOUT ML BOOTCAMP
        </h1>
        <div className="flex flex-col md:flex-row lg:flex-row items-center gap-8 xl:gap-4">
          <p className="p-5 lg:p-10 text-white text-xl md:text-2xl lg:text-3xl lg:w-1/2 text-justify">
            New to machine learning? No problem. DS3&apos;s ML bootcamp brings
            forth all the tools and help needed in building your foundation in
            the world of ML. Come join us to dive into the &quot;next big
            thing&quot;!
          </p>
          <Image
            priority={false}
            src={BootCampImg}
            alt="bootcamp"
            className="w-1/2 md:w-1/4 lg:w-1/3 mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
