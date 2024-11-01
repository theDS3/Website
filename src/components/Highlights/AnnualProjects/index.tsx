'use client';
import Link from 'next/link';
import ProjectCard from './ProjectCard';
import DatathonPicture from '@/public/Highlights/2024-datathon.png';
import { link } from 'fs';

const projects = [
  {
    name: '2024 Datathon',
    logo: DatathonPicture,
    link: '',
    content: 'Datathon invites 100+ Participants to unleash their data science skills over 6  days to solve real-world challenges in industry, academia, and government.'
  },
  {
    name: 'ML Program',
    logo: DatathonPicture,
    link: '',
    content: 'ML bootcamp is an academic-year-long program aimed to build students’ foundation in Machine Learning. There’ll be a project showcase event in March.'
  },
  {
    name: 'ML Program',
    logo: DatathonPicture,
    link: '',
    content: 'ML bootcamp is an academic-year-long program aimed to build students’ foundation in Machine Learning. There’ll be a project showcase event in March.'
  },
];

export default function AnnualProjects() {
  return (
    <section
      id="annual-projects"
      className="flex flex-col items-center justify-center space-y-10">
      <div className="flex justify-center flex-col gap-8 xl:gap-12">
        <h1 className="lg:justify-start col-span-2 text-[#d9d9d9] text-4xl font-medium tracking-widest md:text-5xl lg:text-7xl text-center sm:flex sm:justify-center">
          Annual Projects
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mt-10">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            name={project.name}
            logo={project.logo}
            link={project.link}
            content={project.content} 
          />
        ))}
      </div>
    </section>
  );
}
