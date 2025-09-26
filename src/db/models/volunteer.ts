import mongoose from 'mongoose';

export interface IVolunteer extends mongoose.Document {
  email: string;
  hashedPassword: string;
  isAdmin: boolean;
}

const volunteerSchema = new mongoose.Schema<IVolunteer>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    hashedPassword: {
      type: String,
      required: true,
      trim: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    toJSON: {
      transform: (_, ret) => {
        delete (ret as any).hashedPassword;
        delete (ret as any).__v;
        return ret;
      },
    },
  },
);

const Volunteer =
  mongoose.models.Volunteer ||
  mongoose.model<IVolunteer>('Volunteer', volunteerSchema);

export default Volunteer;
