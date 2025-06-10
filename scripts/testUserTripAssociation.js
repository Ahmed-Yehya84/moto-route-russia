const { sequelize, User, Trip } = require("../models");

(async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ DB connection established.");

    // Step 1: Find or create user
    const [user, created] = await User.findOrCreate({
      where: { email: "assoc@example.com" },
      defaults: {
        username: "assocuser",
        password: "secretpass",
      },
    });

    if (created) {
      console.log("🆕 User created:", user.username);
    } else {
      console.log("🔍 User found:", user.username);
    }

    // Step 2: Create a trip associated with the user
    const trip = await user.createTrip({
      title: "Volgograd to Sochi",
      origin: "Volgograd",
      destination: "Sochi",
      distance: 1200.5,
      duration: "2 days",
      description: "Scenic ride through the Caucasus region.",
    });

    console.log("🏍️ Trip created:", trip.title);
  } catch (err) {
    console.error("❌ Error:", err);
  } finally {
    await sequelize.close();
  }
})();
