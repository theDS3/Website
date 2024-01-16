import { ILeaderboard } from '@/db/models/leaderboard';

interface LeaderboardProps {
  leaderboard: ILeaderboard;
  startDate: Date;
}

export default function Leaderboard({
  leaderboard,
  startDate,
}: LeaderboardProps) {
  const currentDate = new Date();

  return (
    <>
      {!leaderboard || leaderboard.data.length === 0 ? (
        <p className="text-center text-xl">
          {startDate < currentDate
            ? 'No data available in the leaderboard.'
            : `Datathon will start on ${startDate.toLocaleString()}`}
        </p>
      ) : (
        <>
          <h3 className="text-center text-xl font-bold mb-4">
            Last Updated: {leaderboard.timestamp.toLocaleString()}
          </h3>
          <table className="min-w-full border border-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b text-center">Position</th>
                <th className="py-2 px-4 border-b text-center max-sm:hidden">
                  Delta
                </th>
                <th className="py-2 px-4 border-b text-center">Team</th>
                <th className="py-2 px-4 border-b text-center max-sm:hidden">
                  Attempts
                </th>
                <th className="py-2 px-4 border-b text-center">Score</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.data.map((team, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border-b border-gray-300 text-center">
                    {index + 1}
                  </td>
                  <td
                    className={`py-2 px-4 border-b border-gray-300 text-center max-sm:hidden ${
                      team.delta.length === 1
                        ? 'text-white'
                        : team.delta.includes('-')
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
                    {team.name}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-300 text-center max-sm:hidden">
                    {team.numAttempts}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-300 text-center">
                    {team.score}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </>
  );
}
