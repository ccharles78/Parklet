const db = require("../models");
const { ObjectId } = require('mongodb')
const  { sendSMS } = require('../scripts/sms')

// Defining methods for the articleController
module.exports = {
  findAllUsers: function (req, res) {
    db.users
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findAllGuests: function (req, res) {
    console.log(req.query)
    db.guestcar
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //the route to find a guest inputing an owner id
  findUserById: function (req, res) {
    db.users
      .findById(req.params.id)
      .populate("guestcars")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createUser: function (req, res) {
    db.users
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createGuests: function (req, res) {
    console.log("createGuests1", req.body)
    db.guestcar
      .create(req.body)
      .then(dbModel => {
        db.users.findOneAndUpdate({ _id: req.body.ownerId }, { $push: { guestcars: dbModel._id } }, { new: true })
          .then(dbuser => {
            console.log("createGuests2", dbuser)
            res.json(dbModel)
          })
          .catch(err => console.log(err));
      })
      .catch(err => {
        console.log(err)
        res.status(422).json(err);
      })
  },
  updateUser: function (req, res) {
    db.users
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateGuests: function (req, res) {
    db.guestcar
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  removeUser: function (req, res) {
    db.users
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  removeGuests: function (req, res) {
    db.guestcar
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  triggerSMS: function (req, res) {
    const now = new Date()
    const future = new Date()
    console.log("here")
    future.setHours(future.getHours() + 1);

    //'Sat Feb 17 2019 8:30:20 GMT-0500 (Eastern Standard Time)
    db.guestcar.find({
      $and: [
        { expDate: { $gt: new Date(now) } },
        { expDate: { $lt: new Date(future) } }
      ]
    })
      .then(results => {
        for(let i = 0; i < results.length; i++){
          const guestCarId = results[i].id
          const guestCarFirstName = results[i].firstName
          const o_id = new ObjectId(guestCarId);
          const body = guestCarFirstName + "'s car is about to expire"
          findUserAndSendSMS(o_id, body)
        }
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },


  triggerExpiredSMS: function (req, res) {
    const now = new Date()
  
    //'Sat Feb 17 2019 8:30:20 GMT-0500 (Eastern Standard Time)
    db.guestcar.find({
    expDate: { $lt: new Date(now)}
    })
      .then(results => {
        for(let i = 0; i < results.length; i++){
          const guestCarId = results[i].id
          const guestCarFirstName = results[i].firstName
          const o_id = new ObjectId(guestCarId);
          const body = guestCarFirstName + "'s car is now expired"
          findUserAndSendSMS(o_id, body)
        }
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

}



const findUserAndSendSMS = (o_id, body) => {
  db.users.findOne({
    guestcars: o_id
  })
  .then((results) => {
    const { phoneNumber } = results
    sendSMS(phoneNumber, body)
  })
}
