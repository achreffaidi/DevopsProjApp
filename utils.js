
var addition = function addition (a, b)
{
    return  parseInt(a, 10) + parseInt(b, 10);
};

var multiply = function multiply (a, b)
{
    return  parseInt(a, 10) * parseInt(b, 10);
};

module.exports = {addition : addition, multiply: multiply};