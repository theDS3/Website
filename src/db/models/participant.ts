import mongoose from 'mongoose';

export enum ParticipantStatus {
  REVIEW = 'REVIEW', // By Default, when participant registers
  EMAILED_ACCEPTANCE = 'EMAILED_ACCEPTANCE', // If participant has been accepted then Acceptance Email is send
  EMAILED_PACKAGE = 'EMAILED_PACKAGE', // If participant has RSVPed then Hacker Package Email is send
}

export enum EmailStatus {
  RECEIVED = 'RECEIVED',
  NOT_RECEIVED = 'NOT_RECEIVED',
  NOT_SENT = 'NOT_SENT',
}

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
  emailStatus?: Map<string, EmailStatus>;
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
    emailStatus: {
      type: Map,
      of: mongoose.Schema.Types.Mixed,
      default: {
        'participant-acceptance': EmailStatus.NOT_SENT,
        'hacker-package': EmailStatus.NOT_SENT,
      },
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
