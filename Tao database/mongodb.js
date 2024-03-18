var MongoClient = require('mongodb').MongoClient;

var url = "mongodb+srv://thanhmk123:Vthanhmk123@cluster0.stnytvr.mongodb.net/Get_Articel?retryWrites=true&w=majority&appName=Cluster0";
var mongo = new MongoClient(url);

mongo.connect((err, db) => {

  if (err) throw err;
  console.log("kết nối thành công");

  var dbo = db.db(Get_Articel);
  dbo.createCollection("student", (err, res) => {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
  
  var obj = { name: "Duong", address: "Hanoi", Coordinator :"IT", UserName: "duong123", Password: "duong123", role:  "student"};

  dbo.collection("student").insertOne(obj, (err, result) => {
    if (err) throw err;
    console.log("1 document inserted");
    console.log(result);
    db.close();
  });

});