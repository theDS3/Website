import mongoose from 'mongoose';

export type LeaderboardType = 'public' | 'private' | 'final';

export interface TeamInfo {
  name: string;
  score: number;
  attempts: number;
  delta: string;
  bonus?: number;
  finalScore?: number;
}

interface LeaderboardDoc extends mongoose.Document {
  timestamp: Date;
  type: LeaderboardType;
  standings: TeamInfo[];
}

export type LeaderboardContent = Pick<
  LeaderboardDoc,
  'timestamp' | 'type' | 'standings'
>;

const leaderboardSchema = new mongoose.Schema<LeaderboardDoc>(
  {
    timestamp: {
      type: Date,
      required: true,
      unique: true,
    },
    type: {
      type: String,
      required: true,
    },
    standings: {
      type: [
        {
          name: { type: String, required: true },
          score: { type: Number, required: true },
          attempts: { type: Number, required: true },
          delta: { type: String, required: true },
          bonus: { type: Number },
          finalScore: { type: Number },
        },
      ],
      required: true,
    },
  },
  {
    collection: 'leaderboard',
    toJSON: {
      transform: (doc, ret) => {
        delete ret._id;
        delete ret.__v;
        return ret;
      },
    },
  },
);

const LeaderboardModel =
  mongoose.models.Leaderboard ||
  mongoose.model<LeaderboardDoc>('Leaderboard', leaderboardSchema);

export default LeaderboardModel;
