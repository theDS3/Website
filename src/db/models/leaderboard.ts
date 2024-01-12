import mongoose from 'mongoose';

export interface ILeaderboard extends mongoose.Document {
  timestamp: Date;
  data: {
    team: string;
    score: number;
    attemptsLeft: number;
    delta: string;
  }[];
}

const leaderboardSchema = new mongoose.Schema<ILeaderboard>(
  {
    timestamp: {
      type: Date,
      required: true,
      unique: true,
    },
    data: {
      type: [
        {
          team: { type: String, required: true },
          score: { type: Number, required: true },
          attemptsLeft: { type: Number, required: true },
          delta: { type: String, required: true },
        },
      ],
      required: true,
    },
  },
  {
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
  mongoose.model<ILeaderboard>('Leaderboard', leaderboardSchema, 'leaderboard');

export default Leaderboard;
