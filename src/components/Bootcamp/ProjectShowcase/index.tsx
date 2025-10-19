import Image from 'next/image';
import TARS from '@/public/Bootcamp/Projects/TARS.jpg';
import Newt from '@/public/Bootcamp/Projects/NEWT.jpg';
import Glioblastoma from '@/public/Bootcamp/Projects/Glioblastoma.jpg';

export default function ProjectShowcase() {
  // Example project data (you can replace this later)
  const projects = [
    {
      name: 'TARS',
      link: 'https://www.canva.com/design/DAGi4Z5AbYU/V7MmUbVc2yVadOOsqqSSLQ/edit?utm_content=DAGi4Z5AbYU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
      image: TARS,
    },
    {
      name: 'Newt',
      link: 'https://www.canva.com/design/DAGi5be1Hvc/ys53n_rQ9OUwkmmcV3Zbhw/view?utm_content=DAGi5be1Hvc&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h64627ab119',
      image: Newt,
    },
    {
      name: 'ML-Powered Glioblastoma Detection',
      link: 'https://www.canva.com/design/DAGiZRsln6M/j_u_GqxqEHipekcnxeXzdA/edit?utm_content=DAGiZRsln6M&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
      image: Glioblastoma,
    },
  ];

  return (
    <section
      id="projectshowcase"
      className="flex flex-col items-center justify-center mt-20 space-y-10">
      <div className="flex flex-col items-center gap-6 xl:gap-10">
        <h1 className="text-[#d9d9d9] text-4xl md:text-6xl font-semibold tracking-widest text-center">
          Project Showcase
        </h1>
        <p className="text-[#b9b9b9] text-lg md:text-xl text-center max-w-3xl">
          Explore the innovative projects built by participants of the 2024 ML
          Bootcamp.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mt-10 px-6 xl:px-20">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block overflow-hidden rounded-2xl shadow-xl hover:shadow transition-all duration-300 transform hover:-translate-y-3">
            <Image
              src={project.image}
              alt={project.name}
              className="rounded-2xl object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-105"></div>
          </a>
        ))}
      </div>
    </section>
  );
}
