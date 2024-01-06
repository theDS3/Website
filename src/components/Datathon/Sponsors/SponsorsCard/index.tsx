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
      style={{
        boxShadow: '8px 8px 0px 0px #c190f0',
        width: '185px',
        height: '110px',
      }}
      className="rounded-lg bg-white flex justify-center items-center">
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer">
        <Image
          src={logo}
          alt={name}
          quality={100}
          style={{ borderRadius: '10px' }}
        />
      </Link>
    </div>
  );
}
