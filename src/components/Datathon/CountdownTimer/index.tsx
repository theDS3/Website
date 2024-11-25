'use client';

import { useEffect, useState } from 'react';

interface Duration {
  months: string;
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

interface CountdownTimerProps {
  date: Date;
}

const padNum = (num: number) => {
  return num.toString().length === 1 ? `0${num}` : num.toString();
};

export default function CountdownTimer({ date }: CountdownTimerProps) {
  const [remainingTime, setRemainingTime] = useState<Duration>({
    months: '0',
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  useEffect(() => {
    if (date.getTime() < new Date().getTime()) return;
    const updateRemainingTime = setInterval(() => {
      const now = new Date().getTime();
      const difference = date.getTime() - now;

      setRemainingTime({
        months: Math.floor(difference / (1000 * 60 * 60 * 24 * 30)).toString(),
        days: padNum(
          Math.floor(
            (difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24),
          ),
        ),
        hours: padNum(
          Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        ),
        minutes: padNum(
          Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        ),
        seconds: padNum(Math.floor((difference % (1000 * 60)) / 1000)),
      });
    }, 1000);

    return () => clearInterval(updateRemainingTime);
  }, [date]);

  return (
    <div className="text-white">
      <h1 className="text-5xl max-md:text-4xl text-center mb-6 font-bold">
        {date.getFullYear()} Datathon is in ...
      </h1>
      <div className="text-7xl md:text-8xl text-center flex w-full items-center justify-center flex-wrap select-none">
        {remainingTime.months !== '0' && (
          <div className="w-32 mx-2 max-lg:my-4 p-4 bg-white text-black rounded-lg">
            <div className="font-mono leading-none">{remainingTime.months}</div>
            <div className="font-mono uppercase text-lg leading-none">
              Months
            </div>
          </div>
        )}
        {remainingTime.days !== '00' && (
          <div className="w-32 mx-2 max-lg:my-4 p-4 bg-white text-black rounded-lg">
            <div className="font-mono leading-none">{remainingTime.days}</div>
            <div className="font-mono uppercase text-lg leading-none">Days</div>
          </div>
        )}
        {remainingTime.hours !== '00' && (
          <div className="w-32 mx-2 max-lg:my-4 p-4 bg-white text-black rounded-lg">
            <div className="font-mono leading-none">{remainingTime.hours}</div>
            <div className="font-mono uppercase text-lg leading-none">
              Hours
            </div>
          </div>
        )}
        {remainingTime.minutes !== '00' && (
          <div className="w-32 mx-2 max-lg:my-4 p-4 bg-white text-black rounded-lg">
            <div className="font-mono leading-none">
              {remainingTime.minutes}
            </div>
            <div className="font-mono uppercase text-lg leading-none">
              Minutes
            </div>
          </div>
        )}
        {remainingTime.seconds !== '00' && (
          <div className="w-32 mx-2 p-4 bg-white text-black rounded-lg">
            <div className="font-mono leading-none">
              {remainingTime.seconds}
            </div>
            <div className="font-mono uppercase text-lg leading-none">
              Seconds
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
