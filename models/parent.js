const bcrypt = require("bcrypt");

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

       password: DataTypes.STRING,
    });

    Parent.associate=function(models){
      Parent.hasOne(models.Pod, {foreignKey: {allowNull:true}})
    }; 

  Parent.beforeCreate(function(parent){
    parent.password = bcrypt.hashSync(parent.password, bcrypt.genSaltSync(10),null);
})
    return Parent;
  };
