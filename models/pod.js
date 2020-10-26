module.exports = function(sequelize, DataTypes) {
    var Pod = sequelize.define("Pod");
    Pod.associate=function(models){
    Pod.belongsToMany(models.Student, { through: "Pod_Student" });
    Pod.belongsTo(models.Parent, {foreignKey: {allowNull:true}}
        // onDelete:  "cascade"
    )
    }
    return Pod;
  };
  

