const assert = require('assert');
const myapp = require('../app.js');

describe('Addition & multiply api function test', () => {
    it('should return correct results of additions (15, 27, 40)', () => {
    assert.equal(myapp.addition(10, 5), 15);
    assert.equal(myapp.addition(20, 7), 27);
    assert.equal(myapp.addition(30, 10), 40);
});
it('should return correct results of multiplications (50, 30, 56)', () => {
    assert.equal(myapp.multiply(10, 5), 50);
    assert.equal(myapp.multiply(6, 5), 30);
    assert.equal(myapp.multiply(8, 7), 56);
});
});