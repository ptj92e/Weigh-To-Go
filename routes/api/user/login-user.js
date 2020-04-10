const router = require("express").Router();
const db = require("../../../models");
const passport = require("../../../config/passport");

router.post("/", passport.authenticate("local"), function(req, res) {
    if (!req.body) {
        res.json(err);
    } else {
        db.User.findOne({
            where: {
                email: req.body.email
            }
        }).then(dbUser => res.json(dbUser));
    }
});
    
module.exports = router;