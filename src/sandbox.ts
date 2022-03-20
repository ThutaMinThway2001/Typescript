let sayName: Function;

sayName = () => {
    console.log('Hello Typescript.');
}
sayName();

const add = (a:number, b:number, c: number | string = 3):void => {
    console.log(a + b);
    console.log(c);
}
add(1, 2, "hello");

const subtract = (a:number, b:number):number => {
   return a - b;
}
let minus = subtract(10, 5); //5
console.log(minus);