import Image from 'next/image';
import fillerImg from '@/public/logo.png';

export default function ProjectShowcase() {
  // Example project data (you can replace this later)
  const projects = [
    {
      name: 'Project 1',
      repo: 'https://github.com/',
      image: fillerImg,
    },
    {
      name: 'Project 2',
      repo: 'https://github.com/',
      image: fillerImg,
    },
    {
      name: 'Project 3',
      repo: 'https://github.com/',
      image: fillerImg,
    },
    {
      name: 'Project 4',
      repo: 'https://github.com/',
      image: fillerImg,
    },
  ];

  return (
    <section
      id="projectshowcase"
      className="flex flex-col items-center justify-center space-y-10 mt-20">
      <div className="flex justify-center flex-col gap-8 xl:gap-12">
        <h1 className="col-span-2 text-[#d9d9d9] text-4xl font-medium tracking-widest md:text-5xl lg:text-7xl text-center">
          Project Showcase
        </h1>
        <p className="text-[#d9d9d9] text-lg md:text-xl text-center">
          Explore some of the amazing projects created by participants of the
          2024 ML Bootcamp.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="px-8 py-6 rounded-lg shadow-xl flex flex-col justify-between max-w-80 w-full bg-[#13161b] hover:bg-[#2f0d3f] transition-all duration-200">
            <div className="p-4 bg-transparent rounded-2xl">
              <Image
                src={project.image}
                alt={project.name}
                className="rounded-md"
                width={300}
                height={180}
              />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white text-center">
              {project.name}
            </h3>

            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600 hover:underline text-center">
              View Repository →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
