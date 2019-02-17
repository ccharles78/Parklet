// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'AC3093d6add8a9098cb9a2667b1367b976';
const authToken = 'a7243816b8e16685a3c66b65f91e66c3';
const client = require('twilio')(accountSid, authToken);

const sendSMS = (phoneNumber, body) => {
  client.messages
    .create({
      body: body,
      from: '+13053063012',
      to: phoneNumber
    })
    .then(message => console.log(message.sid));
}
module.exports = {
  sendSMS
}
