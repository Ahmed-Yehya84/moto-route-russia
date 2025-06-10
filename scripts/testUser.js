// scripts/testUser.js
const { User } = require("../models");
const sequelize = require("../models").sequelize;

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected.");

    const newUser = await User.create({
      name: "Test Rider",
      username: "testrider",
      email: "test@example.com",
      password: "securepass",
    });

    console.log("User created:", newUser.toJSON());
    await sequelize.close();
  } catch (error) {
    console.error("Error:", error);
  }
})();
