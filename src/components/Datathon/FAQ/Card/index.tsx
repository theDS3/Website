'use client';

import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline';
import { SparklesIcon } from '@heroicons/react/24/outline';
import { FAQ } from '..';

export function FlipCard({ question, answer }: FAQ) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <ReactCardFlip
      isFlipped={isFlipped}
      flipDirection="vertical"
      infinite>
      <div
        className="flex flex-col items-center justify-center w-64 h-64 bg-[#300c3f] text-white rounded-lg border border-[#300c30] cursor-pointer shadow-lg"
        onClick={handleClick}>
        <QuestionMarkCircleIcon className="w-12 h-12 text-purple-300 mb-4" />
        <h3 className="text-lg font-bold text-center mx-4">{question}</h3>
      </div>

      <div
        className="flex flex-col items-center justify-center w-64 h-64 bg-[#5b0f79] text-white rounded-lg border border-[#8118a4] cursor-pointer shadow-lg"
        onClick={handleClick}>
        <SparklesIcon className="w-12 h-12 text-purple-400 mb-4" />
        <p className="text-center text-md font-medium mx-4">{answer}</p>
      </div>
    </ReactCardFlip>
  );
}
