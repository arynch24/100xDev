const express = require('express');
//body-parser is a middleware that parses the body of the request
const bodyParser = require('body-parser');

//express() is a function that creates an Express application.
//stores that app instance in a variable called app

//app is a main server object
const app = express();

const port = 3001;

app.use(bodyParser.json());

app.get('/', (req, res)=>{
    //req is an object representing the HTTP request
    //it contains information about the request made by the client -headers,body,query parameters

    //res is an object representing the HTTP response
    //it is used to send a response back to the client

    console.log(req.body); //req.body contains the body of the request

    // //req.query contains the query parameters of the request
    // console.log(req.headers['Authorization']);
    
    // //res.send() sends a response to the client
    // res.send('Hello World!');

    // //res.json() sends a JSON response to the client
    // res.json({message: 'Hello World!'});

    // //res.status() sets the HTTP status code of the response
    // res.status(200).send('Hello World!');

});

//app.listen() starts the server and listens for incoming requests
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

