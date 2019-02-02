const router = require("express").Router();
const loginRoutes = require("./login");

// article routes
router.use("/login", loginRoutes);

module.exports = router;
