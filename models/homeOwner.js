const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const homeOwnerSchema = new Schema({
firstName: { type: String, required: true },
lastName: { type: String, required: true },
phoneNumber:  { type: String, required: true },
address: { type: String, required: true },
loginName:{ type: String, required: true },
password:{ type: String, required: true },
car: {
    make: {type: String, required: true},
    model: {type: String, required:true},
    color: {type: String, required:true},
    licensePlate: {type: String, required: true},
}

});

const HomeOwner = mongoose.model("homeOwner", homeOwnerSchema);

module.exports = HomeOwner;




