import TeamCard, { type TeamMember } from '@/components/TeamCard';

export default function TeamSection({
  id,
  title,
  members,
}: {
  id: string;
  title: string;
  members: TeamMember[];
}) {
  return (
    <section id={id} className="scroll-mt-28 mb-24">
      <h2 className="text-5xl font-bold tracking-wide pb-8 text-center">
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {members.map((member, i) => (
          <TeamCard key={i} {...member} />
        ))}
      </div>
    </section>
  );
}

