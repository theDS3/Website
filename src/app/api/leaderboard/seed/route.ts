import { NextRequest, NextResponse } from 'next/server';

import connectDB from '@/db/config';
import Leaderboard, {
  type LeaderboardType,
  type TeamInfo,
} from '@/db/models/leaderboard';

export async function POST(request: NextRequest) {
  const DECIMALS = 5;
  const randomIntFromInterval = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const randomFloatFromInterval = (min: number, max: number) => {
    return parseFloat((Math.random() * (max - min) + min).toFixed(DECIMALS));
  };

  try {
    connectDB();

    const type =
      (request.nextUrl.searchParams.get('type') as LeaderboardType) || 'public';
    const numTeams = parseInt(
      request.nextUrl.searchParams.get('numTeams') || '40',
    );

    const data: TeamInfo[] = [];

    for (let i = 0; i < numTeams; i++) {
      let delta = randomIntFromInterval(-12, 12);
      let score = parseFloat(
        (
          randomFloatFromInterval(0.0, 100.0) * randomIntFromInterval(1, 3)
        ).toFixed(DECIMALS),
      );
      let bonus =
        type === 'final'
          ? parseFloat(
              (
                randomFloatFromInterval(0.1, 2.0) ** randomIntFromInterval(1, 4)
              ).toFixed(DECIMALS),
            )
          : undefined;

      let finalScore = bonus ? bonus * score : undefined;

      data.push({
        name: `Team-${i + 1}`,
        score,
        numAttempts: randomIntFromInterval(1, 20),
        delta: delta === 0 ? '-' : `${delta > 0 ? '+' : ''}${delta}`,
        bonus,
        finalScore,
      });
    }

    if (type === 'final') {
      data.sort((a, b) => {
        if (b.finalScore! === a.finalScore!) {
          return a.numAttempts - b.numAttempts;
        } else {
          return b.finalScore! - a.finalScore!;
        }
      });
    } else {
      data.sort((a, b) => {
        if (b.score === a.score) {
          return a.numAttempts - b.numAttempts;
        } else {
          return b.score - a.score;
        }
      });
    }

    await new Leaderboard({
      timestamp: new Date(),
      type,
      data,
    }).save();

    return NextResponse.json(
      {
        message: `Created ${numTeams} for ${type.toLocaleUpperCase()} Leaderboard`,
      },
      { status: 201 },
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
