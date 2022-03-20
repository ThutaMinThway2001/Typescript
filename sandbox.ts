//any types
let age: any;
age = 21;
console.log(age);
age = 'twenty one';
console.log(age);
age = true;
console.log(age);
age = {name: 'thuta'};
console.log(age);

let mixed : any[] = [];
mixed.push('orange', 1);
console.log(mixed);

let user : {name: string, age: number};
user = {
    name: "Thuta",
    age: 21
}
console.log(user);