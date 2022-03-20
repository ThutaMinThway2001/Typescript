"use strict";
const sellItem = (uId, title) => {
    console.log(`Item ${uId}, ${title} has been sold out.`);
};
sellItem(1, 'shirt');
const horrorMovie = (uId, title) => {
    console.log(`Category ${uId}, ${title}`);
};
horrorMovie('horror', 'THE NUN');
const greeting = (user) => {
    console.log(`Hello ${user.uId}, said ${user.name}`);
};
greeting({ uId: 'Typescript', name: 'Thuta' });
