var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  // var myquery = { address: "Rajajinagar" };
  // var newvalues = { name: "Mickey", address: "bangalore" };

  dbo.collection("employees").update({name:'Mickey'}, {name:'Mahi',address:'Chithradurga'}, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    db.close();
  });
});
