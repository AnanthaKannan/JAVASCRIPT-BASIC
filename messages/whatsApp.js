// const WHATS_APP = "Dt-HDefNpBqRsRYWDAsW9Z7ZgXZZWZQ53AjyiSZU";

// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = 'ACd55cb2f839d57c7bfc49bdde68ccb832';
const authToken = 'ee8023388a0ff8062eafcc7ac716eb01';
const client = require('twilio')(accountSid, authToken);

client.messages
      .create({
         from: 'whatsapp:+19046010348',
         body: 'Hello there!',
         to: 'whatsapp:9042141018'
       })
      .then(message => console.log(message.sid))
      .catch((error) => {
          console.log('error', error);
      });
