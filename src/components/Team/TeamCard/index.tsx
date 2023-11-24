import Image from 'next/image';

import { type TeamMember } from '../team-config';
import './TeamCard.css';

export default function TeamCard({ name, position, src, alt }: TeamMember) {
  return (
    <div className="text-center grid justify-center items-center ">
      <div className="flex justify-center items-center">
        <Image
          src={src}
          alt={alt}
          className="rounded-full w-[300px] md:w-[150px] min-[1800px]:w-[240px]"
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
