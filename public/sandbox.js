import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';
const form = document.querySelector('.new-item-form');
// console.log(form.children);
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'Thuta', age: 20 });
console.log(docOne.name);
const docTwo = {
    uid: 1,
    resourceName: 'person',
    data: {
        name: 'Thuta',
        age: 21
    }
};
const docThree = {
    uid: 2,
    resourceName: 'Naruto',
    data: ['sasuke', 'kakashi']
};
console.log(docTwo, docThree);
