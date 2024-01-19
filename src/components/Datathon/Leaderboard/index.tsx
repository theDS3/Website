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

  const tableHeaderStyles = 'py-2 px-4 border-b text-center';
  const tableCellStyles = 'py-2 px-4 border-b border-gray-300 text-center';

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
          <p className="text-white text-xl w-10/12 text-center mx-auto mb-4">
            {description}
          </p>
          <table className="min-w-full border border-white text-white">
            <thead>
              <tr>
                <th className={tableHeaderStyles}>Position</th>
                <th
                  className={`${tableHeaderStyles} ${
                    showFinal ? 'max-lg:hidden' : 'max-sm:hidden'
                  }`}>
                  Delta
                </th>
                <th className={tableHeaderStyles}>Team</th>
                <th
                  className={`${tableHeaderStyles} ${
                    showFinal ? 'max-md:hidden' : 'max-sm:hidden'
                  }`}>
                  Attempts
                </th>
                <th
                  className={`${tableHeaderStyles} ${
                    showFinal && 'max-sm:hidden'
                  }`}>
                  Score
                </th>
                {showFinal && (
                  <th className={tableHeaderStyles + ' max-sm:hidden'}>
                    Bonus
                  </th>
                )}
                {showFinal && (
                  <th className={tableHeaderStyles}>Final Score</th>
                )}
              </tr>
            </thead>
            <tbody>
              {leaderboard.data.map((team, index) => (
                <tr key={index}>
                  <td className={tableCellStyles}>{index + 1}</td>
                  <td
                    className={`${tableCellStyles} ${
                      showFinal ? 'max-lg:hidden' : 'max-sm:hidden'
                    } ${
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
                  <td className={tableCellStyles}>{team.name}</td>
                  <td
                    className={`${tableCellStyles} ${
                      showFinal ? 'max-md:hidden' : 'max-sm:hidden'
                    }`}>
                    {team.numAttempts}
                  </td>
                  <td
                    className={`${tableCellStyles} ${
                      showFinal && 'max-sm:hidden'
                    }`}>
                    {team.score}
                  </td>
                  {showFinal && (
                    <td className={tableCellStyles + ' max-sm:hidden'}>
                      {team.bonus}
                    </td>
                  )}
                  {showFinal && (
                    <td className={tableCellStyles}>{team.finalScore}</td>
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
