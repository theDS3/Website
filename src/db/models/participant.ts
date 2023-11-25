import mongoose from 'mongoose';

export interface IParticipant {
  firstName: string;
  lastName: string;
  email: string;
  dietaryRestrictions: [string];
  code: string;
  qrcode: string;
}

const participantSchema = new mongoose.Schema<IParticipant>(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      index: true,
      trim: true,
    },
    dietaryRestrictions: [
      {
        type: String,
        trim: true,
      },
    ],
    code: {
      type: String,
      required: true,
      unique: true,
      index: true,
      trim: true,
    },
    qrcode: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      // This function returns a JSON without id, __v, id
      transform: (doc, ret) => {
        delete ret.id;
        delete ret._id;
        delete ret.__v;
        return ret;
      },
    },
  },
);

const Participant =
  mongoose.models.Participant ||
  mongoose.model<IParticipant>('Participant', participantSchema);

export default Participant;
