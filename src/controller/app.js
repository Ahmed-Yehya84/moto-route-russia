// src/controller/app.js
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

// Resolve __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Static file serving from /public
app.use("/public", express.static(path.join(__dirname, "../../public")));

// Basic test route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../views/index.html"));
});

// ✅ Export as default (simplest fix)
export default app;
