import mongoose from "mongoose";

const emailSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    secondName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    message: {
      type: String,
      required: true,
    },
    plan: {
      type: String,
      enum: ["basic", "ripe", "royale"],
    },
  },
  {
    timestamps: true,
  }
);

const Email = mongoose.model("Email", emailSchema);
export default Email;
