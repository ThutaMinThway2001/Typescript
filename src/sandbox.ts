class Invoice{
    client: string;
    detail: string;
    amount: number;

    constructor(c: string, d: string, a: number){
        this.client = c;
        this.detail = d;
        this.amount = a;
    }
}

const invoiceOne = new Invoice('Thuta', 'This is Thuta.', 200);
const invoiceTwo = new Invoice('Kyaw Kyaw', 'This is Kyaw Kyaw.', 300);

const invoices: Invoice[] = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);

invoiceOne.client = "Admin"; //Thuta
invoiceTwo.amount = 400; //300

console.log(invoices);

const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
})