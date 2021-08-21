import { Quote } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  myQuote:Quotes[]=[
    new Quotes("Joseph Gakumo ","Motivation Quote","Success is not Final, Failure is not Fatal, Its the courage to continue that counts","JoeKumsy Kenyan"),
    // {name:"Teresia Wairimu ",tittleQuote:"Super Motivation Quote",messageQuote:"It is only when we take chances, when our lives improve. The initial and the most difficult risk that we need to take is to become honest.",author:"Walter Anderson"},
    // {name:"Moses Mugo ",tittleQuote:"Motivation Quote",messageQuote:"Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together.",author:"JDiane McLaren"},
    // {name:"Nancy Munyui",tittleQuote:"Motivation Quote",messageQuote:"When you change your thoughts, remember to also change your world.",author:"Norman Vincent Peale"},
  ];
  
  toggleQuoteDetails(index:any){
    this.myQuote[index].showQuoteMessageAndAuthor= !this.myQuote[index].showQuoteMessageAndAuthor;
  }

  quoteDoneDelete(isQuoteDone: any, index: number){
    if(isQuoteDone){
      this.myQuote.splice(index,1);
    }
  }
  numberOfLikes:number=0;
  numberOfDislikes:number=0;
  onClickLikes(){
    this.numberOfLikes++;

  }
  onClickDislike(){
    this.numberOfDislikes--;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
