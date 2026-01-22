'use client';

import { useMemo, useState } from 'react';

import Leaderboard from '@/components/Datathon/Leaderboard';
import NavBar, { type Link } from '@/components/Navabr';
import { pastFinalDatathonLeaderboard } from '@/utils/datathon';
import YearSelect from '@/components/Datathon/YearSelect';

const links: Link[] = [
  { title: 'Home', href: '/' },
  { title: 'Hackathon', href: '/hackathon' },
];

export default function PastFinalDatathonLeaderboardClient() {
  const years = useMemo(() => {
    // Sort year options descending, i.e. most recent first
    return Object.keys(pastFinalDatathonLeaderboard).sort(
      (a, b) => Number(b) - Number(a),
    );
  }, []);

  const [selectedYear, setSelectedYear] = useState<string>(years[0] ?? '2025');

  const selectedLeaderboard = pastFinalDatathonLeaderboard[selectedYear];

  return (
    <>
      <NavBar links={links} />
      <main className="min-h-screen">
        <section className="flex flex-col items-center justify-center">
          <div className="container mx-auto my-8 py-10 text-white">
            <h1 className="mb-6 text-center text-5xl font-bold">
              Past Final Datathon Leaderboards
            </h1>

            <div className="mx-auto mb-6 max-w-5xl rounded-2xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm text-white/70">
                    Select a year to view its final leaderboard
                  </p>
                  <h2 className="text-xl font-semibold">
                    {selectedYear} Datathon Leaderboard
                  </h2>
                </div>

                <div className="flex items-center gap-3">
                  <span
                    id="lb-year-label"
                    className="text-sm font-medium text-white/80">
                    Year
                  </span>

                  <YearSelect
                    id="lb-year"
                    labelledBy="lb-year-label"
                    value={selectedYear}
                    onChange={setSelectedYear}
                    options={years}
                  />
                </div>
              </div>
            </div>

            <div className="mx-auto max-w-5xl">
              <Leaderboard
                leaderboard={selectedLeaderboard}
                description="Final scores are based on the private leaderboard on Kaggle and bonus points from in-person events."
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
