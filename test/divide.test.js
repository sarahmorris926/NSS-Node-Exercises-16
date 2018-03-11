const divide = require('../js/divide');
const {assert:{isFunction, equal}} = require('chai');

describe('dividing', () => {
    it('should be a function', () => {
        isFunction(divide);
    })
    it('should divide a by b', () => {
        equal(2, divide(16, 8));
    })
})