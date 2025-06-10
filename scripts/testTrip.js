const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../models").sequelize;
const { User, Trip } = require("../models");

async function testTripCreation() {
  try {
    await sequelize.authenticate();
    console.log("Database connected.");

    // Find or create a test user
    const [user] = await User.findOrCreate({
      where: { email: "test@example.com" },
      defaults: {
        username: "testrider",
        password: "securepass",
      },
    });

    // Create a trip for this user
    const trip = await Trip.create({
      title: "Moscow to Vladivostok",
      description: "A legendary trans-Russia motorcycle journey.",
      startDate: new Date("2025-07-01"),
      endDate: new Date("2025-07-20"),
      userId: user.id,
    });

    console.log("Trip created:", trip.toJSON());
  } catch (error) {
    console.error("Error creating trip:", error);
  } finally {
    await sequelize.close();
  }
}

testTripCreation();
