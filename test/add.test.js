const add = require('../js/add');
const {assert:{isFunction, equal}} = require('chai');

describe('adding', () => {
    it('should be a function', () => {
        isFunction(add);
    })
    it('should add the arguments', () => {
        equal(10, add(5, 5));
    })
})