export default (sequelize, DataTypes) => {
  const Trip = sequelize.define("Trip", {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    start_location: DataTypes.STRING,
    end_location: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
  });

  return Trip;
};
