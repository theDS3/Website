import { connectDB } from '@/db/config';
import React from 'react';
import Leaderboard, { ITeamData } from '@/db/models/leaderboard';

export default async function LeaderboardTable() {
  connectDB();

  const leaderboards = await Leaderboard.find({})
    .sort({ timestamp: -1 })
    .limit(1)
    .exec();
  const latestLeaderboard = leaderboards[0];
  latestLeaderboard.data.sort((a: ITeamData, b: ITeamData) => {
    if (a.score > b.score) {
      return -1;
    } else if (a.score < b.score) {
      return 1;
    } else {
      return 0;
    }
  });

  return (
    <section>
      <div className="container mx-auto my-8 text-white">
        <h2 className="text-4xl font-bold mb-4 text-center">Leaderboard</h2>
        <h3 className="text-xl font-bold mb-4">
          Last Updated: {leaderboards[0].timestamp.toLocaleString()}
        </h3>
        <table className="min-w-full border border-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-center">Position</th>
              <th className="py-2 px-4 border-b text-center">Team</th>
              <th className="py-2 px-4 border-b text-center">Score</th>
              <th className="py-2 px-4 border-b text-center">Attempts Left</th>
              <th className="py-2 px-4 border-b text-center">Delta</th>
            </tr>
          </thead>
          <tbody>
            {leaderboards[0].data.map((data: ITeamData, index: number) => (
              <tr key={data.team}>
                <td className="py-2 px-4 border-b border-gray-300 text-center">
                  {index + 1}
                </td>
                <td className="py-2 px-4 border-b border-gray-300 text-center">
                  {data.team}
                </td>
                <td className="py-2 px-4 border-b border-gray-300 text-center">
                  {data.score}
                </td>
                <td className="py-2 px-4 border-b border-gray-300 text-center">
                  {data.attemptsLeft}
                </td>
                <td
                  className={`py-2 px-4 border-b border-gray-300 text-center ${
                    data.delta.includes('-') ? 'text-red-500' : 'text-green-500'
                  }`}>
                  {data.delta.includes('-') && data.delta.length > 1 ? (
                    <span>&darr; {data.delta.replace('-', '')}</span>
                  ) : data.delta.includes('+') ? (
                    <span>&uarr; {data.delta.replace('+', '')}</span>
                  ) : (
                    <span>{data.delta}</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
