import React from 'react';
import Image from 'next/image';
import { TeamMember } from './team-config';

export default function TeamCard({ name, position, alt, src }: TeamMember) {
  return (
    <div className="text-center grid justify-center items-center">
      <div className="flex justify-center items-center">
        <Image
          src={src}
          alt={alt}
          width={250}
          height={250}
          className="rounded-full"
        />
      </div>
      <div className="py-5">
        <h3 className="text-xl font-bold text-red-400 capitalize relative mb-5">
          {name}
          <span className="before-after-line" />
        </h3>
        <p className="text-base capitalize text-white">
          <span className="bullet" />
          {position}
        </p>
      </div>
    </div>
  );
}
