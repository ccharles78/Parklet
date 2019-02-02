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
//date: new Date(Date.now()),
// time: new Time(Time.now())


});

const GuestCar = mongoose.model("guestCar", guestCarSchema);

module.exports = GuestCar;



