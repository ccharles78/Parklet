const router = require("express").Router();
const Routes = require("./routes");


// article routes
router.use("/routes", Routes);

module.exports = router;
