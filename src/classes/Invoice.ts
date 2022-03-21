export class Invoice{
    constructor(
        readonly client: string,
        private detail: string,
        public amount: number,
        ){}

    format(){
        return `${this.client} owns $${this.amount} for ${this.detail}`
    }
}