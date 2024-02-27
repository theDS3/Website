import { LeaderboardType, TeamInfo } from '@/db/models/leaderboard';

const pastFinalDatathonLeaderboard: Record<
  '2024',
  {
    timestamp: Date;
    type: LeaderboardType;
    data: TeamInfo[];
  }
> = {
  '2024': {
    timestamp: new Date('Jan 20 2024 06:42:39 PM'),
    type: 'final',
    data: [
      {
        name: 'GDSC',
        score: 283.52134,
        numAttempts: 29,
        bonus: 1.26248,
        finalScore: 357.93916,
        delta: '-',
      },
      {
        name: 'gstu',
        score: 282.455,
        numAttempts: 48,
        bonus: 1.26248,
        finalScore: 356.59293,
        delta: '-',
      },
      {
        name: 'Team Cobra',
        score: 280.98432,
        numAttempts: 61,
        bonus: 1.26248,
        finalScore: 354.73623,
        delta: '-',
      },
      {
        name: 'HimTortons',
        score: 278.9823,
        numAttempts: 44,
        bonus: 1.26248,
        finalScore: 352.20873,
        delta: '-',
      },
      {
        name: 'ABTV',
        score: 278.89816,
        numAttempts: 27,
        bonus: 1.26248,
        finalScore: 352.1025,
        delta: '-',
      },
      {
        name: 'Non-Trivial',
        score: 276.96748,
        numAttempts: 30,
        bonus: 1.26248,
        finalScore: 349.66506,
        delta: '+2',
      },
      {
        name: 'datamunchingbugs',
        score: 274.51326,
        numAttempts: 29,
        bonus: 1.19252,
        finalScore: 327.36217,
        delta: '+2',
      },
      {
        name: 'Ctrl+Alt+Defeat',
        score: 274.47625,
        numAttempts: 14,
        bonus: 1.19102,
        finalScore: 326.90561,
        delta: '+2',
      },
      {
        name: 'jaes',
        score: 277.89841,
        numAttempts: 55,
        bonus: 1.1754,
        finalScore: 326.6421,
        delta: '-3',
      },
      {
        name: 'csec',
        score: 273.94181,
        numAttempts: 23,
        bonus: 1.06,
        finalScore: 290.37832,
        delta: '+1',
      },
      {
        name: 'HAV',
        score: 277.08749,
        numAttempts: 45,
        bonus: 1,
        finalScore: 277.08749,
        delta: '-4',
      },
      {
        name: 'Linear Progression',
        score: 251.38792,
        numAttempts: 25,
        bonus: 1.0918,
        finalScore: 274.46533,
        delta: '-',
      },
      {
        name: 'Songjian Wu33',
        score: 183.72395,
        numAttempts: 34,
        bonus: 1.26248,
        finalScore: 231.94725,
        delta: '+2',
      },
      {
        name: 'Team Purple',
        score: 174.91033,
        numAttempts: 11,
        bonus: 1.26248,
        finalScore: 220.82026,
        delta: '+11',
      },
      {
        name: 'datavasp',
        score: 180.27617,
        numAttempts: 15,
        bonus: 1.20888,
        finalScore: 217.93248,
        delta: '+5',
      },
      {
        name: 'michael yackson',
        score: 179.90401,
        numAttempts: 13,
        bonus: 1.16986,
        finalScore: 210.46225,
        delta: '+5',
      },
      {
        name: 'Pandas',
        score: 186.53323,
        numAttempts: 32,
        bonus: 1.12551,
        finalScore: 209.94479,
        delta: '-3',
      },
      {
        name: 'Eastern Bloc-Chain',
        score: 179.63973,
        numAttempts: 3,
        bonus: 1.12432,
        finalScore: 201.97173,
        delta: '+4',
      },
      {
        name: 'WhatAreWe',
        score: 180.70966,
        numAttempts: 9,
        bonus: 1.0925,
        finalScore: 197.42445,
        delta: '-1',
      },
      {
        name: 'cordblasters',
        score: 180.63291,
        numAttempts: 5,
        bonus: 1.06067,
        finalScore: 191.59281,
        delta: '-1',
      },
      {
        name: 'ds3 trio team',
        score: 174.67674,
        numAttempts: 6,
        bonus: 1.08243,
        finalScore: 189.07572,
        delta: '+5',
      },
      {
        name: 'millionbugs',
        score: 177.12599,
        numAttempts: 9,
        bonus: 1.06,
        finalScore: 187.75355,
        delta: '+2',
      },
      {
        name: 'Univ of Waterloo',
        score: 187.2944,
        numAttempts: 7,
        bonus: 1,
        finalScore: 187.2944,
        delta: '-10',
      },
      {
        name: 'DataDawgs',
        score: 182.73047,
        numAttempts: 3,
        bonus: 1,
        finalScore: 182.73047,
        delta: '-8',
      },
      {
        name: '996',
        score: 182.37302,
        numAttempts: 4,
        bonus: 1,
        finalScore: 182.37302,
        delta: '-8',
      },
      {
        name: 'Osmosis 2.0',
        score: 179.12594,
        numAttempts: 24,
        bonus: 1,
        finalScore: 179.12594,
        delta: '-3',
      },
      {
        name: 'dataminds',
        score: 97.17423,
        numAttempts: 2,
        bonus: 1,
        finalScore: 97.17423,
        delta: '-',
      },
      {
        name: 'QuantRaccoons',
        score: 96.7287,
        numAttempts: 1,
        bonus: 1,
        finalScore: 96.7287,
        delta: '-',
      },
      {
        name: 'shuo0520',
        score: 82.98076,
        numAttempts: 2,
        bonus: 1.0609,
        finalScore: 88.03429,
        delta: '+1',
      },
      {
        name: 'Mateo Arcos',
        score: 84.44444,
        numAttempts: 2,
        bonus: 1,
        finalScore: 84.44444,
        delta: '-1',
      },
    ],
  },
};

export default pastFinalDatathonLeaderboard;
