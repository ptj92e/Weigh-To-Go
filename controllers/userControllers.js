db = require("../models/user");

module.exports = {
    newUser: function(req, res) {
        console.log(req.body);
        db.User.create(req.body).then(function(dbUser) {
            res.json(dbUser);
        });
    }
};