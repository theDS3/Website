import connectDB from '@/db/config';
import Leaderboard, {
  type ILeaderboard,
  type LeaderboardType,
} from '@/db/models/leaderboard';

export const getLeaderboardData = async (
  type: LeaderboardType = 'public',
): Promise<ILeaderboard> => {
  connectDB();
  return await Leaderboard.findOne({ type }).sort({ _id: -1 }).exec();
};
