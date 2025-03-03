import { LeaderboardContent } from '@/db/models/leaderboard';

export const datathonStartDate = new Date('Feb 17, 2026 10:00:00');
export const datathonEndDate = new Date('Feb 22, 2026 10:00:00');

export const isDatathonWeek = (): boolean => {
  return new Date() >= datathonStartDate && new Date() <= datathonEndDate;
};

export const pastFinalDatathonLeaderboard: Record<string, LeaderboardContent> =
  {
    '2025': {
      timestamp: new Date('Feb 22 2025 11:35:33 PM'),
      type: 'final',
      standings: [
        {
         "name":"SGD",
         "score":251.8009,
         "attempts":20,
         "bonus":1.1236,
         "finalScore":282.92349,
         "delta":"-"
        },
        {
         "name":"The Outliers",
         "score":245.44177,
         "attempts":11,
         "bonus":1.1236,
         "finalScore":275.77837,
         "delta":"-"
        },
        {
         "name":"model.fit() spammers",
         "score":239.95271,
         "attempts":33,
         "bonus":1.1236,
         "finalScore":269.61086,
         "delta":"-"
        },
        {
         "name":"CRJL",
         "score":234.58097,
         "attempts":15,
         "bonus":1.1236,
         "finalScore":263.57518,
         "delta":"-"
        },
        {
         "name":"Thomas Kielstra Fanclub",
         "score":231.11343,
         "attempts":9,
         "bonus":1.1236,
         "finalScore":259.67905,
         "delta":"-"
        },
        {
         "name":"LSGS",
         "score":229.49864,
         "attempts":15,
         "bonus":1.1236,
         "finalScore":257.86467,
         "delta":"+1"
        },
        {
         "name":"We love Kang So-hee",
         "score":223.8821,
         "attempts":17,
         "bonus":1.1236,
         "finalScore":251.55393,
         "delta":"+1"
        },
        {
         "name":"Shallow Learning",
         "score":218.95125,
         "attempts":11,
         "bonus":1.1236,
         "finalScore":246.01362,
         "delta":"+1"
        },
        {
         "name":"LeCoders",
         "score":217.65867,
         "attempts":10,
         "bonus":1.09202,
         "finalScore":237.68871,
         "delta":"+1"
        },
        {
         "name":"Random Forest",
         "score":230.08137,
         "attempts":19,
         "bonus":1.0,
         "finalScore":230.08137,
         "delta":"-4"
        },
        {
         "name":"import pandas",
         "score":217.5,
         "attempts":6,
         "bonus":1.0,
         "finalScore":217.5,
         "delta":"-"
        },
        {
         "name":"GogoGY",
         "score":217.4076,
         "attempts":15,
         "bonus":1.0,
         "finalScore":217.4076,
         "delta":"-"
        },
        {
         "name":"DS3 Datathon25",
         "score":149.23313,
         "attempts":9,
         "bonus":1.0,
         "finalScore":149.23313,
         "delta":"-"
        },
        {
         "name":"MohDamaj",
         "score":138.85802,
         "attempts":5,
         "bonus":1.0,
         "finalScore":138.85802,
         "delta":"-"
        },
        {
         "name":"wasd",
         "score":138.04616,
         "attempts":6,
         "bonus":1.0,
         "finalScore":138.04616,
         "delta":"-"
        },
        {
         "name":"SomeTeamName",
         "score":124.61954,
         "attempts":3,
         "bonus":1.0,
         "finalScore":124.61954,
         "delta":"-"
        },
        {
         "name":"Aileenylss2",
         "score":120.00897,
         "attempts":3,
         "bonus":1.0,
         "finalScore":120.00897,
         "delta":"-"
        },
        {
         "name":"Tianxu Kao",
         "score":100.0,
         "attempts":4,
         "bonus":1.0,
         "finalScore":100.0,
         "delta":"-"
        },
        {
         "name":"ReeseChocolates",
         "score":100.0,
         "attempts":7,
         "bonus":1.0,
         "finalScore":100.0,
         "delta":"-"
        },
        {
         "name":"Lone Analyst",
         "score":97.5,
         "attempts":2,
         "bonus":1.0,
         "finalScore":97.5,
         "delta":"-"
        },
        {
         "name":"Team Team",
         "score":96.47206,
         "attempts":2,
         "bonus":1.0,
         "finalScore":96.47206,
         "delta":"-"
        },
        {
         "name":"JustinYukunWang",
         "score":96.20689,
         "attempts":1,
         "bonus":1.0,
         "finalScore":96.20689,
         "delta":"-"
        },
        {
         "name":"WhatAreWe",
         "score":95.17982,
         "attempts":4,
         "bonus":1.0,
         "finalScore":95.17982,
         "delta":"-"
        },
        {
         "name":"Morgan Huang",
         "score":95.0,
         "attempts":1,
         "bonus":1.0,
         "finalScore":95.0,
         "delta":"-"
        },
        {
         "name":"Kevin Hou Zhong",
         "score":93.48482,
         "attempts":2,
         "bonus":1.0,
         "finalScore":93.48482,
         "delta":"-"
        },
        {
         "name":"Vo Hoang Nam Pham",
         "score":77.3665,
         "attempts":5,
         "bonus":1.0,
         "finalScore":77.3665,
         "delta":"-"
        },
        {
         "name":"ANOVAvengers",
         "score":25.45691,
         "attempts":2,
         "bonus":1.0,
         "finalScore":25.45691,
         "delta":"-"
        }
       ],
    },
    '2024': {
      timestamp: new Date('Jan 20 2024 06:42:39 PM'),
      type: 'final',
      standings: [
        {
          "name": '🏆 GDSC',
          "score": 283.52134,
          "attempts": 29,
          "bonus": 1.26248,
          "finalScore": 357.93916,
          "delta": '-',
        },
        {
          "name": 'gstu',
          "score": 282.455,
          "attempts": 48,
          "bonus": 1.26248,
          "finalScore": 356.59293,
          "delta": '-',
        },
        {
          "name": 'Team Cobra',
          "score": 280.98432,
          "attempts": 61,
          "bonus": 1.26248,
          "finalScore": 354.73623,
          "delta": '-',
        },
        {
          "name": 'HimTortons',
          "score": 278.9823,
          "attempts": 44,
          "bonus": 1.26248,
          "finalScore": 352.20873,
          "delta": '-',
        },
        {
          "name": 'ABTV',
          "score": 278.89816,
          "attempts": 27,
          "bonus": 1.26248,
          "finalScore": 352.1025,
          "delta": '-',
        },
        {
          "name": 'Non-Trivial',
          "score": 276.96748,
          "attempts": 30,
          "bonus": 1.26248,
          "finalScore": 349.66506,
          "delta": '+2',
        },
        {
          "name": 'datamunchingbugs',
          "score": 274.51326,
          "attempts": 29,
          "bonus": 1.19252,
          "finalScore": 327.36217,
          "delta": '+2',
        },
        {
          "name": 'Ctrl+Alt+Defeat',
          "score": 274.47625,
          "attempts": 14,
          "bonus": 1.19102,
          "finalScore": 326.90561,
          "delta": '+2',
        },
        {
          "name": 'jaes',
          "score": 277.89841,
          "attempts": 55,
          "bonus": 1.1754,
          "finalScore": 326.6421,
          "delta": '-3',
        },
        {
          "name": 'csec',
          "score": 273.94181,
          "attempts": 23,
          "bonus": 1.06,
          "finalScore": 290.37832,
          "delta": '+1',
        },
        {
          "name": 'HAV',
          "score": 277.08749,
          "attempts": 45,
          "bonus": 1,
          "finalScore": 277.08749,
          "delta": '-4',
        },
        {
          "name": 'Linear Progression',
          "score": 251.38792,
          "attempts": 25,
          "bonus": 1.0918,
          "finalScore": 274.46533,
          "delta": '-',
        },
        {
          "name": 'Songjian Wu33',
          "score": 183.72395,
          "attempts": 34,
          "bonus": 1.26248,
          "finalScore": 231.94725,
          "delta": '+2',
        },
        {
          "name": 'Team Purple',
          "score": 174.91033,
          "attempts": 11,
          "bonus": 1.26248,
          "finalScore": 220.82026,
          "delta": '+11',
        },
        {
          "name": 'datavasp',
          "score": 180.27617,
          "attempts": 15,
          "bonus": 1.20888,
          "finalScore": 217.93248,
          "delta": '+5',
        },
        {
          "name": 'michael yackson',
          "score": 179.90401,
          "attempts": 13,
          "bonus": 1.16986,
          "finalScore": 210.46225,
          "delta": '+5',
        },
        {
          "name": 'Pandas',
          "score": 186.53323,
          "attempts": 32,
          "bonus": 1.12551,
          "finalScore": 209.94479,
          "delta": '-3',
        },
        {
          "name": 'Eastern Bloc-Chain',
          "score": 179.63973,
          "attempts": 3,
          "bonus": 1.12432,
          "finalScore": 201.97173,
          "delta": '+4',
        },
        {
          "name": 'WhatAreWe',
          "score": 180.70966,
          "attempts": 9,
          "bonus": 1.0925,
          "finalScore": 197.42445,
          "delta": '-1',
        },
        {
          "name": 'cordblasters',
          "score": 180.63291,
          "attempts": 5,
          "bonus": 1.06067,
          "finalScore": 191.59281,
          "delta": '-1',
        },
        {
          "name": 'ds3 trio team',
          "score": 174.67674,
          "attempts": 6,
          "bonus": 1.08243,
          "finalScore": 189.07572,
          "delta": '+5',
        },
        {
          "name": 'millionbugs',
          "score": 177.12599,
          "attempts": 9,
          "bonus": 1.06,
          "finalScore": 187.75355,
          "delta": '+2',
        },
        {
          "name": 'Univ of Waterloo',
          "score": 187.2944,
          "attempts": 7,
          "bonus": 1,
          "finalScore": 187.2944,
          "delta": '-10',
        },
        {
          "name": 'DataDawgs',
          "score": 182.73047,
          "attempts": 3,
          "bonus": 1,
          "finalScore": 182.73047,
          "delta": '-8',
        },
        {
          "name": '996',
          "score": 182.37302,
          "attempts": 4,
          "bonus": 1,
          "finalScore": 182.37302,
          "delta": '-8',
        },
        {
          "name": 'Osmosis 2.0',
          "score": 179.12594,
          "attempts": 24,
          "bonus": 1,
          "finalScore": 179.12594,
          "delta": '-3',
        },
        {
          "name": 'dataminds',
          "score": 97.17423,
          "attempts": 2,
          "bonus": 1,
          "finalScore": 97.17423,
          "delta": '-',
        },
        {
          "name": 'QuantRaccoons',
          "score": 96.7287,
          "attempts": 1,
          "bonus": 1,
          "finalScore": 96.7287,
          "delta": '-',
        },
        {
          "name": 'shuo0520',
          "score": 82.98076,
          "attempts": 2,
          "bonus": 1.0609,
          "finalScore": 88.03429,
          "delta": '+1',
        },
        {
          "name": 'Mateo Arcos',
          "score": 84.44444,
          "attempts": 2,
          "bonus": 1,
          "finalScore": 84.44444,
          "delta": '-1',
        },
    ],
    },
  };
