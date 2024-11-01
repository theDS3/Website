import Image from 'next/image';
import HeroBackgroundImg from '@/public/ML/ml-hero-bg.svg';
import HeroBackgroundImgMobile from '@/public/ML/ml-hero-bg-2.jpg';

export default function HighlightsHero() {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center space-y-10 text-white overflow-hidden">
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

      <div className="flex flex-col items-center gap-6 xl:gap-12 z-10">
        <h1 className="text-center text-[#d9d9d9] text-4xl md:text-5xl lg:text-7xl font-medium tracking-widest">
          Club Highlights
        </h1>
        <p className="p-5 lg:p-10 text-white text-xl md:text-2xl lg:text-3xl max-w-3xl text-center">
          Welcome to DS<sup>3</sup> Hall of Fame! <br/>Here are some of the projects we have worked on in the past and stats on the club's performance. 
        </p>
      </div>
    </section>
  );
}
