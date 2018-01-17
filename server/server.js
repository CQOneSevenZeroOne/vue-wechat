const conn = require("./config/db");
const getUser = require("./routes/user");
const express = require("express");
var bodyParser = require('body-parser');
var session = require("./routes/session");
var wsocket = require("./websocket");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));

getUser(app,conn);
session(app,conn);
wsocket(app,conn);


console.log("server start");