const axios = require("axios");
const db = require("../models");

module.exports = {
    // findExercise: function(rep,res) {
    //     const { query: params } = req;
    // axios
    //   .get("https://wger.de/api/v2/exercise/?name=Arms")
    //   .then((response) => {
    //       console.log(response.data)
    //   })
    // }
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
                UserId:req.user.id
            }
        }).then(dbUser => res.json(dbUser));
        
    },
};