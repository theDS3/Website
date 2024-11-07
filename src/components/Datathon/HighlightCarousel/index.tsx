import Datathon_About from '@/public/Datathon/about-us.jpg';
import Image from 'next/image';

export default function AboutDatathon() {
  return (
    <section
      id="about-us"
      className="min-[620px]:py-[30vh]">
      <div className="flex justify-center flex-col gap-8 xl:gap-12 ">
        <h1 className="lg:justify-start col-span-2 text-white text-4xl font-medium tracking-widest md:text-5xl lg:text-7xl text-center sm:flex sm:justify-center">
          About DS3 Datathon
        </h1>
        <p className="text-white text-xl md:text-2xl lg:text-3xl -mt-5 text-center sm:text-left">
          Dive into the future of data science at DS3 Datathon! Unleash your
          skills over 2 intense days, solving real-world challenges in industry,
          academia, and government. Join us for a grand finale with powerhouse
          speakers from Microsoft, VectorAI, FGF Brands, The Score, and Klick
          Health! Elevate your data game - are you up for the challenge?
        </p>
      </div>
    </section>
  );
}
