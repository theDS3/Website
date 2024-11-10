import Image from 'next/image';
import HeroBackgroundImgMobile from '@/public/ML/ml-hero-bg-2.jpg';

export default function About_Datathon() {
  return (
    <section
      id="about-us"
      className="flex justify-center place-items-center grid-cols-[1fr] min-[620px]:grid-cols-[1fr_2fr] min-[620px]:gap-10 pt-72"
    >
      <div className="inset-0 -z-30">
        <Image
          src={HeroBackgroundImgMobile}
          alt="Background"
          fill
          priority
          className="hidden md:block object-cover"
        />
      </div>

      <div className="flex justify-center flex-col gap-8 xl:gap-12 text-wrap">
        <h1 className="lg:justify-center col-span-2 text-white text-4xl font-bold tracking-widest md:text-5xl lg:text-7xl text-center sm:flex sm:justify-center">
          Datathon
        </h1>
        <p className="lg:justify-center col-span-2 text-gray-500 text-4xl font-light tracking-widest md:text-xl lg:text-3xl text-center sm:flex sm:justify-center">
          1st - 2nd February 2025
        </p>
        <p className=",justify-center text-white text-xl md:text-2xl lg:text-3xl -mt-5 text-center sm:text-left">
          As our flagship event, the Datathon is our biggest event of the year with over 200 participants including
          participants, volunteers, and sponsors. Participants unleash their data science skills over 6 intense days to
          solve real-world challenges in industry, academia, and government.
        </p>
        <p className="justify-center text-white text-xl md:text-2xl lg:text-3xl -mt-5 text-center sm:text-left">
          Throughout, DS3 hosts networking activities, workshops, and invites speakers from our sponsors to help equip
          students with the tools to succeed. The in-person grand finale invites sponsors to hold sessions, set up a
          booth, watch presentations by the top teams, and join the award ceremony.
        </p>
      </div>
    </section>
  );
}

