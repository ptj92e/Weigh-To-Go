const db = require("../models");

module.exports = {
    createMeal: function (req, res) {
        req.body.UserId=req.user.id
        db.Meals.create(
            req.body,
            ).then(dbUser => res.json(dbUser));
    },
    showMeal: function (req, res) {
        db.Meals.findAll({
            limit:5,
            order:[["id","DESC"]],
            where:{
                UserId:req.user.id
            }
        }).then(dbUser => res.json(dbUser));
        
    }
};