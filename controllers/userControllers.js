db = require("../models");
passort = require("../config/passport");

module.exports = {
    newUser: function(req, res) {
        console.log(req.body);
        db.User.create(req.body)
            .then(dbUser => res.json(dbUser));
    },
    loginUser: function(req,res){
        passort.authenicate("local")
    }


};