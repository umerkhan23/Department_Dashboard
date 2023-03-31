var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db){
    if (err) throw err;
    var dbo = db.db("dashboard");
    var myobj = {
      "total_std":"",
      "new_std":"",
      "graduated":"",
      "total_faculty":"",
      "Ug_std_by_course":["","","",""],
      "Announcements":["","",""],
      "vision":"",
      "students_male_female":["",""],
      "faculty_male_female":["",""]

  };

    
     dbo.collection("mydata").insertOne(myobj, function(err, res){
        if (err) throw err;
        console.log(res.insertedCount+"document inserted");
        db.close();
     })
     });