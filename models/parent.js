module.exports = function(sequelize, DataTypes) {
    var Parent = sequelize.define("Parent", {
      first_name:{
        type: DataTypes.STRING,
        allowNull:false
      },
      last_name:{
          type: DataTypes.STRING,
          allowNull:false
      },
      email: {
        type: DataTypes.STRING,
        allowNull:false,
        unique:true
      },
      monday:{
          type: DataTypes.BOOLEAN
      },
      tuesday:{
          type: DataTypes.BOOLEAN
      },
      wednesday:{
          type: DataTypes.BOOLEAN
      },
      thursday:{
          type: DataTypes.BOOLEAN
      },
      friday:{
          type: DataTypes.BOOLEAN
      },
      saturday:{
          type: DataTypes.BOOLEAN
      },
      sunday:{
          type: DataTypes.BOOLEAN
      },
      bio: {
          type: DataTypes.TEXT,
          allowNull:true
      },
    });
    Parent.associate=function(models){
      Parent.belongsTo(models.Pod)
    }
    return Parent;
  };
  // I think we may need to create a parent_pod junction table?