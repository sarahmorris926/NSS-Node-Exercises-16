const multiply = require('../js/multiply');
const {assert:{isFunction, equal}} = require('chai');

describe('multipyling', () => {
    it('should be a function', () => {
        isFunction(multiply);
    })
    it('should multiply the arguments', () => {
        equal(24, multiply(6, 4));
    })
})