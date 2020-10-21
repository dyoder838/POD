module.exports = function(sequelize, DataTypes) {
    var Pod = sequelize.define("Pod", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
          },
    });
Pod.belongsToMany(Student, { through: Pod_Student });
return Teacher;

  };
  

//   Potentially add day, parent id, limit on 5 students?