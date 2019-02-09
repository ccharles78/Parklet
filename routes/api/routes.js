const router = require("express").Router();
const parkingController = require("../../controllers/parkingController");

// login for property managers to find all homeowners and crate them
router.route("/mgmt")
  .get(parkingController.findAllUsers)
  .post(parkingController.createUser)
  .put(parkingController.updateUser)
  .delete(parkingController.removeUser);

// Matches with "/api/article/:id"
// router.route("/:id")
  //.get(parkingController.findById)
  // .put(parkingController.updateHomeOwners)
  // .delete(parkingController.removeHomeOwners);




// login for home owners  to find thier guests and add a guest
router.route("/guest")
  .get(parkingController.findAllGuests)
  .post(parkingController.createGuests);
  
// login for securoty to find all guests
router.route("/security")
  //.get(parkingController.findById)
  .get(parkingController.findAllGuests)
  .delete(parkingController.removeUser);

module.exports = router;
