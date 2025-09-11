import Image from 'next/image';
import LinkButton from '@/components/Button/LinkButton';
import HeroBackgroundImg from '@/public/ML/ml-hero-bg.svg';
import HeroBackgroundImgMobile from '@/public/ML/ml-hero-bg-2.jpg';
import Time from '@/public/ML/time.svg';
import Location from '@/public/ML/location.svg';
import { time } from 'console';




export default function About_ML() {
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
          Agentic AI Bootcamp
        </h1>
        <p className="p-5 lg:p-10 text-white text-xl md:text-2xl lg:text-3xl max-w-3xl text-center border border-white/20 rounded-lg">
          Curious about AI but don&apos;t know where to start? DS3&apos;s
          Agentic AI Bootcamp gives you the tools, guidance, and skills to dive
          into Agentic AI. <br></br>Come join us and start your journey today!
        </p>
        <div className="flex flex-col items-center gap-10 text-center">
          <div className="flex items-center gap-4">
            <Image
              src={Time}
              alt="Time"
              width={48}
              height={48}
            />
            <span className="text-3xl">Bi-weekly on Fridays, 4–6 PM</span>
          </div>
          <div className="flex items-center gap-4">
            <Image
              src={Location}
              alt="Location"
              width={48}
              height={48}
            />
            <span className="text-3xl">IA 2040 (The Cloud)</span>
          </div>
          <div className="w-4/5 h-1 bg-purple-500/30 rounded-full shadow-[0_0_15px_rgba(128,0,255,0.4)] my-8"></div>

          <LinkButton
            href="https://docs.google.com/forms/d/e/1FAIpQLSfJZAt3pJjqug9BRrbjaGxWegBq5liuU-6yP-1TQ4G1zXM9NA/viewform?usp=dialog" // Update new form link for next year event
            newTab={true}
            className="text-lg md:text-xl lg:text-2xl font-medium shadow-lg transition-all hidden" // Button Hidden here
          >
            Project Showcase Sign Up!
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
