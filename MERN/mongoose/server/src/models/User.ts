import mongoose, { Schema, model, Model } from "mongoose";
import { IUser } from "../interfaces/user";

const userSchema = new Schema<IUser>(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      select: false,
    },
    role: {
      type: String,
      required: true,
      enum: {
        values: ["admin", "client"],
        message: "{VALUE} no es un role válido",
        default: "client",
      },
    },
    birthdate: {
      type: Date,
      require: true,
    },
    genre: {
      type: String,
      required: true,
      enum: {
        values: ["male", "female"],
        default: "male",
      },
    },
    phone: {
      type: String,
      require: true,
    },
    country: {
      type: String,
      require: true,
    },
    department: {
      type: String,
      require: true,
    },
    city: {
      type: String,
      require: true,
    },
    shippingAddres: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  },
);

const User: Model<IUser> = mongoose.models.User || model("User", userSchema);
export default User;
