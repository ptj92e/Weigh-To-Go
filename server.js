require("dotenv").config();
const express = require("express");

const mysql = require("mysql");
const routes = require("./routes");
const db = require("./models");
const app = express();
const PORT = process.env.PORT || 3001;
require('dotenv').config();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}


// Start the API server
db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
    });
});