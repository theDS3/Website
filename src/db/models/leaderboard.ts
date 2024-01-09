import mongoose, { Document } from 'mongoose';

export interface ITeamData {
  team: string;
  score: number;
  attemptsLeft: number;
  delta: string;
}

export interface ILeaderboard extends Document {
  timestamp: Date;
  data: ITeamData[];
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
    timestamps: true,
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
