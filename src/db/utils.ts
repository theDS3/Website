import { connectDB } from '@/db/config';
import Leaderboard, { type ILeaderboard } from '@/db/models/leaderboard';

export const getLeaderboardData = async (): Promise<ILeaderboard> => {
  connectDB();
  return await Leaderboard.findOne().sort({ _id: -1 }).exec();
};
