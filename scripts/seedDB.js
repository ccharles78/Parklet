const mongoose = require("mongoose");
const db = require("../models");

// This file empties the collections and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/homeOwners"
);

const homeOwnerSeed = [


{
  firstName: "Charles",
  lastName: "Guirola-Ribeiro",
  phoneNumber: "786-325-5566",
  address: "20756 SW 11 St",
  loginName: "CharlesR",
  password: "password",
  car: {
      make: "Toyota",
      model: "Corolla",
      color: "Gold",
      licensePlate: "ERF123"
  }

},
{
    firstName: "David",
    lastName: "Banner",
    phoneNumber: "786-111-5555",
    address: "25744 SW 25 St",
    loginName: "DBanner",
    password: "password",
    car: {
        make: "Toyota",
        model: "Corolla",
        color: "Gold",
        licensePlate: "ERF123"
    }
  
  },
  {
    firstName: "Chevy",
    lastName: "Chase",
    phoneNumber: "786-325-5566",
    address: "20756 SW 11 St",
    loginName: "CharlesR",
    password: "password",
    car: {
        make: "Toyota",
        model: "Corolla",
        color: "Gold",
        licensePlate: "ERF123"
    }
  
  }

  
];

const guestCarSeed = [
    
    {
        firstName: "Star",
        lastName: "Lisa",
        lotNumber: "1",
        car: {
            make: "Toyota",
            model: "Corolla",
            color: "Gold",
            licensePlate: "ERF123"
        }
      
       
      
      },
      {
          firstName: "Jorge",
          lastName: "Foreman",
          lotNumber: "1",
          car: {
              make: "Honda",
              model: "Accord",
              color: "Red",
              licensePlate: "IOP545"
          }
          
        
        
        },
        {
          firstName: "John",
          lastName: "Snow",
          lotNumber: "3",
          car: {
              make: "Horse",
              model: "Stallion",
              color: "Black",
              licensePlate: "777YYY"
          }
         
        
        }
    
  ];


db.homeOwner
  .remove({})
  .then(() => db.homeOwner.collection.insertMany(homeOwnerSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  db.guestCar
  .remove({})
  .then(() => db.guestCar.collection.insertMany(guestCarSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
