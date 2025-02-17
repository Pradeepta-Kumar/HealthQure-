import mongoose, { Schema, Document } from "mongoose";

export interface HealthVitals extends Document {
  gender: string;
  age: number;
  pulseRate: number;
  bloodPressure: string;
  respirationRate: number;
  bodyTemp: number;
  oxygenRate: number;
  bloodGlucose: number;
  weight: number;
  cholesterol: number;
  location: string;
  description?: string;
  result?: string;
  createdAt: Date;
}

const HealthSchema: Schema<HealthVitals> = new Schema({
  gender: {
    type: String,
    required: [true, "Gender is required"],
  },
  age: {
    type: Number,
    required: [true, "Age is required"],
  },
  pulseRate: {
    type: Number,
    required: [true, "Pulse rate/ Heart rate is required"],
  },
  bloodPressure: {
    type: String,
    required: [true, "Blood pressure is required"],
  },
  respirationRate: {
    type: Number,
    required: [true, "Respiration Rate is required"],
  },
  bodyTemp: {
    type: Number,
    required: [true, "Body Temperature is required"],
  },
  oxygenRate: {
    type: Number,
    required: [true, "Oxygen Level is required"],
  },
  bloodGlucose: {
    type: Number,
    required: [true, "Blood Glucose level is required"],
  },
  weight: {
    type: Number,
    required: [true, "Weight is required"],
  },
  cholesterol: {
    type: Number,
    required: [true, "Cholesterol is required"],
  },
  location: String,
  description: {
    type: String,
    default: "",
  },
  result: {
    type: String,
    default: "",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export interface User extends Document {
  fullname: string;
  email: string;
  password: string;
  verifyCode: string;
  verifyCodeExpiry: Date;
  isVerified: boolean;
  diseases: HealthVitals[];
}

const UserSchema: Schema<User> = new Schema({
  fullname: {
    type: String,
    required: [true, "Fullname is required"],
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    match: [/.+\@.+\..+/, "Please use a valid email address"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  verifyCode: {
    type: String,
    required: [true, "Verify code is required"],
  },
  verifyCodeExpiry: {
    type: Date,
    required: [true, "Expiry is required"],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  diseases: [HealthSchema],
});

const UserModel =
  (mongoose.models.User as mongoose.Model<User>) ||
  mongoose.model<User>("User", UserSchema);
export default UserModel;
