const router = require("express").Router();
const userController = require("../../../controllers/userControllers");

router
    .route("/")
    .post(userController.newUser);
router
    .route("/:email")
    .put(userController.updateUser);

router
    .route("/")
    .get(userController.getUser);

module.exports = router;