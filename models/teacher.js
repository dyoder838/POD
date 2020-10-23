const bcrypt = require("bcrypt");

module.exports = function (sequelize, DataTypes) {
  var Teacher = sequelize.define("Teacher", {
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: DataTypes.STRING,
  });

  Teacher.beforeCreate(function(teacher){
    teacher.password = bcrypt.hashSync(teacher.password, bcrypt.genSaltSync(10),null);
})
  return Teacher;

};
