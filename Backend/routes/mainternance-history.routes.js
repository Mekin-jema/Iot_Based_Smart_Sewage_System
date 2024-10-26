import express from "express";
const router = express.Router();

// Maintenance History Endpoints
router.post("/maintenance", async (req, res) => {
  try {
    const maintenance = new MaintenanceHistory(req.body);
    await maintenance.save();
    res.status(201).json(maintenance);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/maintenance", async (req, res) => {
  try {
    const maintenanceRecords = await MaintenanceHistory.find(req.query);
    res.status(200).json(maintenanceRecords);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
