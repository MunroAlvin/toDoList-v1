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

app.get("/", function (req, res) {

    const currentDate = new Date();
    const today = currentDate.getDay();
    if (today == 6 || today == 0) {
        console.log("Today is weekend");
        res.write("Today is weekend") // this sends a chunk of the response body. This method may be called multiple times to provide successive parts of the body.
    } else {
        console.log("Today is week day");
        res.write("Today is week day");
        res.write("another message");
        res.send();
    }
});


app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});