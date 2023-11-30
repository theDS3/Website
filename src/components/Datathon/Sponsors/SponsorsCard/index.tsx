'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { type StaticImageData } from 'next/image';

export interface Sponsors {
  name: string;
  logo: StaticImageData;
  link: string;
}

export default function SponsorsCard({ name, logo, link }: Sponsors) {
  return (
    <motion.div
      style={{
        boxShadow: '8px 8px 0px 0px #c190f0',
        width: '185px',
        height: '110px',
      }}
      className="rounded-lg bg-white flex justify-center items-center"
      whileHover={{ scale: 1.1 }}>
      <Link
        href={link}
        target="_blank">
        <Image
          src={logo}
          alt={name}
        />
      </Link>
    </motion.div>
  );
}
