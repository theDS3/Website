import Image from 'next/image';
import Link from 'next/link';

import { type StaticImageData } from 'next/image';

export interface Sponsors {
  name: string;
  logo: StaticImageData;
  link: string;
  className?: string;
}

export default function SponsorsCard({
  name,
  logo,
  link,
  className,
}: Sponsors) {
  return (
    <div
      className={`relative group rounded-xl bg-gradient-to-br from-[#1e1e2f] to-[#292943] p-1 shadow-lg transition-transform transform hover:scale-105 ${className}`}
    >
      <Link
        href={link}
        target="_blank"
        rel="noopener"
        className="block rounded-lg bg-white flex justify-center items-center h-36 w-64 p-6"
      >
        <Image
          src={logo}
          alt={name}
          quality={100}
          className="object-contain h-20 max-w-full"
        />
      </Link>
    </div>
  );
}

