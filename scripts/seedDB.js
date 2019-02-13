const mongoose = require("mongoose");
const db = require("../models");

// This file empties the collections and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/homeOwners"
);

// const homeOwnerSeed = [


// {
//   firstName: "Charles",
//   lastName: "Guirola-Ribeiro",
//   phoneNumber: "786-325-5566",
//   address: "20756 SW 11 St",
//   loginName: "CharlesR",
//   password: "password",
//   car: {
//       make: "Toyota",
//       model: "Corolla",
//       color: "Gold",
//       licensePlate: "ERF123"
//   }

// },
// {
//     firstName: "David",
//     lastName: "Banner",
//     phoneNumber: "786-111-5555",
//     address: "25744 SW 25 St",
//     loginName: "DBanner",
//     password: "password",
//     car: {
//         make: "Toyota",
//         model: "Corolla",
//         color: "Gold",
//         licensePlate: "ERF123"
//     }
  
//   },
//   {
//     firstName: "Chevy",
//     lastName: "Chase",
//     phoneNumber: "786-325-5566",
//     address: "20756 SW 11 St",
//     loginName: "CharlesR",
//     password: "password",
//     car: {
//         make: "Toyota",
//         model: "Corolla",
//         color: "Gold",
//         licensePlate: "ERF123"
//     }
  
//   }

  
// ];

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

  // 1 - mgmt
// 2 - owner
// 3 - security
// 4 - are developers

  const userSeed = [
    //seed user type 2 for owner user and login
    {
        userType: "2",
        firstName: "Henty",
        lastName: "lopz",
        username: "Owner1",
        password: "Parklet",
        phoneNumber: "111-222-5555",
        address: "222 SW 54th St",
        lotNumber: "",
        car: {
            make: "Toyota",
            model: "Corolla",
            color: "Gold",
            licensePlate: "ERF123"
        }      
      },
      //seed user type 1 for mgmt user and login
      {
        userType: "1",
        firstName: "David",
        lastName: "Ri",
        username: "Mgmt",
        password: "Parklet",
        phoneNumber: "",
        address: "",
        lotNumber: "",
        car: {
            make: "",
            model: "",
            color: "",
            licensePlate: ""
        }
        
      },
      //seed user type 3 for security user and login
      {
        userType: "3",
        firstName: "Jeffe",
        lastName: "Garcia",
        username: "Security1",
        password: "Parklet",
        phoneNumber: "",
        address: "",
        lotNumber: "",
        car: {
            make: "",
            model: "",
            color: "",
            licensePlate: ""
        },
        {
          userType: "4",
          firstName: "Developer",
          lastName: "Struggling",
          username: "Dev",
          password: "Parklet",
          phoneNumber: "",
          address: "",
          lotNumber: "",
          car: {
              make: "",
              model: "",
              color: "",
              licensePlate: ""
          }
        
      }
      
    
  ];


  



  db.users
  .remove({})
  .then(() => db.users.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  db.guestcars
  .remove({})
  .then(() => db.guestcars.collection.insertMany(guestCarSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
