type stringOrNumber =  string|number;
type objectWithName = {
    name: string,
    uId: stringOrNumber;
}

let sellItem : (a: stringOrNumber, b: string) => void;
sellItem = (uId: stringOrNumber, title: string): void => {
    console.log(`Item ${uId}, ${title} has been sold out.`);
}
sellItem(1, 'shirt');

let horrorMovie: (a: stringOrNumber, b: string) => void;
horrorMovie = (uId: stringOrNumber, title: string): void => {
    console.log(`Category ${uId}, ${title}`);
}
horrorMovie('horror', 'THE NUN')

let greeting : (object: objectWithName) => void; 
greeting = (user: objectWithName) => {
    console.log(`Hello ${user.uId}, said ${user.name}`)
}
greeting({uId: 'Typescript', name:'Thuta'})