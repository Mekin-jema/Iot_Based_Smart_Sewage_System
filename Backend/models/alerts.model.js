import mongoose from "mongoose";

const AlertSchema = new mongoose.Schema({
  sensorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Sensor",
    required: true,
  },
  alertType: { type: String, enum: ["Overflow", "Gas"], required: true },
  alertLevel: { type: String, enum: ["Warning", "Critical"], required: true },
  timestamp: { type: Date, default: Date.now },
  status: { type: String, enum: ["Pending", "Resolved"], required: true },
  assignedWorkerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SewageWorker",
  },
});

export const Alert = mongoose.model("Alert", AlertSchema);
