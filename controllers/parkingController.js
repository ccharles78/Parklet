const db = require("../models");

// Defining methods for the articleController
module.exports = {
  findAllUsers: function(req, res) {
    db.users
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findAllGuests: function(req, res) {
    console.log(req.query)
    db.guestcar
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //the route to find a guest inputing an owner id
  findUserById: function(req, res) {
    db.users
      .findById(req.params.id)
      .populate("guestcars")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createUser: function(req, res) {
    db.users
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createGuests: function(req, res) {
    console.log(req.body)
    db.guestcar
      .create(req.body)
      .then(dbModel =>{
        db.users.findOneAndUpdate({_id:req.body.userId}, { $push: { guestcars: dbModel._id } }, { new: true })
        .then(dbuser => {
          console.log("createGuests", dbuser)
          res.json(dbModel)
        })
       .catch(err => console.log(err));
      })
      .catch(err => {
        console.log(err)
        res.status(422).json(err);
      })
  },
  updateUser: function(req, res) {
    db.users
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateGuests: function(req, res) {
    db.guestcar
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  removeUser: function(req, res) {
    db.users
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

removeGuests: function(req, res) {
    db.guestcar
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
