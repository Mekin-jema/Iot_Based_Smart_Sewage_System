import express from "express";
import { SewageWorker } from "../models/sewage-workers.model.js";
const router = express.Router();

// Sewage Worker Endpoints
router.post("/workers", async (req, res) => {
  try {
    const worker = new SewageWorker(req.body);
    await worker.save();
    res.status(201).json(worker);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/workers", async (req, res) => {
  try {
    const workers = await SewageWorker.find(req.query);
    res.status(200).json(workers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put("/workers/:workerId", async (req, res) => {
  try {
    const worker = await SewageWorker.findByIdAndUpdate(
      req.params.workerId,
      req.body,
      { new: true }
    );
    if (!worker) return res.status(404).json({ message: "Worker not found" });
    res.status(200).json(worker);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/workers/:workerId", async (req, res) => {
  try {
    const worker = await SewageWorker.findById(req.params.workerId);
    if (!worker) return res.status(404).json({ message: "Worker not found" });
    res.status(200).json(worker);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
