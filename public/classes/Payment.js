export class Payment {
    constructor(reciepient, detail, amount) {
        this.reciepient = reciepient;
        this.detail = detail;
        this.amount = amount;
    }
    format() {
        return `${this.reciepient} owns $${this.amount} for ${this.detail}`;
    }
}
