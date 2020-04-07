module.exports = function(sequelize, DataTypes){
    const User = sequelize.define("User", {
        name: {
            type:DataTypes.STRING,
            allowNull: false
        },
        email: {
            type:DataTypes.STRING,
            allowNull: false
        },
        password: {
            type:DataTypes.STRING,
            allowNull: false
        },
        age: {
            type:DataTypes.INTEGER,
            allowNull: true
        },
        height: {
            type:DataTypes.INTEGER,
            allowNull: true
        },
        weight:{
            type:DataTypes.INTEGER,
            allowNull: true
        },
        gender: {
            type:DataTypes.INTEGER,
            allowNull: true
            },
        goal_weight: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    });

    User.associate = function(models){
        User.hasMany(models.Workouts,{
            onDelete:"cascade"
        });
        User.hasMany(models.Meals,{
            onDelete:"cascade"
        });
    };
    return User;
}