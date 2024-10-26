import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./database/connectDB.js";
// Routes
import userRoutes from "./routes/users.routes.js";
import sewageWorkerRoutes from "./routes/sewage-workers.routes.js";
import alertRoutes from "./routes/alerts.routes.js";
import sensorRoutes from "./routes/sensors.routes.js";
import { MaintenanceHistory } from "./models/mainternance-history.model.js";
dotenv.config();
const app = express();

app.use(express.json());
app.use("/api/", userRoutes);
app.use("/api/", sewageWorkerRoutes);
app.use("/api/", alertRoutes);
app.use("/api/", sensorRoutes);

// Routes

connectDB((next) => {
  app.listen(5000, () => {
    console.log("Server is running on port 5000");
  });
});
