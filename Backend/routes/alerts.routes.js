import express from "express";
import { Alert } from "../models/alerts.model.js";
const router = express.Router();
// Alert Endpoints
router.post("/alerts", async (req, res) => {
  try {
    const alert = new Alert(req.body);
    await alert.save();
    res.status(201).json(alert);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/alerts", async (req, res) => {
  try {
    const alerts = await Alert.find(req.query);
    res.status(200).json(alerts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put("/alerts/:alertId", async (req, res) => {
  try {
    const alert = await Alert.findByIdAndUpdate(req.params.alertId, req.body, {
      new: true,
    });
    if (!alert) return res.status(404).json({ message: "Alert not found" });
    res.status(200).json(alert);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
