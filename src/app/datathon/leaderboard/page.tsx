import NavBar, { type Link } from '@/components/Navabr';
import { Metadata } from 'next';

import { type ILeaderboard } from '@/db/models/leaderboard';
import { getLeaderboardData } from '@/db/utils';

const links: Link[] = [
  { title: 'Home', href: '/datathon' },
  { title: 'Datathon', href: '/datathon' },
];

export const metadata: Metadata = {
  title: 'DS3 | Leaderboard',
  description: `${new Date().getFullYear()} Datathon Leaderboard`,
};

export const revalidate = 10;
export default async function DatathonLeaderboard() {
  const leaderboard: ILeaderboard = await getLeaderboardData();

  const datathonStartDate = new Date('2024/01/14 07:00:00');
  const currentDate = new Date();

  return (
    <>
      <NavBar links={links} />
      <main className="min-h-screen">
        <section className="flex flex-col items-center justify-center">
          <div className="container mx-auto my-8 text-white">
            <h2 className="text-4xl font-bold mb-4 text-center">
              2024 Datathon Leaderboard
            </h2>
            <>
              {!leaderboard ? (
                <p className="text-center text-xl">
                  {datathonStartDate < currentDate
                    ? 'No data available in the leaderboard.'
                    : `Datathon will start on ${datathonStartDate.toLocaleString()}`}
                </p>
              ) : (
                <>
                  <h3 className="text-center text-xl font-bold mb-4">
                    Last Updated: {leaderboard.timestamp.toLocaleString()}
                  </h3>
                  <table className="min-w-full border border-white">
                    <thead>
                      <tr>
                        <th className="py-2 px-4 border-b text-center">
                          Position
                        </th>
                        <th className="py-2 px-4 border-b text-center max-sm:hidden">
                          Delta
                        </th>
                        <th className="py-2 px-4 border-b text-center">Team</th>
                        <th className="py-2 px-4 border-b text-center max-sm:hidden">
                          Attempts
                        </th>
                        <th className="py-2 px-4 border-b text-center">
                          Score
                        </th>
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
                              team.delta.includes('-')
                                ? 'text-red-500'
                                : 'text-green-500'
                            }`}>
                            {team.delta.includes('-') &&
                            team.delta.length > 1 ? (
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
          </div>
        </section>
      </main>
    </>
  );
}
