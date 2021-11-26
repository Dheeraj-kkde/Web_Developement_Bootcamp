// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB");

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please check you data entry, no name specified"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);//in model function we put singular name of our db and it will create the prural of that collection.

const fruit = new Fruit({
  name:"Peach",
  rating: 10,
  review: "Peaches are so yummy"
})

//fruit.save();

const personSchema = new mongoose.Schema({
  name: String,
  age : Number,
  favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);//in model function we put singular name(Person) of our db and it will create the prural(people) of that collection.

const pineapple = new Fruit({
  name:"Pineapple",
  score:9,
  review:"great fruit"
});

const mango = new Fruit({
  name:"Mango",
  score:10,
  review:"delicious"
});

//mango.save()

//pineapple.save();

const person = new Person({
  name: "Dheeraj",
  age: 26,
  //favouriteFruit: pineapple
});

//person.save();
//
Person.updateOne({name:"John"},{favouriteFruit:mango}, function(err){
  if(err){
    console.log(err);
  }else{
    console.log("Successfully updated the document");
  }

});

// const kiwi = new Fruit({
//   name : "Kiwi",
//   score: 10,
//   review: "The best fruit!"
// });
//
// const orange = new Fruit({
//   name: "Orange",
//   score: 4,
//   review: "too sour"
// });
//
// const banana = new Fruit({
//   name: "Banana",
//   score: 3,
//   review: "weird texture"
// });

// Fruit.insertMany([kiwi,orange,banana],function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Successfully saved all the fruits into fruitsDB");
//   }
// });

Fruit.find(function(err, fruits){
  if(err){
    console.log(err);
  }else{

    //mongoose.connection.close();// we do this becuase we have to close the nodemon again and again.Add this line where we are done with the code.

    fruits.forEach(function(fruit){
      console.log(fruit.name);
    });
  }
});

// //Updating
//
// Fruit.updateOne({_id: "619b296d07aee3645b2feb86"},{name:"Peach"},function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Successfully updated the collection");
//   }
// });
//
// //Deleting
//
// Fruit.deleteOne({name:"Peach"},function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Successfully deleted the record");
//   }
// });

// Person.deleteMany({name:"John"},function(err){
//   if(err){
//     console.log(err);
//   }else{
//   console.log("Successfully deleted the record");
//   }
// });

//Connection URL
// const url = 'mongodb://localhost:27017';

//Database Name
// const dbName = 'fruitsDB';

//Create a new MongoClient
// const client = new MongoClient(url);

//use connect method to connect to the server
// client.connect(function(err){
//   assert.equal(null,err);
//   console.log("Connected successfully to server");
//
//   const db = client.db(dbName);
//
//   insertDocuments(db, function(){
//     client.close();
//   });
// });

//const insertDocuments = function(db, callback){
    //Get the documents collection
    //const collection = db.collection('fruits');
    //Insert some document
    // collection.insertMany([
    //     {
    //       name: "Apple",
    //       score: 8,
    //       review: "Great fruit"
    //     },
    //     {
    //       name: "Orange",
    //       score: 6,
    //       review: "kinda sour"
    //     },
    //     {
    //       name: "Banana",
    //       score: 9,
    //       review: "Great Stuff!"
    //     }
    // ], function(err,result){
    //   assert.equal(err,null);
      //assert.equal(3, result.result.n);
    //  assert.equal(3, result.ops.length);
//       console.log("Inserted 3 documents into the collection");
//       callback(result);
//     }
//   );
// };

// const findDocuments = function(db, callback){
  //Get the documents collection
  //const collection = db.collection('fruits');
  //Find some documents
//   collection.find({}).toArray(function(err, fruits){
//     assert.equal(err, null);
//     console.log("Found the following records");
//     console.log(fruits);
//     callback(fruits);
//   });
// };
