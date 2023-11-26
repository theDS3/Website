import Image from 'next/image';
import Team from '@/public/team.jpg';

export default function About_Datathon() {
  return (
    <section
      id="about"
      className="grid grid-cols-[1fr] gap-3 min-[620px]:grid-cols-[1fr_2fr] min-[620px]:gap-10">
      <Image
        priority
        src={Team}
        alt="Data Science & Statistics Society Team Picture"
        className="mb-8 rounded-3xl"
      />
      <div className="flex justify-center flex-col gap-8 xl:gap-12 lg:ml-20">
        {/* remove the margin if needed */}
        <h1 className="justify-start col-span-2 text-white text-4xl font-medium tracking-widest md:text-5xl lg:text-7xl">
          About Datathon
        </h1>

        <p className="text-white text-xl md:text-2xl lg:text-3xl -mt-5">
          Lorem ipsum dolor sit amet. Et inventore accusantium id possimus nihil
          et rerum exercitationem qui nostrum quisquam aut amet voluptate.
        </p>
      </div>
    </section>
  );
}
