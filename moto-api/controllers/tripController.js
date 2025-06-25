import { Trip } from "../models/index.js";

export const getAllTrips = async (req, res) => {
  try {
    const trips = await Trip.findAll();
    res.json(trips);
  } catch (error) {
    console.error("❌ Failed to fetch trips:", error);
    res.status(500).json({ error: "Failed to fetch trips" });
  }
};

export const createTrip = async (req, res) => {
  try {
    const newTrip = await Trip.create(req.body);
    res.status(201).json(newTrip);
  } catch (error) {
    console.error("❌ Failed to create trip:", error);
    res.status(400).json({ error: "Failed to create trip" });
  }
};
