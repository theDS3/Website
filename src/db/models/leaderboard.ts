import mongoose from 'mongoose';

export type LeaderboardType = 'public' | 'private' | 'final';

export interface ILeaderboard extends mongoose.Document {
  timestamp: Date;
  type: LeaderboardType;
  data: {
    name: string;
    score: number;
    numAttempts: number;
    delta: string;
    bonus?: number;
  }[];
}

const leaderboardSchema = new mongoose.Schema<ILeaderboard>(
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
    data: {
      type: [
        {
          name: { type: String, required: true },
          score: { type: Number, required: true },
          numAttempts: { type: Number, required: true },
          delta: { type: String, required: true },
          bonus: { type: Number },
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

const Leaderboard =
  mongoose.models.Leaderboard ||
  mongoose.model<ILeaderboard>('Leaderboard', leaderboardSchema);

export default Leaderboard;
