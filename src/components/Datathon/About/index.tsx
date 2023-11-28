import Image from 'next/image';
import Datathon_About from '@/public/Datathon/about-us.jpg';

export default function About_Datathon() {
  return (
    <section
      id="about-us"
      className="grid grid-cols-[1fr] gap-3 min-[620px]:grid-cols-[1fr_2fr] min-[620px]:gap-10">
      <Image
        priority
        src={Datathon_About}
        alt="Data Science & Statistics Society Team Picture"
        className="rounded-3xl mb-4 sm:mb-0 sm:w-[500px] transition-all duration-300"
      />

      <div className="flex justify-center flex-col gap-8 xl:gap-12 ">
        <h1 className="lg:justify-start col-span-2 text-white text-4xl font-medium tracking-widest md:text-5xl lg:text-7xl text-center sm:flex sm:justify-center">
          About Datathon
        </h1>

        <p className="text-white text-xl md:text-2xl lg:text-3xl -mt-5 text-center sm:text-left">
          {' '}
          🚀 Dive into the future of data science at DS3 Datathon! 📊 Unleash
          your skills over 6 intense days, solving real-world challenges in
          industry, academia, and government. Join us for a grand finale with
          powerhouse speakers from Microsoft, VectorAI, FGF Brands, The Score,
          and Klick Health! Elevate your data game - are you up for the
          challenge? 🏆
        </p>
      </div>
    </section>
  );
}
