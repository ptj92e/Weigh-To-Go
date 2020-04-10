db = require("../models");
passort = require("../config/passport");

module.exports = {
    newUser: function (req, res) {
        db.User.create(req.body)
            .then(dbUser => res.json(dbUser));
    },
    loginUser: function(req,res){
        passort.authenicate("local")
    },
    updateUser: function (req, res) {
        console.log(req.body);
        db.User.update(
            req.body,
            {
                where: {
                    email: req.params.email
                }
            }).then(dbUser => res.json(dbUser));
    }


};