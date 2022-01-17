var express = require('express');
var AWS = require("aws-sdk");
const client = require('prom-client');

// Create a Registry which registers the metrics
const register = new client.Registry();
// Add a default label which is added to all metrics
register.setDefaultLabels({
  app: 'nodejs-app'
})

// AWS configuration
AWS.config.update({
    region: "eu-west-1",  
});


const app = express();
const port = process.env.PORT || 5000;
/* GET home page. */
app.get('/', function(req, res, next) {
    res.send("Home !!!")
});

app.use(function(err, req, res, next) {
    res.locals.error = err;
const status = err.status || 500;
res.statusStatus(status);
res.send("error");
});

app.get('/add', function(req, res, next) {
    //get query params n1 & n2
    var number1 = parseInt(req.query.n1, 10);
    var number2 = parseInt(req.query.n2, 10);

    // calculate addition & send it back
    var result = addition(number1, number2)
    gaugeA.inc(1);
    res.send(result.toString());
});

app.get('/mult', function(req, res, next) {
    //get query params n1 & n2
    var number1 = req.query.n1;
    var number2 = req.query.n2;

    // calculate multiplication & send it back
    var result = multiply(number1, number2);
    gaugeM.inc(1);
    res.send(result.toString());
});


// Metrics


const gaugeA = new client.Gauge({
    name: 'Add',
    help: 'Number of add function calls',
    // add `as const` here to enforce label names
    labelNames: ['count'],
    registers: [register],
  });

  const gaugeM = new client.Gauge({
    name: 'Multiply',
    help: 'Number of add function calls',
    // add `as const` here to enforce label names
    labelNames: ['count'],
    registers: [register],
  });


app.get('/metrics', async function(req, res, next) {

    
    res.setHeader('Content-Type', register.contentType);
    let metrics = await register.metrics();
    res.end(metrics);


});

app.listen(port, function() {
    console.log("Example app listening at http://localhost:" + port);
});

var addition = function addition (a, b)
{
    return  parseInt(a, 10) + parseInt(b, 10);
};

var multiply = function multiply (a, b)
{
    return  parseInt(a, 10) * parseInt(b, 10);
};
module.exports = {addition : addition, multiply: multiply};
