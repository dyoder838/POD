// *********************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************

// Dependencies
var express = require('express');

var exphbs = require("express-handlebars");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;
// var allRoutes = require('./controllers');

// Requiring our models for syncing
var db = require('./models');

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
// app.use(express.static('public'));

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.get('/', function(req,res){
    res.send("home page")
})

db.sequelize.sync().then(function(){
    app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
});

// =============================================================