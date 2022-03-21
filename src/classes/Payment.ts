import { HasFormatter } from "../interfaces/HasFormatter"
export class Payment implements HasFormatter{
    constructor(
        readonly reciepient: string,
        private detail: string,
        public amount: number,
        ){}

    format(){
        return `${this.reciepient} owns $${this.amount} for ${this.detail}`
    }
}