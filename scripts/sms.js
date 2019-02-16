// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'AC3093d6add8a9098cb9a2667b1367b976';
const authToken = 'a7243816b8e16685a3c66b65f91e66c3';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'Your guest is about to expire',
     from: '+13053063012',
     to: '+17868593967'
   })
  .then(message => console.log(message.sid));