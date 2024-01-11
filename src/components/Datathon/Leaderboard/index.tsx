'use client';

import { useEffect, useState } from 'react';
import { ITeamData } from '@/db/models/leaderboard';

export default function Leaderboard() {
  const [leaderboards, setLeaderboards] = useState<ITeamData[]>([]);
  const [lastUpdated, setLastUpdated] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Fetching data...');
        let response = await fetch('/api/leaderboard');
        console.log(response);
        let data = await response.json();
        console.log(data.timestamp);

        setLeaderboards(data.data);
        setLastUpdated(data.timestamp);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <section>
      <div className="container mx-auto my-8 text-white">
        <h2 className="text-4xl font-bold mb-4 text-center">Leaderboard</h2>
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <>
            {leaderboards.length === 0 ? (
              <p className="text-center">
                No data available in the leaderboard.
              </p>
            ) : (
              <>
                <h3 className="text-xl font-bold mb-4">
                  Last Updated: {lastUpdated}
                </h3>
                <table className="min-w-full border border-white">
                  <thead>
                    <tr>
                      <th className="py-2 px-4 border-b text-center">
                        Position
                      </th>
                      <th className="py-2 px-4 border-b text-center">Delta</th>
                      <th className="py-2 px-4 border-b text-center">Team</th>
                      <th className="py-2 px-4 border-b text-center">Score</th>
                      <th className="py-2 px-4 border-b text-center">
                        Attempts Left
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {leaderboards.map((team, index) => (
                      <tr key={index}>
                        <td className="py-2 px-4 border-b border-gray-300 text-center">
                          {index + 1}
                        </td>
                        <td
                          className={`py-2 px-4 border-b border-gray-300 text-center ${
                            team.delta.includes('-')
                              ? 'text-red-500'
                              : 'text-green-500'
                          }`}>
                          {team.delta.includes('-') && team.delta.length > 1 ? (
                            <span>&darr; {team.delta.replace('-', '')}</span>
                          ) : team.delta.includes('+') ? (
                            <span>&uarr; {team.delta.replace('+', '')}</span>
                          ) : (
                            <span>{team.delta}</span>
                          )}
                        </td>
                        <td className="py-2 px-4 border-b border-gray-300 text-center">
                          {team.team}
                        </td>
                        <td className="py-2 px-4 border-b border-gray-300 text-center">
                          {team.score}
                        </td>
                        <td className="py-2 px-4 border-b border-gray-300 text-center">
                          {team.attemptsLeft}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            )}
          </>
        )}
      </div>
    </section>
  );
}
