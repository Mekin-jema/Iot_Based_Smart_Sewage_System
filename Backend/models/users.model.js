import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  location: {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
  },
  feedback: [
    {
      description: { type: String, required: true },
      timestamp: { type: Date, default: Date.now },
      status: { type: String, enum: ["Reviewed", "Pending"], required: true },
    },
  ],
});

export const User = mongoose.model("User", UserSchema);
