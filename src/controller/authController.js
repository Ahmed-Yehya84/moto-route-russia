import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import users from "../models/userModel.js";

const SECRET = "moto_route_secret_key"; // Use .env in production

export const register = async (req, res) => {
  const { username, password } = req.body;

  const existing = users.find((u) => u.username === username);
  if (existing) return res.status(400).json({ message: "User already exists" });

  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ username, password: hashedPassword });

  res.status(201).json({ message: "User registered successfully" });
};

export const login = async (req, res) => {
  const { username, password } = req.body;

  const user = users.find((u) => u.username === username);
  if (!user) return res.status(401).json({ message: "Invalid credentials" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

  const token = jwt.sign({ username }, SECRET, { expiresIn: "1h" });
  res.json({ token });
};
