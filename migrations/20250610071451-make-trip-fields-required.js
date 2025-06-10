"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await Promise.all([
      queryInterface.changeColumn("Trips", "origin", {
        type: Sequelize.STRING,
        allowNull: false,
      }),
      queryInterface.changeColumn("Trips", "destination", {
        type: Sequelize.STRING,
        allowNull: false,
      }),
      queryInterface.changeColumn("Trips", "distance", {
        type: Sequelize.FLOAT,
        allowNull: false,
      }),
      queryInterface.changeColumn("Trips", "duration", {
        type: Sequelize.STRING,
        allowNull: false,
      }),
      queryInterface.changeColumn("Trips", "userId", {
        type: Sequelize.INTEGER,
        allowNull: false,
      }),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await Promise.all([
      queryInterface.changeColumn("Trips", "origin", {
        type: Sequelize.STRING,
        allowNull: true,
      }),
      queryInterface.changeColumn("Trips", "destination", {
        type: Sequelize.STRING,
        allowNull: true,
      }),
      queryInterface.changeColumn("Trips", "distance", {
        type: Sequelize.FLOAT,
        allowNull: true,
      }),
      queryInterface.changeColumn("Trips", "duration", {
        type: Sequelize.STRING,
        allowNull: true,
      }),
      queryInterface.changeColumn("Trips", "userId", {
        type: Sequelize.INTEGER,
        allowNull: true,
      }),
    ]);
  },
};
