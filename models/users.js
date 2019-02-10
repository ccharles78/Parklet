const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({
        firstName: { type: String, required: false },
        lastName: { type: String, required: false },
        username:{ type: String, required: false },
        phoneNumber:  { type: String, required: false },
        address: { type: String, required: false },
        password:{ type: String, required: false },
        userType:{ type: Number, required: false },
car: {
    make: { type: String, required: false },
    model: {type: String, required:false},
    color: {type: String, required:false},
    licensePlate: {type: String, required: false},
},
date: {type: Date, default: Date.now},

//This 'guestcars' is to link the guest car to the homeowner
guestcars: [
        {
          // Store ObjectIds in the array
          type: Schema.Types.ObjectId,
          // The ObjectIds will refer to the ids in the guestCar model
          ref: "guestCar"
        }
      ]
            
        });

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);


