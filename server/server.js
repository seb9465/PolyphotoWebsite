"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mongoose_1 = require("mongoose");
// Create a new express application instance
var app = express_1.default();
var router = express_1.default.Router();
//Create var of Mongoose type
var mongoose = new mongoose_1.Mongoose();
// Connect to mongoDB database
var mongoURL = 'mongodb://admin1:admin1@ds233212.mlab.com:33212/gear';
mongoose.connect(mongoURL, function (err) {
    if (err) {
        console.log(err.message);
        console.log(err);
    }
    else {
        console.log('Connected to MongoDb');
    }
});
// Routing
// Configure port
var port = 8080;
// Listen to port
app.listen(port);
console.log("Server is running on port: " + port);
