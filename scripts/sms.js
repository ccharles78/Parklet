// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
require('dotenv').config();
 

const accountSid = process.env.ACCOUNTSID;
const authToken = process.env.AUTHTOKEN;
const from = process.env.FROM;
const client = require('twilio')(accountSid, authToken);

const sendSMS = (phoneNumber, body) => {
  console.log("phone:", phoneNumber, "body:", body)
  client.messages
    .create({
      body: body,
      from: from,
      to: phoneNumber
    })
    .then(message => console.log(message.sid));
}
module.exports = {
  sendSMS
}
