const router = require("express").Router();
const wgerController = require("../../../controllers/wgerController");

router
    .route("/")
    .post(wgerController.createWorkout);

module.exports = router;