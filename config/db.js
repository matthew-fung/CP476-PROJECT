// @franco, i left off here: https://www.w3schools.com/nodejs/nodejs_mongodb_createcollection.asp

const mongo = require('mongodb');
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  var dbo = db.db("mydb");
  dbo.createCollection("users", function(err, res) {
    if (err) throw err;
    console.log("Users collection created!");
  });
  dbo.createCollection("results", function(err, res) {
    if (err) throw err;
    console.log("Results collection created!");
  });
  dbo.createCollection("locations", function(err, res) {
    if (err) throw err;
    console.log("Locations collection created!");
  });
  db.close();
});