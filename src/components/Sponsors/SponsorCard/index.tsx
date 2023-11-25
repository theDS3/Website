'use client';

import { Sponsor } from '../sponsor-config';

export default function SponsorCard({ text, author, position }: Sponsor) {
  return (
    <div className="mx-auto rounded-lg bg-[#13161b] shadow-xl p-5 flex flex-col max-w-md lg:max-w-xl">
      <p className="text-2xl pb-2">{text}</p>
      <p className="text-sm font-bold text-right pb-1 pt-8">{author}</p>
      <p className="text-xs font-medium text-right pb-1">{position}</p>
    </div>
  );
}
