class Invoice{
    // readonly client: string;
    // private detail: string;
    // public amount: number;

    constructor(
        readonly client: string,
        private detail: string,
        public amount: number,
        ){}

    format(){
        return `${this.client} owns $${this.amount} for ${this.detail}`
    }
}

const invoiceOne = new Invoice('Thuta', 'This is Thuta.', 200);
const invoiceTwo = new Invoice('Kyaw Kyaw', 'This is Kyaw Kyaw.', 300);

const invoices: Invoice[] = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);

invoices.forEach((inv) => {
    console.log(inv.client, inv.detail, inv.amount, inv.format());
})

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