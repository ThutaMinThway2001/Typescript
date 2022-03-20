//Explicit types
let character : string;
let age : number;
let isSingle : boolean;

character = "Spiderman";
age = 21;
isSingle = true;

//Array
let fruits : string[] = [];
fruits.push("apple");
console.log(fruits);

//Union types
let mixing : (string | number | boolean)[] = [];
mixing.push("apple", 1, true);
console.log(mixing);

let newCharacter : string | number;

//Object
let userOne : object;
userOne = {name: 'Thuta', age: 20, isSingle: true};
console.log(userOne);

let userTwo : {
    name: string,
    age: number,
    isSingle: boolean
}
userTwo = {
    name: 'Aung Aung',
    age: 21,
    isSingle: false
}
console.log(userTwo);