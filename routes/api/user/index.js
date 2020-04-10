const router = require("express").Router();
const userRoutes = require("./api-user");
const loginRoutes = require("./login-user");

router.use("/user", userRoutes);
router.use("/login", loginRoutes);

module.exports = router;