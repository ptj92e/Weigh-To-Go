const router = require("express").Router();
const userController = require("../../../controllers/userControllers");
const passport = require("../../../config/passport");

router
    .route("/", passport.authenticate("local"))
    .post(userController.loginUser);
    
module.exports = router;