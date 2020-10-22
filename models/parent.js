// const bcrypt = require("bcrypt");

module.exports = function(sequelize, DataTypes) {
    var Parent = sequelize.define("Parent", {
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
      email: {
        type: DataTypes.STRING,
        allowNull:false,
        unique:true
      },
       // password: DataTypes.STRING,
      available_days:{
          type: DataTypes.BOOLEAN
      },
      bio: {
          type: DataTypes.TEXT,
          allowNull:true
      },
    });
    Parent.associate=function(models){
      Parent.belongsTo(models.Pod)
    }; 

//   Parent.beforeCreate(function(parent){
//     parent.password = bcrypt.hashSync(parent.password, bcrypt.genSaltSync(10),null);
// })
    return Parent;
  };
//  Needs to have password field & bcrypt! 