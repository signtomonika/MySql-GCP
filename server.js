//NPM PACKAGES

const express = require('express');
const bodyParser = require('body-parser');
var path = require('path');
var favicon = require('serve-favicon');
var cors = require('cors');


//REPO REFERENCES

const config = require('./config');


//CONFIGURING APP TO USE EXPRESS, FAVICON AND PUBLIC FOLDER

const app = express();
app.use(cors());


app.use(bodyParser.json()); //using the return value of bodyParser.json() as middleware

app.use(express.static(path.join(__dirname, 'public')));

app.use(favicon(path.join(__dirname, '/public', 'favicon.ico')));

var viewPath = __dirname + '/public/';

//Home Page

app.get('/', (req, res) => {

    res.sendFile(viewPath + "home.html");
  
  });

//Require Routes

require('./routes/office.route')(app);

require('./routes/task.route')(app);

require('./routes/customer.route')(app);

//Port

    // Start the server
    const server = app.listen(config.get('PORT'), () => {
        const port = server.address().port;
        console.log(`App listening on port ${port}`);
    });




module.exports = { app };


