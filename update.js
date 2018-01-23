var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydatabase");
  // var myquery = { address: "Rajajinagar" };
  // var newvalues = { name: "Mickey", address: "bangalore" };
//  dbo.collection("employees").update({name:'kavya'}, {name:'Kavya',address:'Hassan'}, (err, res)=> {
dbo.collection("employees").findOneAndUpdate({name:'Mahi'},{name:'Abc',address:'Bangalore',_id:7,email:'abc@gmail.com'},(err,res)=>{

    if (err) throw err;
    console.log("1 document updated");
    db.close();
  });
});
