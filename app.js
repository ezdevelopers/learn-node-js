var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var port = process.env.PORT || 3000;

//Templating Engine
app.set("view engine", "ejs");

//Middlewares
app.use('/assets', express.static(__dirname + '/public'));

app.use("/", function(req,res, next){
  console.log("Request URL: "+ req.url);
  next();
});
// parse application/x-www-form-urlencoded
var urlencodedParser = bodyParser.urlencoded({ extended: false });

//express routing 
app.get('/', function(req, res){
  res.render("index");
});

app.post("/person",urlencodedParser, function(req,res){
  res.send('Thank you');
  console.log(req.body.firstname);
  console.log(req.body.lastname);
});

app.get('/person/:id', function(req, res){
  res.render("person",{ID:req.params.id,Qstr:req.query.qstr});
 });

app.get("/api", function(req, res){
  res.json({name:"John",location:"Nigeria"});
});

app.listen(port);