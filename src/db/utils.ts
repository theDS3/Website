import connectDB from '@/db/config';
import LeaderboardModel, {
  type LeaderboardContent,
  type LeaderboardType,
} from '@/db/models/leaderboard';

import { isDatathonWeek } from '@/utils/datathon';

export const getLeaderboardData = async (
  type: LeaderboardType = 'public',
): Promise<LeaderboardContent | null> => {
  if (!isDatathonWeek()) return Promise.resolve(null);

  connectDB();
  return await LeaderboardModel.findOne({ type })
    .sort({ _id: -1 })
    .select('-_id -__v')
    .exec();
};
