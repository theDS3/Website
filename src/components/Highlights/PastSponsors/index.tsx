'use client';
import Link from 'next/link';

export default function PastSponsors() {
  return (
    <section
      id="sponsors"
      className="flex flex-col items-center justify-center space-y-10">
      <div className="flex justify-center flex-col gap-8 xl:gap-12">
        <h1 className="lg:justify-start col-span-2 text-[#d9d9d9] text-4xl font-medium tracking-widest md:text-5xl lg:text-7xl text-center sm:flex sm:justify-center">
          Past Sponsors
        </h1>
      </div>
    </section>
  );
}
