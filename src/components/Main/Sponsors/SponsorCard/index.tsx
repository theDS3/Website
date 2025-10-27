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
      className={`relative group rounded-xl border bg-white p-1 shadow-lg transition-transform transform hover:scale-105 ${className}`}>
      <Link
        href={link}
        target="_blank"
        rel="noopener"
        className="block rounded-lg bg-white flex justify-center items-center
                   w-72 h-44 sm:w-80 sm:h-48 md:w-64 md:h-36 p-6">
        <Image
          src={logo}
          alt={name}
          quality={100}
          className="object-contain h-24 sm:h-28 md:h-20 max-w-full"
        />
      </Link>
    </div>
  );
}
