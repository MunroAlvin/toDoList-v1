// jshint esversion:6

// Express.JS initilization
const express = require("express");
const app = express();
const port = 3000;

// bodyParser initilization.
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function (req, res) {

    const event = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    let day = event.toLocaleDateString("en-US", options);

    res.render('list', {
        DAY: day,
        newListItems: items
    });
});


app.listen(port, () =>{
    console.log(`App listening on port ${port}`);
});