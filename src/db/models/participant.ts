import { allAvailableServices } from '@/utils';
import mongoose from 'mongoose';

export type Services = Record<
  string,
  {
    hasUsed: boolean;
    timestamp: number;
  }
>;

export interface IParticipant {
  firstName: string;
  lastName: string;
  email: string;
  school: string;
  countryOfResidence: string;
  dietaryRestrictions: string;
  code: string;
  qrcode?: string;
  services?: Map<string, Services>;
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
    school: {
      type: String,
      required: true,
      trim: true,
    },
    countryOfResidence: {
      type: String,
      required: true,
      trim: true,
    },
    dietaryRestrictions: {
      type: String,
      required: true,
      trim: true,
    },
    code: {
      type: String,
      required: true,
      unique: true,
      index: true,
      trim: true,
    },
    qrcode: {
      type: String,
    },
    services: {
      type: Map,
      of: mongoose.Schema.Types.Mixed,
      default: allAvailableServices,
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
