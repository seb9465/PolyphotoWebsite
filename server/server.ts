import express, { Router } from 'express';
import * as bodyParser from 'body-parser';
import {Mongoose} from 'mongoose';

// Create a new express application instance
const app: express.Application = express();
const router: Router = express.Router();

//Create var of Mongoose type
let mongoose : Mongoose = new Mongoose();

// Connect to mongoDB database
const mongoURL: string = 'mongodb://admin1:admin1@ds233212.mlab.com:33212/gear';
mongoose.connect(mongoURL, (err) => {
    if (err) {
      console.log(err.message);
      console.log(err);
    }
    else {
      console.log('Connected to MongoDb');
    }
  });

// Routing
router.get('/', (request, response) => {
    response.status(200).send({message: 'Hello World!'})
});
//Set app to use express backend router
app.use(router);

// Configure port
const port: number = 8080;
// Listen to port
app.listen(port);
console.log(`Server is running on port: ${port}`);