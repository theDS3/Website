'use client';

import { useEffect, useState } from 'react';

interface Duration {
  months?: string;
  days?: string;
  hours?: string;
  minutes?: string;
  seconds?: string;
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
      let now = new Date().getTime();
      let difference = date.getTime() - now;

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
  }, []);

  return (
    <div className="min-w-screen min-h-screen flex items-center justify-center px-5 py-5">
      <div className="text-white">
        <h1 className="text-3xl text-center mb-3">
          {date.getFullYear()} Datathon is in ...
        </h1>
        <div className="text-6xl text-center flex w-full items-center justify-center select-none">
          <div className="w-24 mx-1 p-2 bg-white text-black rounded-lg">
            <div className="font-mono leading-none">{remainingTime.months}</div>
            <div className="font-mono uppercase text-sm leading-none">
              Months
            </div>
          </div>
          <div className="text-2xl mx-1 font-medium">:</div>
          <div className="w-27 mx-1 p-2 bg-white text-black rounded-lg">
            <div className="font-mono leading-none">{remainingTime.days}</div>
            <div className="font-mono uppercase text-sm leading-none">Days</div>
          </div>
          <div className="text-2xl mx-1 font-medium">:</div>
          <div className="w-24 mx-1 p-2 bg-white text-black rounded-lg">
            <div className="font-mono leading-none">{remainingTime.hours}</div>
            <div className="font-mono uppercase text-sm leading-none">
              Hours
            </div>
          </div>
          <div className="text-2xl mx-1 font-medium">:</div>
          <div className="w-24 mx-1 p-2 bg-white text-black rounded-lg">
            <div className="font-mono leading-none">
              {remainingTime.minutes}
            </div>
            <div className="font-mono uppercase text-sm leading-none">
              Minutes
            </div>
          </div>
          <div className="text-2xl mx-1 font-medium">:</div>
          <div className="w-24 mx-1 p-2 bg-white text-black rounded-lg">
            <div className="font-mono leading-none">
              {remainingTime.seconds}
            </div>
            <div className="font-mono uppercase text-sm leading-none">
              Seconds
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
