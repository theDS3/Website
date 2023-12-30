import mongoose, { Schema, models } from 'mongoose';

export interface IAdministrator {
  email: string;
  password: string;
}

const administratorSchema = new Schema<IAdministrator>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      index: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    }
  },
  {
    timestamps: true,
    toJSON: {
      transform: (_, ret) => {
        delete ret.password;
        delete ret.__v;
        return ret;
      },
    },
  }
);

const Administrator = models.Administrator || mongoose.model('Administrator', administratorSchema);
export default Administrator;
