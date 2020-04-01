module.exports = function(sequelize, DataTypes){
    const User = sequelize.define("User", {
        first_name: {
            type:DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type:DataTypes.STRING,
            allowNull: false
        },
        age: {
            type:DataTypes.INTEGER,
            allowNull: false
        },
        height: {
            type:DataTypes.INTEGER,
            allowNull: false
        },
        weight:{
            type:DataTypes.INTEGER,
            allowNull: false
        },
        gender: {
            type:DataTypes.INTEGER,
            allowNull: false
            },
        goal_weight: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    });

    User.associate = function(models){
        Author.hasMany(models.Workouts,{
            onDelete:"cascade"
        });
        Author.hasMany(models.Meals,{
            onDelete:"cascade"
        });
    };
    return User;
}