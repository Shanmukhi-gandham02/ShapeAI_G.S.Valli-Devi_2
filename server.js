const express = require("express");
const bodyParser = require("body-parser");

const app= express();
app.use(bodyParser.urlencoded({extended: true}));
const port = 5577;

app.get("/", function(req, res){
  res.sendFile(__dirname+"/index.html");
});


app.post("/", function(req,res){
  var w = Number(req.body.weight); 
  var h = Number(req.body.height);
  var result= Math.round( w / (h*h));
  
  if (result<18.5){
    res.send("<h3>Your BMI is nearly "+result+ "<h3> You are Underweight.</h3>");
  }

  else if (18.5 <=result && result < 25){
    res.send("<h3>Your BMI is nearly "+result+ "<h3> You are Normalweight. </h3>");
  }

  else if (25<= result && result <30){
    res.send("<h3>Your BMI is nearly "+result+ "<h3> You are Overweight.</h3>");
  }

  else if(result >=30){
    res.send("<h3>Your BMI is nearly "+result+ "<h3> You are Obese.</h3>");

  }
});


app.listen(port,function(){
  console.log("Server has started on port 5577");
});

