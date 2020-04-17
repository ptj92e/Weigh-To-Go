const router = require("express").Router();
const mealController = require("../../../controllers/mealController");

router
    .route("/")
    .post(mealController.createMeal)
    .get(mealController.showMeal);

module.exports = router;