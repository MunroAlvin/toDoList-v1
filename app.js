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


app.get("/", function (req, res) {

    const currentDate = new Date();
    const today = currentDate.getDay();
    var day = "";
    switch (today) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        default:
            day = "Invalid day !!";
            break;
    }
    res.render('list', {
        DAY: day
    });
});


app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});