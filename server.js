const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
// requires the model with Passport-Local Mongoose plugged in
const User = require('./models/index').users;
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
// use static authenticate method of model in LocalStrategy
passport.use(new LocalStrategy(User.authenticate()));
// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use(express.static('public'));
//Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
//Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
const mongodbUri ='mongodb://@ds249992.mlab.com:49992/homeowner';
mongoose.connect(mongodbUri, {
  useNewUrlParser: true,
  auth: {
    user: 'Admin',
    password: 'A12345'
  }
});
 
const connection = mongoose.connection;

const options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }, 
                replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };  
                
                connection.on('error', console.error.bind(console, 'connection error:'));  
 
                connection.once('open', function() {
                  // Wait for the database connection to establish, then start the app. 
                  console.log("MongoDB database connected sucessfully");                        
                });
                
                
                
// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});








