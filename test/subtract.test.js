const subtract = require('../js/subtract');
const {assert:{isFunction, equal}} = require('chai');

describe('subtracting', () => {
    it('should be a function', () => {
        isFunction(subtract)
    })
    it('should subtract second argument from first argument', () => {
        equal(11, subtract(20, 9));
    })
})