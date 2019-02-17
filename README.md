# Parklet

Run NPM I at start

Here are the routes if you want to access the page via url

/guest ={AddGuestForm}
/ownlist ={OwnerGuestList}
/security =  {Security}
/mgmt = {AddUserForm}
/owner = {OwnerPage}
/ = default login page

PART 1-------------------------------------------------------------------------------------------------------

In order to use the new functionality you need to have users in the database with a user type. The users types work as follows:

// 1 - mgmt
// 2 - owner
// 3 - security
// 4 - are developers

eg. A user type with 1 is managment that can enter in any type of user (home owner, another manager, security)

Since your datbase does not match mine and if you alreayd have users created they most likely do not have a user type assigned in the database you need to create new users with a usr type as follows

From the command prompt before you run yarn start, run: node seedDB.js  to seed your database, you can see 4 types of users that will be created each with a unique user type. You can look at the seedDB file in the scripts folder for more info on the users created, but I have provided the user types, login, and passowrds below for reference (the login and passwords are case sensitive).

If you want to add more users than what is in the seedDB, you can login as an owner (type 2 below) and create more users. When you do this you will have to indicate the user type of the user you are creating.

User type 1 for mgmt 
      
        userType: "1",
        username: "Mgmt",
        password: "Parklet",

User type 2 for owner

        userType: "2",
        username: "Owner1",
        password: "Parklet",
 
User type 3 for secuirty (Note: this link does not do anything yet, still have to code it)      
 
        userType: "3",
        username: "Security1",
        password: "Parklet",
       
User type 4  for us the developers so we can see all the links w/out having to login as someone particular  
          userType: "4",
          username: "Dev",
          password: "Parklet",



PART 2-------------------------------------------------------------------------------------------------------

Once you have your users setup with the user types you are testing, run yarn start

The login page will open, you should login with a user in your database that has a defined user type of 1 - 4. If you try to loign with a user that does not have a user type, the page will not repond. 

If you login as a user with a paritcular user type you will be directed only to the page that user is authroized to see. What user types will see and the functionality in the page is defined below:

-User type 1 - You are the property manager 
These users will get routed to the AddFprmPage.Js. 
On this page any type of user can be created such as a home owner, security, or another property manager
Make sure whatever user you create has a user type between 1 - 4 or they will not be able to login

-User type 2 - You are the home owner
These users will get routed to the OwnerPage.Js. 
On this page, the owner can see any guests they have checked in (This code is not dynamic yet, there are some tweaks I need to make)

-User type 3 - You are the security guard
Page not crated yet 
On this page, the security can see any active guests in the neighborhood

-User type 4 - You are the developer (team us)
When you login you will get links to everything so you do not have to continously login as a different user
