var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/employee";



MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = [{ name: "ABC", address: "Rajajinagar" },
  {name: "kavya", address: "Rajajinagar"},
  {name: "ABC", address: "vijayanagar"}
 ];
  dbo.collection("employees").insert(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});
