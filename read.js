var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, (err, db)=> {
  if (err) throw err;
  var dbo = db.db("mydatabase");
  dbo.collection("employees").findOne({name:'kavya'}, (err, result)=> {
    if (err) throw err;
    console.log(result);
  });
    var query = { address: "Rajajinagar" };
    dbo.collection("employees").find(query).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
    db.close();
  });
});
