'use strict';

let operator = process.argv[2];
let a = +process.argv[3];
let b = +process.argv[4];

const calculate = (operator, a, b) => {
    if (operator == "add"){
        operator = require('./add');
    } else if (operator == "subtract"){
        operator = require('./subtract');
    } else if (operator == "multiply"){
        operator = require('./multiply');
    } else if (operator == "divide"){
        operator = require('./divide');
    };
    console.log(operator(a, b));
}

calculate(operator, a, b);
