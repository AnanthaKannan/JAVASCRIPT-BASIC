require('dotenv').config({ path: '../.env' });
const fast2sms = require('fast-two-sms');

const FAST_SMS = process.env.FAST_SMS;
console.log(FAST_SMS);


const options = {
    authorization: FAST_SMS,
    sender_id: 'Anantha Kannan',
    message: 'YOUR_MESSAGE_HERE',
    numbers: ['9943558342']
}
 fast2sms.sendMessage(options)
 .then((result) => {
    console.log('res', result);
 })
.catch((err) => {
    console.log('err', err);
})