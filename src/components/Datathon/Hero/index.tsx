import Image from 'next/image';
import HeroBackgroundImg from '@/public/ML/ml-hero-bg.svg';
import HeroBackgroundImgMobile from '@/public/ML/ml-hero-bg-2.jpg';
import LinkButton from '@/components/Button/LinkButton';
import hero from '@/public/Datathon/hero.png';

export default function DatathonHero() {
  return (
    // <>
    //   <div className="flex flex-col gap-8 xl:gap-12 max-sm:items-center">
    //     <h1 className="col-span-2 text-[#d9d9d9] text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl min-[1800px]:pb-[5rem] font-medium tracking-widest">
    //       DS3 Datathon
    //     </h1>
    //     <p className="text-white text-xl sm:text-2xl lg:text-4xl">
    //       1st&#x2014;2nd February 2025 ❅ In-person Event
    //     </p>
    //     {/* <LinkButton
    //       newTab
    //       href="https://docs.google.com/forms/d/e/1FAIpQLSc18s677jVayRPmfCKadP5hxRV1FsapaWSrX2nDR21dIe7sXg/viewform"
    //       prefetch={false}
    //       className="w-max mt-6 mr-auto"
    //       border="border-none"
    //       backgroundColor="bg-[#50D634]"
    //       paddingY="py-2"
    //       fontWeight="font-normal">
    //       Register Now !
    //     </LinkButton> */}
    //   </div>
    // </>
    <section className="relative w-screen h-screen flex flex-col items-center justify-center space-y-10 text-white overflow-hidden">
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
          DS3 Datathon
        </h1>
        <p className="p-5 lg:p-10 text-white text-xl md:text-2xl lg:text-3xl max-w-3xl text-center">
            1st&#x2014;2nd February 2025 ❅ In-person Event
        </p>
      </div>
    </section>
  );
}
