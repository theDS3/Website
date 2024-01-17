import { type ILeaderboard, type TeamInfo } from '@/db/models/leaderboard';

interface LeaderboardProps {
  leaderboard: ILeaderboard;
  startDate: Date;
  description: string;
}

export default function Leaderboard({
  leaderboard,
  startDate,
  description,
}: LeaderboardProps) {
  const currentDate = new Date();

  const showFinal =
    leaderboard &&
    leaderboard.type === 'final' &&
    leaderboard.data.every(
      (team: TeamInfo) => 'bonus' in team && 'finalScore' in team,
    );

  return (
    <>
      {!leaderboard || leaderboard.data.length === 0 ? (
        <h2 className="text-center text-xl">
          {startDate < currentDate
            ? 'No data available in the leaderboard.'
            : `Datathon will start on ${startDate.toLocaleString()}`}
        </h2>
      ) : (
        <>
          <h2 className="text-center text-xl font-bold mb-4">
            Last Updated: {leaderboard.timestamp.toLocaleString()}
          </h2>
          <p className="text-white text-xl w-5/12 text-center mx-auto mb-4">
            {description}
          </p>
          <table className="min-w-full border border-white text-white">
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
                <th
                  className={`py-2 px-4 border-b text-center ${
                    showFinal && 'max-sm:hidden'
                  }`}>
                  Score
                </th>
                {showFinal && (
                  <th className="py-2 px-4 border-b text-center max-sm:hidden">
                    Bonus
                  </th>
                )}
                {showFinal && (
                  <th className="py-2 px-4 border-b text-center">
                    Final Score
                  </th>
                )}
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
                  {showFinal && (
                    <td className="py-2 px-4 border-b border-gray-300 text-center max-sm:hidden">
                      {team.bonus}
                    </td>
                  )}
                  {showFinal && (
                    <td className="py-2 px-4 border-b border-gray-300 text-center max-sm:hidden">
                      {team.finalScore}
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </>
  );
}
