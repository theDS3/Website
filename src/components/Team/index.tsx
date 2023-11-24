import TeamCard from './TeamCard';
import { team } from './team-config';
import './TeamCard.css';

export default function Team() {
  const executives = team.Executives;

  return (
    <section id="team">
      <h2 className="text-gray-300 text-5xl font-bold tracking-wide pb-8 text-center">
        Our Team
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8">
        {executives.map((member) => (
          <TeamCard
            key={member.name}
            name={member.name}
            position={member.position}
            alt={member.alt}
            src={member.src}
          />
        ))}
      </div>
    </section>
  );
}
