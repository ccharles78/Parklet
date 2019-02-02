const router = require("express").Router();
const parkingController = require("../../controllers/parkingController");

// login 
router.route("/")
  .get(parkingController.findAllHomeOwners)
  .post(parkingController.createHomeOwners);

// Matches with "/api/article/:id"
router.route("/:id")
  //.get(parkingController.findById)
  .put(parkingController.updateHomeOwners)
  .delete(parkingController.removeHomeOwners);

module.exports = router;
