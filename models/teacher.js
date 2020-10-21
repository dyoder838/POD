module.exports = function(sequelize, DataTypes) {
    var Teacher = sequelize.define("teacher", {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      email: DataTypes.STRING,
      primaryKey: true
    });
    return Teacher;
  };
  