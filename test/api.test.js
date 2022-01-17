const assert = require('assert');
const utils = require('../utils.js');

describe('Addition & multiply api function test', () => {
    it('should return correct results of additions (15, 27, 40)', () => {
    assert.equal(utils.addition(10, 5), 15);
    assert.equal(utils.addition(20, 7), 27);
    assert.equal(utils.addition(30, 10), 40);
});
it('should return correct results of multiplications (50, 30, 56)', () => {
    assert.equal(utils.multiply(10, 5), 50);
    assert.equal(utils.multiply(6, 5), 30);
    assert.equal(utils.multiply(8, 7), 56);
});
});