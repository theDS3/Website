'use client';

import { useState, useEffect } from 'react';

export default function Outline() {
  const fall_timeline: string[] = [
    'Sept 20, 2024',
    'Oct 4, 2024',
    'Oct 18, 2024',
    'Nov 1, 2024',
    'Nov 15, 2024',
    'Nov 29, 2024',
  ];

  return (
    <section
      id="outline"
      className="relative flex flex-col items-center justify-center space-y-10">
      <div className="flex justify-center flex-col gap-8 xl:gap-12">
        <h1 className="justify-center col-span-2 text-[#d9d9d9] text-4xl font-medium tracking-widest md:text-5xl lg:text-7xl text-center sm:flex sm:justify-center">
          Outline
        </h1>

        <p className="text-center text-xl md:text-2xl">
          Located at: The Bridge Lab (ground floor of IC)
        </p>

        <div className="w-full max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-white">
            {fall_timeline.map((date, index) => (
              <div
                key={index}
                className="text-lg md:text-2xl p-8 rounded-full bg-[#13161b] shadow-xl text-center ">
                <div>{date}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
