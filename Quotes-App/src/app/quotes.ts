export class Quotes {
    showQuoteMessageAndAuthor:boolean;
    constructor(public name:string, public tittleQuote:string, public messageQuote:string, public author:string, public postedOn:Date){
        this.showQuoteMessageAndAuthor=false;
    }
    // name:string;
    // tittleQuote:string;
    // messageQuote:string;
    // author:string;

}
