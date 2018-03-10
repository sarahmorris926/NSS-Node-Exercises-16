const add = require('../js/add');
const {assert:{isFunction, equal}} = require('chai');

describe('adding', () => {
    it('should be a function', => {
        isFunction(add);
    })
})