'use client';

import TeamCard from './TeamCard';
import { team, type TeamMember } from './team-config';

export default function Team() {
  return (
    <section id="team">
      <h2 className="text-5xl font-bold tracking-wide pb-8 text-center">
        Our Team
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {team.Executives.map(({ name, position, src, alt }: TeamMember, id) => (
          <TeamCard
            key={id}
            name={name}
            position={position}
            alt={alt}
            src={src}
          />
        ))}
      </div>
    </section>
  );
}
