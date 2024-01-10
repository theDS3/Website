import mongoose from 'mongoose';

export interface IAdmin {
  email: string;
  password: string;
}

const adminSchema = new mongoose.Schema<IAdmin>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    toJSON: {
      transform: (_, ret) => {
        delete ret.password;
        delete ret.__v;
        return ret;
      },
    },
  },
);

const Admin =
  mongoose.models.Admin || mongoose.model<IAdmin>('Admin', adminSchema);

export default Admin;