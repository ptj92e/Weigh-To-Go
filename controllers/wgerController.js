const axios = require("axios");
const db = require("../models");

module.exports = {
    createWorkout: function (req, res) {
        req.body.UserId=req.user.id
        db.Workouts.create(
            req.body,
            ).then(dbUser => res.json(dbUser));
    },
    showExercise: function (req, res) {
        db.Workouts.findAll({
            limit:5,
            order:[["id","DESC"]],
            where:{
                UserId: req.params.id
            }
        }).then(dbUser => res.json(dbUser));
        
    },
};