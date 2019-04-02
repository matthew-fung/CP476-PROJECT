window.onload = function () {
    var regbutton = document.getElementsByName('regbutton');
    regbutton.addEventListener('click', register);
    
    function register(e) {
        var emailregex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        var email = document.getElementById("#email").value;
        var name = document.getElementById("#name").value;
        var password = document.getElementById("#password").value;

        if (email == ""
            && name == ""
            && password == "") {
            e.preventDefault();
        } else {
//            var MongoClient = require('mongodb').MongoClient;
//            var url = "mongodb://localhost:27017/";

//            MongoClient.connect(url, function (err, db) {
//                if (err) throw err;
//                var dbo = db.db("mydb");
//
//                var today = new Date();
//                var dd = String(today.getDate()).padStart(2, '0');
//                var mm = String(today.getMonth() + 1).padStart(2, '0');
//                var yyyy = today.getFullYear();
//
//                today = mm + '/' + dd + '/' + yyyy;
//
//                var myobj = {
//                    name: name,
//                    password: password,
//                    email: email,
//                    accountCreation: today
//                };
//                
//                dbo.collection("user").insertOne(myobj, function (err, res) {
//                    if (err) throw err;
//                    console.log("User successfully registered");
//                    db.close();
//                });
//            });
            console.log("register valid");
            return true;
        }
    };
}
