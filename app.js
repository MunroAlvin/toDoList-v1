// jshint esversion:6

// Express.JS initilization
const express = require("express");
const app = express();
const port = 3000;

// bodyParser initilization.
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

// EJS initilization
app.set('view engine', 'ejs');

app.get("/", function(req, res){


});


app.listen(port, () =>{
    console.log(`App listening on port ${port}`);
});