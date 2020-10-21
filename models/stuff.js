module.exports = function(sequelize, DataTypes) {
    var Stuff = sequelize.define("Stuff", {
      email: DataTypes.STRING,
      password: DataTypes.STRING
    });
    return Stuff;
  };
  

  // Need to delete this file