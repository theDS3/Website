import { generateAvailableServices } from '@/utils';
import mongoose from 'mongoose';

/**
 * Enum for participant application status.
 * @readonly
 * @enum {string}
 */
export enum ParticipantStatus {
  /** Applied when participant has submitted application. */
  REVIEW = 'REVIEW',

  /** Applied when participant has been sent Acceptance email */
  EMAILED_ACCEPTANCE = 'EMAILED_ACCEPTANCE', //

  /** Applied when participant has rsvped to event. */
  RSVPED = 'RSVPED',

  /** Applied when participant has been sent Hacker Package email. */
  EMAILED_PACKAGE = 'EMAILED_PACKAGE',
}

/**
 * Enum for service usage.
 * @readonly
 * @enum {string}
 */
export enum ServiceStatus {
  /** Applied when the service is not used. */
  UNUSED = 'UNUSED',

  /** Applied when service has been successfully used. */
  USED = 'USED',

  /** Applied when the service encounters an error. */
  ERROR = 'ERROR',
}

export type Service = Record<
  string,
  {
    status: ServiceStatus;
    timestamp?: number;
  }
>;

export type Services = Map<string, Service>;

export interface IParticipant extends mongoose.Document {
  firstName: string;
  lastName: string;
  email: string;
  school: string;
  countryOfResidence: string;
  dietaryRestrictions: string;
  code: string;
  qrcode?: string;
  status?: ParticipantStatus;
  services?: Services;
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
    status: {
      type: String,
      enum: ParticipantStatus,
      default: ParticipantStatus.REVIEW,
    },
    services: {
      type: Map,
      of: mongoose.Schema.Types.Mixed,
      default: generateAvailableServices(),
    },
  },
  {
    timestamps: true,
    toJSON: {
      // This function returns a JSON without id, __v, id
      transform: (doc, ret) => {
        ret.id = ret._id;
        delete ret.qrcode;
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
