import React from 'react';
import TeamCard from './teamCard';
import teamData from '../../app/api/team.json';

const Team: React.FC = () => {
    return (
        <section id='team'>
            <h2 className="text-gray-300 text-5xl font-bold tracking-wide pb-8 text-center">Our Team</h2>
            <div className="pb-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-8">
                    {teamData.Executives.map((member) => (
                        <TeamCard
                            key={member.name}
                            name={member.name}
                            position={member.position}
                            alt={member.alt}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
