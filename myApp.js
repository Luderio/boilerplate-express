var express = require('express');
var app = express();
let bodyParser = require('body-parser');

//How to serve a response using a route handler.
/*app.get('/', (req, res) => {
  const message = "Hello Express";
res.send(message);
});*/

//How to serve an HTML File.
/*app.get('/', (request, response) => {
  let path = __dirname + "/views/index.html";
  response.sendFile(path);
});*/
//-----------------------------------------

// Using middleware to serve static assets.
/*let path = "/public";
let absolutePath = __dirname + "/public";

app.use(path, express.static(absolutePath));*/
//-----------------------------------------

//Serving JSON on a Specific Route.
/*let jsonPath = "/json";

app.get(jsonPath, (request, response) => {
  response.json({"message": "Hello json"})
});*/
//-----------------------------------------

//Use the .env File.
/*let jsonPath = '/json';
app.get(jsonPath, (request, response) => {

//the variable below is connected to the Secrets tab of Replit since creation of an .env file is impossible in replit. 
const mySecret = process.env['MESSAGE_STYLE'];

if (mySecret === "uppercase") {
response.json({"message": "Hello json".toUpperCase()});
}else {
  response.json({"message": "Hello json"});
}
});*/
//-----------------------------------------

//Implement a Root-Level Request Logger Middleware.
/*app.use(function middleware(req, res, next) {
  let string = req.method + " " + req.path + " - " + req.ip;
  console.log(string);
  next();
}); */
//-----------------------------------------

//Chain Middleware to Create a Time Server.
/*const path = '/now';

const middleware = (request, response, nextAction) => {
  request.time = new Date().toString();
  nextAction();
}

const route = (request, response) => {
  response.send({"time": request.time});
}

app.get(path, middleware, route)*/

//-----------------------------------------

//Get Route Parameter Input from the Client.
/*const path = "/:word/echo";

const route = (request, response) => {
  let word = request.params.word;
  response.json({echo: word})
}

app.get(path, route)*/

//-----------------------------------------

//Get Query Parameter Input from the Client.
/*const path = '/name';

const route = (request, response) => {

let firstname = request.query.first;
let lastname = request.query.last;

  response.json({"name": `${firstname} ${lastname}`});
}

app.get(path, route);
*/
//-----------------------------------------

//Use body-parser to Parse POST Requests.

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
//-----------------------------------------

//Get Data from POST Requests.
const path = '/name';

app.post(path, (request, response) => {
  let string = request.body.first + " " + request.body.last;
  response.json({"name": string});
});







































 module.exports = app;
