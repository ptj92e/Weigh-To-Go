const router = require("express").Router();
const userRoutes = require("./user");
const workoutRoutes = require("./workout");
const mealRoutes = require("./meal");

router.use("/", userRoutes);
router.use("/workout", workoutRoutes);
router.use("/meal", mealRoutes);

module.exports = router;