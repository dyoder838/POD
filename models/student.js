module.exports = function(sequelize, DataTypes) {
    var Student = sequelize.define("Student", {
      first_name:{
        type: DataTypes.STRING,
        allowNull:false
      },
      last_name:{
          type: DataTypes.STRING,
          allowNull:false
      },
    });
    return Student;
  };
  