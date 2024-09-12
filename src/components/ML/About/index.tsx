import Image from 'next/image';

export default function About_ML() {
  return (
    <section className="flex flex-col items-center justify-center space-y-10 text-white">
      <div className="flex justify-center flex-col gap-8 xl:gap-12 ">
        <h1 className="justify-center col-span-2 text-white text-4xl font-medium tracking-widest md:text-5xl lg:text-7xl  flex ">
          About ML Boot Camp
        </h1>
        <p className="text-white text-xl md:text-2xl lg:text-3xl -mt-5 text-justify  sm:text-left">
          New to machine learning? No problem. DS3's ML bootcamp brings forth
          all the tools and help needed in building your foundation in the world
          of ML. Come join us to dive into the "next big thing"!
        </p>
      </div>
    </section>
  );
}
