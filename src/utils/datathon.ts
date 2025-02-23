import { LeaderboardContent } from '@/db/models/leaderboard';

export const datathonStartDate = new Date('Feb 17, 2025 10:00:00');
export const datathonEndDate = new Date('Feb 22, 2025 10:00:00');

export const isDatathonWeek = (): boolean => {
  return new Date() >= datathonStartDate && new Date() <= datathonEndDate;
};

export const pastFinalDatathonLeaderboard: Record<'2025', LeaderboardContent> =
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
  };
