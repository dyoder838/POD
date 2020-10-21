module.exports = function(sequelize, DataTypes) {
=======
    var Teacher = sequelize.define("Teacher", {
        first_name:{
            type: DataTypes.STRING,
            allowNull:false
        },
        last_name:{
            type: DataTypes.STRING,
            allowNull:false
        },
        email:{
            type: DataTypes.STRING,
            allowNull:false,
            unique:true
        },
        // primaryKey:true
    });
    return Teacher;
  };
  