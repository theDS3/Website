import Image from 'next/image';
import Link from 'next/link';

import { type StaticImageData } from 'next/image';
import { Content } from 'next/font/google';
import { Button } from '@/components/Button';

export interface Project {
  name: string;
  logo: StaticImageData;
  link: string;
  className?: string;
  content: string;
}

export default function ProjectCard({
  name,
  logo,
  link,
  className,
  content,
}: Project) {
  return (
    <div
      className="flex flex-col bg-[#2f0d3f] rounded-xl shadow-lg overflow-hidden text-white w-[23rem]"
    >
      <Image
        src={logo}
        alt={name}
        quality={100}
        className="rounded-t-xl h-52 object-cover w-full"
      />
      <div className='flex flex-col p-6 flex-grow items-center'>
        <h2 className="text-2xl font-bold mb-4">{name}</h2>
        <p className="text-base mb-2">{content}</p>
      </div>
      <div className='flex justify-center pb-6'>
        <Link href={link} target="_blank" rel="noopener">
          <Button className="hover:bg-slate-50 hover:text-gray-950">
            More
          </Button>
        </Link>
      </div>
    </div>
  );
}
