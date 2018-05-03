const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err,db) => {

  if (err){
    return console.log("Error : ", err);
  }

  console.log("Connected to Mongo!");
  //
  // db.collection('ToDos').deleteMany({text: "Eat Breakfast "}).then((result) =>{
  // //   console.log(result);
  // });
  //
  // db.collection("ToDos").deleteOne({text: "Eat Dinner "}).then((result) => console.log(result));

  db.collection("Users").findOneAndDelete({_id : new ObjectID('5aeb3d618b7d7729344e505b')}).then((result) =>{

  console.log(result);
  });

   db.close();


});
