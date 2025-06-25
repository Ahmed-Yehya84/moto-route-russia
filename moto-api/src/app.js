// moto-api/src/app.js

import express from "express";
import dotenv from "dotenv";
import cors from "cors"; // ✅ Add this
import tripRoutes from "../routes/tripRoutes.js";
import { sequelize } from "../models/index.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Middleware
app.use(cors()); // <-- Allow frontend to access the API
app.use(express.json());

// ✅ Routes
app.use("/api/trips", tripRoutes);

// ✅ Root route
app.get("/", (req, res) => {
  res.send("🚀 MotoRoute API is running!");
});

// ✅ Test DB connection before starting server
const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Connected to database.");

    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("❌ Unable to connect to database:", error);
  }
};

startServer();
