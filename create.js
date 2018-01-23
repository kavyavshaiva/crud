var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, (err, db)=> {
  if (err) throw err;
  console.log("Database created!");
  var dbo = db.db("mydatabase");
 dbo.createCollection("employees", function(err, res) {
   if (err) throw err;
   console.log("Collection created!");
    db.close();
  });
});
