// Sensor Endpoints

import { Sensor } from "../models/sensors.model.js";
import express from "express";

const router = express.Router();
router.post("/sensors", async (req, res) => {
  try {
    const sensor = new Sensor(req.body);
    await sensor.save();
    res.status(201).json(sensor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/sensors", async (req, res) => {
  try {
    const sensors = await Sensor.find(req.query);
    res.status(200).json(sensors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/sensors/:sensorId", async (req, res) => {
  try {
    const sensor = await Sensor.findById(req.params.sensorId);
    if (!sensor) return res.status(404).json({ message: "Sensor not found" });
    res.status(200).json(sensor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put("/sensors/:sensorId", async (req, res) => {
  try {
    const sensor = await Sensor.findByIdAndUpdate(
      req.params.sensorId,
      req.body,
      { new: true }
    );
    if (!sensor) return res.status(404).json({ message: "Sensor not found" });
    res.status(200).json(sensor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete("/sensors/:sensorId", async (req, res) => {
  try {
    const sensor = await Sensor.findByIdAndDelete(req.params.sensorId);
    if (!sensor) return res.status(404).json({ message: "Sensor not found" });
    res.status(200).json({ message: "Sensor deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
