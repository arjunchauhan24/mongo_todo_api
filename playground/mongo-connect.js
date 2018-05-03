// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err,db) => {


  if (err){
    return console.log("Error : ", err);
  }

  console.log("Connected to Mongo!");

  // db.collection('ToDos').insertOne({
  //
  //   text:"Something to do",
  //   completed: false
  //
  // }, (err,result)=> {
  //
  //   if (err){
  //       return console.log("Error Occured : ",err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // });

  // db.collection('Users').insertOne({
  //   name:"Arjun",
  //   age : 21,
  //   location: "Noida"
  //
  // },(err,result)=>{
  //
  //   if(err){
  //   return  console.log("Error : ",err);
  //   }
  //   console.log(result.ops[0]._id.getTimestamp());
  //   //console.log(JSON.stringify(result.ops,undefined,2));
  //
  // });

  db.close();


});
