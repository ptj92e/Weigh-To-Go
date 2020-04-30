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
                    id: req.params.id
                }
            }).then(dbUser => {
                res.json(dbUser);
            });
    },
    getUser: function (req, res) {
        console.log(req.session);
        db.User.findOne({
            where: {
                id: req.session.passport.user.id
            }
        }).then(dbUser => {
            res.json(dbUser);
        });
    }
};