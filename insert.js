var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydatabase");
  var myobj = [
    { name: "Mahi", address: "Rajajinagar",email:'mahi@gmail.com',_id:4 },
  {name: "kavya", address: "Rajajinagar",email:'kavya@gmail.com',_id:5},
  {name: "megha", address: "vijayanagar",email:'megha @gmail.com',_id:6}
 ];
  dbo.collection("employees").insert(myobj, (err, res)=> {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});
