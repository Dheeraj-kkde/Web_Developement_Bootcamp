const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){

    res.sendFile(__dirname +"/index.html");
});

app.post("/",function(req,res){

  const query=(req.body.cityName);
  const appKey= "a78a0cb7cc02c0b9fc9a4dc6f9428fd9";
  const unit= "metric";
  const url="https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+appKey+"&units="+unit;

    https.get(url, function(response){
      console.log(response.statusCode);

      response.on("data",function(data){
        const weatherData=JSON.parse(data);
        const temp = weatherData.main.temp;
        const weatherDescription = weatherData.weather[0].description;
        const icon= weatherData.weather[0].icon;
        const imageURL="https://openweathermap.org/img/wn/"+icon+"@2px.png";

        res.write("<h1>The temperature in "+query+" is "+temp+" degree celsius. </h1>");
        res.write("<p>The weather description is "+weatherDescription+"</p>");
        res.write("<img src="+imageURL+">");
        res.send();
      });

     });
});



app.listen(3000, function(){
  console.log("Server is running at port 3000");
});
