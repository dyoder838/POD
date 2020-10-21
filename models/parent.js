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
    }
    return Parent;
  };
  // I think we may need to create a parent_pod junction table?