const router = require("express").Router();
const wgerController = require("../../../controllers/wgerController");

router
    .route("/")
    .post(wgerController.createWorkout)
    .get(wgerController.showExercise);

router
    .route("/:id")
    .get(wgerController.showExercise);
        
module.exports = router;