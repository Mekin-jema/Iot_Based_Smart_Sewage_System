import mongoose from "mongoose";

const MaintenanceHistorySchema = new mongoose.Schema({
  sensorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Sensor",
    required: true,
  },
  workerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SewageWorker",
    required: true,
  },
  timestamp: { type: Date, default: Date.now },
  description: { type: String, required: true },
  status: {
    type: String,
    enum: ["Fixed", "Pending Further Review"],
    required: true,
  },
});

export const MaintenanceHistory = mongoose.model(
  "MaintenanceHistory",
  MaintenanceHistorySchema
);
