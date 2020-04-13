module.exports = function(sequelize, DataTypes){
    const Workouts = sequelize.define("Workouts", {
        type: {
            type:DataTypes.STRING,
            allowNull: false
        },
        time: {
            type:DataTypes.STRING,
            allowNull: true
        },
        distance: {
            type:DataTypes.INTEGER,
            allowNull: true
        },
        exercise: {
            type:DataTypes.STRING,
            allowNull: true
        },
        sets:{
            type:DataTypes.INTEGER,
            allowNull: true
        },
        reps: {
            type:DataTypes.INTEGER,
            allowNull: true
            },
        weight: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        rest: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        date: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    });

    Workouts.associate = function(models){
        Workouts.belongsTo(models.User,{
            foreignKey:{
                allowNull: false
            }
        });
    };
    return Workouts;
}