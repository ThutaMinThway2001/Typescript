type stringOrNumber =  string|number;
type objectWithName = {
    name: string,
    uId: stringOrNumber;
}

const sellItem = (uId: stringOrNumber, title: string): void => {
    console.log(`Item ${uId}, ${title} has been sold out.`);
}
sellItem(1, 'shirt');

const horrorMovie = (uId: stringOrNumber, title: string): void => {
    console.log(`Category ${uId}, ${title}`);
}
horrorMovie('horror', 'THE NUN')

const greeting = (user: objectWithName) => {
    console.log(`Hello ${user.uId}, said ${user.name}`)
}
greeting({uId: 'Typescript', name:'Thuta'})