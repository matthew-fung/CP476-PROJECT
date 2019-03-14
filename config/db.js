// @franco, i left off here: https://www.w3schools.com/nodejs/nodejs_mongodb_createcollection.asp

const mongo = require('mongodb');
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});