import mongoose from "mongoose";

const SensorSchema = new mongoose.Schema({
  sensorId: { type: String, required: true, unique: true },
  location: {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
  },
  sensorType: { type: String, enum: ["level", "gas"], required: true },
  value: { type: Number, required: true },
  thresholds: {
    levelMax: { type: Number },
    levelAlert: { type: Number },
    gasMax: { type: Number },
  },
  status: {
    type: String,
    enum: ["Normal", "Warning", "Critical"],
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const Sensor = mongoose.model("Sensor", SensorSchema);
