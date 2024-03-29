import { Schema, model, Document } from 'mongoose';
import bcrypt from 'bcrypt';

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  profileVisibility: string;
  isValidPassword(password: string): Promise<boolean>;
}

const userSchema = new Schema<IUser>({
  username: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profileVisibility: { type: String, enum: ['public', 'private'], default: 'public' }
});

userSchema.methods.isValidPassword = async function (password: string): Promise<boolean> {
  return bcrypt.compare(password, this.password);
};

export default model<IUser>('User', userSchema);
