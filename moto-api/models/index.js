import Sequelize from "sequelize";
import TripModel from "./Trip.js";
import dotenv from "dotenv";

dotenv.config();

export const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
    port: process.env.DB_PORT || 5432,
  }
);

export const Trip = TripModel(sequelize, Sequelize.DataTypes);
