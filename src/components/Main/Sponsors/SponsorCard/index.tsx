import Image from 'next/image';
import Link from 'next/link';
import { type StaticImageData } from 'next/image';

export type Sponsors = {
  name: string;
  logo: StaticImageData;
  link: string;
  className?: string;
};

export default function SponsorsCard({
  name,
  logo,
  link,
  className,
}: Sponsors) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={name}
      className="flex h-20 w-44 items-center justify-center">
      <Image
        src={logo}
        alt={name}
        className={`h-100 w-auto max-w-full object-contain opacity-70 brightness-0 invert transition-opacity duration-200 hover:opacity-100 ${className ?? ''}`}
      />
    </a>
  );
}
