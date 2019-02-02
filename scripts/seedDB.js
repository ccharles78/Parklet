const mongoose = require("mongoose");
const db = require("../models");

// This file empties the collections and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/homeOwners"
);

const homeOwnerSeed = [
//   {
//     title: "The Dead Zone",
//     author: "Stephen King",
//     synopsis:
//       "A number-one national best seller about a man who wakes up from a five-year coma able to see people's futures and the terrible fate awaiting mankind in The Dead Zone - a \"compulsive page-turner\" (The Atlanta Journal-Constitution). Johnny Smith awakens from a five-year coma after his car accident and discovers that he can see people's futures and pasts when he touches them. Many consider his talent a gift; Johnny feels cursed. His fiancée married another man during his coma, and people clamor for him to solve their problems. When Johnny has a disturbing vision after he shakes the hand of an ambitious and amoral politician, he must decide if he should take drastic action to change the future. The Dead Zone is a \"faultlessly paced...continuously engrossing\" (Los Angeles Times) novel of second sight.",
//     date: new Date(Date.now())
//   },

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

//   {
//     title: "Lord of the Flies",
//     author: "William Golding",
//     synopsis:
//       "The tale of a party of shipwrecked schoolboys, marooned on a coral island, who at first enjoy the freedom of the situation but soon divide into fearsome gangs which turn the paradise island into a nightmare of panic and death.",
//     date: new Date(Date.now())
//   },
//   {
//     title: "The Catcher in the Rye",
//     author: "J.D. Salinger",
//     synopsis:
//       "The Catcher in the Rye is a 1951 novel by J. D. Salinger. A controversial novel originally published for adults, it has since become popular with adolescent readers for its themes of teenage angst and alienation. It has been translated into almost all of the world's major languages. Around 1 million copies are sold each year with total sales of more than 65 million books. The novel's protagonist Holden Caulfield has become an icon for teenage rebellion. The novel also deals with complex issues of innocence, identity, belonging, loss, and connection.",
//     date: new Date(Date.now())
//   }
  
];

const guestCarSeed = [
    // {
    //   title: "The Dead Zone",
    //   author: "Stephen King",
    //   synopsis:
    //     "A number-one national best seller about a man who wakes up from a five-year coma able to see people's futures and the terrible fate awaiting mankind in The Dead Zone - a \"compulsive page-turner\" (The Atlanta Journal-Constitution). Johnny Smith awakens from a five-year coma after his car accident and discovers that he can see people's futures and pasts when he touches them. Many consider his talent a gift; Johnny feels cursed. His fiancée married another man during his coma, and people clamor for him to solve their problems. When Johnny has a disturbing vision after he shakes the hand of an ambitious and amoral politician, he must decide if he should take drastic action to change the future. The Dead Zone is a \"faultlessly paced...continuously engrossing\" (Los Angeles Times) novel of second sight.",
    //   date: new Date(Date.now())
    // },
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
        //date: new Date(Date.now()),
       // time: new Time(Time.now())
      
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
          //date: new Date(Date.now()),
         // time: new Time(Time.now())
        
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
          //date: new Date(Date.now()),
          //time: new Time(Time.now())
        
        }
    // {
    //   title: "Born a Crime: Stories from a South African Childhood",
    //   author: "Trevor Noah",
    //   synopsis:
    //     "Trevor Noah, one of the comedy world's fastest-rising stars and host of The Daily Show, tells his wild coming-of-age story during the twilight of apartheid in South Africa and the tumultuous days of freedom that followed. In this Audible Studios production, Noah provides something deeper than traditional memoirists: powerfully funny observations about how farcical political and social systems play out in our lives. \"Nelson Mandela once said, 'If you talk to a man in a language he understands, that goes to his head. If you talk to him in his language, that goes to his heart.' He was so right. When you make the effort to speak someone elses language, even if it's just basic phrases here and there, you are saying to them, 'I understand that you have a culture and identity that exists beyond me. I see you as a human being.'\" (Trevor Noah)\nAttuned to the power of language at a young age - as a means of acceptance and influence in a country divided, then subdivided, into groups at odds with one another - Noah's raw, personal journey becomes something extraordinary in audio: a true testament to the power of storytelling. With brutal honesty and piercing wit, he forgoes an ordinary reading and, instead, delivers something more intimate, sharing his story with the openness and candor of a close friend. His chameleon-like ability to mimic accents and dialects, to shift effortlessly between languages including English, Xhosa, and Zulu, and to embody characters throughout his childhood - his mother, his gran, his schoolmates, first crushes and infatuations - brings each memory to life in vivid detail. Hearing him directly, you're reminded of the gift inherent in telling one's story and having it heard; of connecting with another, and seeing them as a human being.\nThe stories Noah tells are by turns hilarious, bizarre, tender, dark, and poignant - subsisting on caterpillars during months of extreme poverty, making comically pitiful attempts at teenage romance in a color-obsessed world, thrown into jail as the hapless fall guy for a crime he didn't commit, thrown by his mother from a speeding car driven by murderous gangsters, and more.",
    //   date: new Date(Date.now())
    // }
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
