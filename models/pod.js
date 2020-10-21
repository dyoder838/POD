module.exports = function(sequelize, DataTypes) {
    var Pod = sequelize.define("Pod", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
          },
    });
    Pod.associate=function(models){
    Pod.belongsToMany(models.Student, { through: "Pod_Student" });
    Pod.hasMany(models.Parent, {
        onDelete:  "cascade"
    })
}
return Pod;

  };
  

//   Potentially add day, parent id, limit on 5 students?