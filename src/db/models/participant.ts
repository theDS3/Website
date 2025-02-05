import mongoose from 'mongoose';

import { generateServices } from '@/utils';

/**
 * Enum for participant application status.
 * @readonly
 * @enum {string}
 */
export enum ParticipantStatus {
  // Applied to a participant when they have submitted an application.
  IN_REVIEW = 'IN REVIEW',

  /// Applied to a participant when they have been sent Acceptance Email.
  RECEIVED_ACCEPTANCE = 'RECEIVED ACCEPTANCE',

  // Applied to participant, when they have agreed to join the Datathon
  ACCEPTED = 'ACCEPTED',

  // Applied to a participant when they have been sent a Hacker Package Email.
  RECEIVED_HACKER_PACKAGE = 'RECEIVED HACKER PACKAGE',

  // Applied to a participant when they are rejected from the hacker acceptance page.
  REJECTED = 'REJECTED',
}

export type Usage = { status: boolean; timestamp?: string };

export type Service = Record<string, Usage>;
export type Services = Map<string, Service>;
export type ServiceGroupsToLabels = Record<string, string[]>;
const datathonServices: ServiceGroupsToLabels = {
  '2025-02-01': ['Check-In', 'Afternoon Snacks', 'Open Ceremony', 'Dinner', 'Evening Snacks', 'Trivia'],
  '2025-02-02': ['Check-In', 'Karaoke', 'Midnight Snacks', 'Breakfast', 'Hacking Finishes', 'Sponsor Workshop', 'Lunch', 'Closing Ceremony'],
};

export type Contact = Map<'acceptance' | 'hacker-package', Usage>;

export interface IParticipant extends mongoose.Document {
  firstName: string;
  lastName: string;
  email: string;
  phoneNum?: string;
  school: string;
  countryOfResidence: string;
  dietaryRestrictions: string;
  code: string;
  qrcode?: string;
  status?: ParticipantStatus;
  services?: Services;
  contact?: Contact;
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
    phoneNum: {
      type: String,
      unique: true,
      sparse: true,
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
      default: ParticipantStatus.IN_REVIEW,
    },
    services: {
      type: Map,
      of: mongoose.Schema.Types.Mixed,
      default: generateServices(datathonServices),
    },
    contact: {
      type: Map,
      of: mongoose.Schema.Types.Mixed,
      default: () => {
        const contact: Contact = new Map();
        contact.set('acceptance', { status: false, timestamp: undefined });
        contact.set('hacker-package', { status: false, timestamp: undefined });
        return contact;
      },
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
