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
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE

    });
    Student.associate=function(models){
    Student.belongsToMany(models.Pod, { through: "Pod_Student" });
  }
    return Student;
  };
  