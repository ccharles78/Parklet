const db = require("../models");

// Defining methods for the articleController
module.exports = {
  findAllHomeOwners: function(req, res) {
    db.homeOwner
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findAllGuests: function(req, res) {
    db.guestCar
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
//   findById: function(req, res) {
//     db.Article
//       .findById(req.params.id)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
  createHomeOwners: function(req, res) {
    db.homeOwner
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createGuests: function(req, res) {
    db.guestCar
      .create(req.body)
      .then(dbModel =>{
        db.users.findOneAndUpdate({where:{_id:req.body.userId}}, { $push: { guestcars: dbModel._id } }, { new: true });
        res.json(dbModel)
      })
      .catch(err => {
        console.log(err)
        res.status(422).json(err);
      })
  },
  updateHomeOwners: function(req, res) {
    db.homeOwner
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateGuests: function(req, res) {
    db.guestCar
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  removeHomeOwners: function(req, res) {
    db.homeOwner
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

removeGuests: function(req, res) {
    db.guestCar
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
