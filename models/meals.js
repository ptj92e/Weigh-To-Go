module.exports = function(sequelize, DataTypes){
    const Meals = sequelize.define("Meals", {
        meal: {
            type:DataTypes.STRING,
            allowNull: false
        },
        calories: {
            type:DataTypes.INTEGER,
            allowNull: false
        },
        servings: {
            type:DataTypes.INTEGER,
            allowNull: false
        },
        total_calories: {
            type:DataTypes.INTEGER,
            allowNull: false
        },
        fat:{
            type:DataTypes.INTEGER,
            allowNull: true
        },
        carbs: {
            type:DataTypes.INTEGER,
            allowNull: true
            },
        protein: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false
        }
    });

    Meals.associate = function(models){
        Meals.belongsTo(models.User,{
            foreignKey:{
                allowNull: false
            }
        });
    };
    return Meals;
}