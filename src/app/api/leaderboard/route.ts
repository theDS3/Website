import Leaderboard, { type ILeaderboard } from '@/db/models/leaderboard';
import { connectDB } from '@/db/config';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    connectDB();

    const leaderboard = await Leaderboard.findOne().sort({ timestamp: -1 });

    return NextResponse.json(leaderboard, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { type: 'UnauthorizedError', error: 'Invalid request' },
      { status: 400 },
    );
  }
}
