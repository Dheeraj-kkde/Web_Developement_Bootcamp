const express = require("express");

const app = express();

app.get("/",function(req,res){
  res.send("<h1>Hello</h1>");
});

app.get("/contact", function(req,res){
  res.send("Contact me at 8708863339");
});

app.get("/about", function(req,res){
  res.send("Full Stack Developer along with good knowledge of blockchain");
});

app.get("/hobbies",function(req,res){
  res.send("<ul><li>Coffee</li><li>music</li></ul>");
})

app.listen(3000, function(){
  console.log("Server started on port 3000");
});
