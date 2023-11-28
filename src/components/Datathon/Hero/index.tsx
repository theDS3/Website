import Image from 'next/image';

import { LinkButton } from '@/components/Button';
import hero from '@/public/Datathon/hero.png';

export default function DatathonHero() {
  return (
    <>
      <Image
        priority
        src={hero}
        alt="Data Science & Statistics Society Team Picture"
        className="rounded-3xl mb-8 sm:mb-0 sm:w-[500px] transition-all duration-300"
      />
      <div className="flex flex-col gap-8 xl:gap-12 max-sm:items-center">
        <h1 className="col-span-2 text-[#d9d9d9] text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl min-[1800px]:pb-[5rem] font-medium tracking-widest">
          DS3 Datathon
        </h1>
        <p className="text-white text-xl sm:text-2xl lg:text-4xl">
          January 20, 2024 ❅ In-person Event
        </p>
        <LinkButton
          newTab
          href="https://docs.google.com/forms/d/e/1FAIpQLSc18s677jVayRPmfCKadP5hxRV1FsapaWSrX2nDR21dIe7sXg/viewform"
          prefetch={false}
          className="w-max"
          buttonProps={{
            className: 'mt-6 mr-auto',
            border: 'border-none',
            backgroundColor: 'bg-[#50D634]',
            paddingY: 'py-2',
            children: 'Register Now !',
          }}
        />
      </div>
    </>
  );
}
