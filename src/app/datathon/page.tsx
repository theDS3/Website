import { Metadata } from 'next';

import LinkButton from '@/components/Button/LinkButton';
import CountdownTimer from '@/components/Datathon/CountdownTimer';
import NavBar from '@/components/Navabr';

import { datathonStartDate, isDatathonWeek } from '@/utils/datathon';

export const metadata: Metadata = {
  title: `DS3 | ${datathonStartDate.getFullYear()} Datathon`,
  description: `The ${datathonStartDate.getFullYear()} Datathon ${datathonStartDate > new Date() ? 'is' : 'was'} held on ${datathonStartDate.toDateString()} at
    ${datathonStartDate.getHours()}:${datathonStartDate.getMinutes()}:${datathonStartDate.getSeconds()} EST.`,
};

export default function Datathon() {
  const layoutStyle =
    'min-w-screen min-h-screen flex items-center justify-center px-5 py-5';
  return (
    <>
      <NavBar links={[]} />
      <main>
        {!isDatathonWeek() ? (
          <div className={`${layoutStyle} flex-col gap-8`}>
            <CountdownTimer date={datathonStartDate} />
            <p className="text-white text-2xl text-center">
              Take a look at the 2024 Leaderboard!
            </p>
            <LinkButton href="/datathon/leaderboard/past">→</LinkButton>
          </div>
        ) : (
          <div className={layoutStyle}>
            <div className="text-white">
              <h1 className="text-7xl text-center mb-3">
                {datathonStartDate.getFullYear()} Datathon will here soon!
              </h1>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
