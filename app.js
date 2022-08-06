// jshint esversion:6

// Express.JS initilization
const express = require("express");
const app = express();
const port = 3000;

// bodyParser initilization.
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
    extended: true
}));

//ejs initilization
app.set('view engine', 'ejs');

//variables
var items = [];



app.get("/", function (req, res) {

    const event = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    var day = event.toLocaleDateString("en-US", options);

    res.render('list', {
        DAY: day,
        newListItems: items
    });
});

app.post("/", function (req, res) {

    var item = req.body.newItem;


    items.push(item);
    res.redirect("/");
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});