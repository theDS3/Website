import connectDB from '@/db/config';
import LeaderboardModel, {
  type LeaderboardContent,
  type LeaderboardType,
} from '@/db/models/leaderboard';

import { isDatathonWeek } from '@/utils/datathon';

/**
 * Returns the latest leaderboard standing for a specific type
 *
 * @param {LeaderboardType} type - The type of leaderboard
 *
 * @returns {Promise<LeaderboardContent | null>}
 */
export const getLeaderboardData = async (
  type: LeaderboardType = 'public',
): Promise<LeaderboardContent | null> => {
  // If it not datathon week, not required to query the database
  if (!isDatathonWeek()) return Promise.resolve(null);

  // Connects the Database else returns a null promise
  connectDB().catch((err) => {
    return Promise.resolve(null);
  });

  // Queries the database for Leaderboard Data
  try {
    return await LeaderboardModel.findOne({ type })
      .sort({ _id: -1 })
      .select('-_id -__v')
      .exec();
  } catch (err) {
    return Promise.resolve(null);
  }
};
