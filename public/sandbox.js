import { Invoice } from './classes/Invoice.js';
const invoiceOne = new Invoice('Thuta', 'This is Thuta.', 200);
const invoiceTwo = new Invoice('Kyaw Kyaw', 'This is Kyaw Kyaw.', 300);
const invoices = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);
invoices.forEach((inv) => {
    console.log(inv.client, inv.detail, inv.amount, inv.format());
});
const form = document.querySelector('.new-item-form');
// console.log(form.children);
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
