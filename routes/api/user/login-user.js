const router = require("express").Router();
const userController = require("../../../controllers/userControllers");

router
    .route("/")
    .post(userController.loginUser);
    
module.exports = router;