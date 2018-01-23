var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, (err, db)=> {
  if (err) throw err;
  var dbo = db.db("mydatabase");
  dbo.collection("employees").deleteOne({name:'megha' }, (err, obj) =>{
    if (err) throw err;
    console.log("1 document deleted");
    db.close();
  });
});
