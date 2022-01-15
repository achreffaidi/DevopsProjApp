var express = require('express');
const app = express()
const port = 3000
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
    var result = parseInt(number1, 10) + parseInt(number2, 10);
    res.send(result.toString());
});

app.get('/mult', function(req, res, next) {
    //get query params n1 & n2
    var number1 = req.query.n1;
    var number2 = req.query.n2;

    // calculate addition & send it back
    var result = parseInt(number1, 10) * parseInt(number2, 10);
    res.send(result.toString());
});

app.listen(port, function() {
    console.log("Example app listening at http://localhost:" + port);
});

module.exports = app;
