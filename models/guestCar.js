const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const guestCarSchema = new Schema({
firstName: { type: String, required: true },
lastName: { type: String, required: true },
lotNumber: {type: Number, required: true },
car: {
    make: { type: String, required: true },
    model: {type: String, required:true},
    color: {type: String, required:true},
    licensePlate: {type: String, required: true},
},
date: {type: Date, default: Date.now},
//expDate: {type: Date, default: new Date(new Date() + 24*60*60*1000) },
expDate: {type: Date, default: new Date(+new Date() + 24*60*60*1000) },
status: {type: String, required:false},


});

const GuestCar = mongoose.model("guestCar", guestCarSchema);

module.exports = GuestCar;



