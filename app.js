const expressHandlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const express = require('express');
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;
const router = express.Router();

app.use(express.static(__dirname + "/public"));

app.engine("handlebars", expressHandlebars({
    deafultLayout:"main"
}));

app.use(bodyParser.urlencoded({
    extended:false
}));

app.use(router);

const db = process.env.MONGO_URI ||"mongodb://localhost/mongoWebScraper"; 

mongoose.connect(db, function(error){
    if (error){
        console.log(error);
    }
    else {
        console.log("moongoose connection works!")
    }});

app.listen(PORT, function() {
    console.log("Listening on Port:" + PORT);
})




