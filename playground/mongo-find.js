const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err,db) => {

  if (err){
    return console.log("Error : ", err);
  }

  console.log("Connected to Mongo!");

  // db.collection('ToDos').find().count().then((count)=>{
  //   console.log("ToDos count : ",count);
  // }, (err) => {
  //
  //   console.log("Error Occured : ", err);
  //
  // });

  db.collection("Users").find({name:"Arjun"}).count().then((count) => {

    console.log("Count is : ",count);

  }, (err) => {
    console.log("Error Occured : ", err);

  });


  // if (err){
  //   return console.log("Error : ", err);
  // }
  //
  // console.log("Connected to Mongo!");
  //
  // db.collection('ToDos').find({
  //     _id:ObjectID("5aeb25b06e0cfb2cb8dfca74")
  // }).toArray().then((docs)=>{
  //   console.log("ToDos");
  //   console.log(JSON.stringify(docs,undefined,2));
  //
  // }, (err) => {
  //
  //   console.log("Error Occured : ", err);
  //
  // });


   db.close();


});
