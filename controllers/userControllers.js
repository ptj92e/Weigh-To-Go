db = require("../models");

module.exports = {
    newUser: function (req, res) {
        db.User.create(req.body)
            .then(dbUser => res.json(dbUser));
    },
    updateUser: function (req, res) {
        db.User.update(
            req.body,
            {
                where: {
                    email: req.params.email
                }
            }).then(dbUser => res.json(dbUser));
    },
};