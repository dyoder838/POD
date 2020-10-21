module.exports = function(sequelize, DataTypes) {
    var Student = sequelize.define("Student", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      first_name:{
        type: DataTypes.STRING,
        allowNull:false
      },
      last_name:{
          type: DataTypes.STRING,
          allowNull:false
      },
    });
    Student.belongsToMany(Pod, { through: Pod_Student });
    return Student;
  };
  