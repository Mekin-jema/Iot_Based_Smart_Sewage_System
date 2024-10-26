import mongoose from "mongoose";
const SewageWorkerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  locationRange: {
    startLatitude: { type: Number, required: true },
    startLongitude: { type: Number, required: true },
    endLatitude: { type: Number, required: true },
    endLongitude: { type: Number, required: true },
  },
  isResponsible: { type: Boolean, required: true },
  availabilityStatus: {
    type: String,
    enum: ["Available", "On Assignment"],
    required: true,
  },
  lastAssigned: { type: Date, default: Date.now },
});

export const SewageWorker = mongoose.model("SewageWorker", SewageWorkerSchema);
