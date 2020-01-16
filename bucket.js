const fs = require('fs');
const AWS = require('aws-sdk');
require('dotenv').config()

const s3 = new AWS.S3({
    accessKeyId: process.env.ACCESSKEYID,
    secretAccessKey: process.env.SECRETACCESSKEY
    });

const fileName = 'check.txt';

const uploadFile = () => {
  fs.readFile(fileName, (err, data) => {
     if (err) throw err;
     const params = {
         Bucket: 'admin-anantha-kannan', // pass your bucket name
         Key: 'data/contacts.txt', // file will be saved as testBucket/contacts.csv
         Body: JSON.stringify("my data is here")
     };
     s3.upload(params, function(s3Err, data) {
         if (s3Err) throw s3Err
         console.log(`File uploaded successfully at ${data.Location}`)
     });
  });
};


uploadFile()