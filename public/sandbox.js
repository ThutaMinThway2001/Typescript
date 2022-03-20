"use strict";
let sayName;
sayName = () => {
    console.log('Hello Typescript.');
};
sayName();
const add = (a, b, c = 3) => {
    console.log(a + b);
    console.log(c);
};
add(1, 2, "hello");
const subtract = (a, b) => {
    return a - b;
};
let minus = subtract(10, 5); //5
console.log(minus);
