import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
const invoiceOne = new Invoice('Thuta', 'This is Thuta.', 200);
const invoiceTwo = new Invoice('Kyaw Kyaw', 'This is Kyaw Kyaw.', 300);
const invoices = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);
// invoices.forEach((inv) => {
//     console.log(inv.client, inv.detail, inv.amount, inv.format());
// })
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Invoice('Thuta', 'web work', 200);
// docTwo = new Payment('Kyaw Kyaw', 'Work Web', 400);
// let doc: HasFormatter[] = [];
// doc.push(docOne);
// doc.push(docTwo);
// console.log(doc)
const form = document.querySelector('.new-item-form');
// console.log(form.children);
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
    // console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
