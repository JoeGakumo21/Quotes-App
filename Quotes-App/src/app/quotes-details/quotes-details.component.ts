import { Quotes } from './../quotes';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-quotes-details',
  templateUrl: './quotes-details.component.html',
  styleUrls: ['./quotes-details.component.css']
})
export class QuotesDetailsComponent implements OnInit {

  @Input() myQuote:Quotes;
  @Output() isQuoteDone= new EventEmitter<boolean>();

  quoteComplete(quoteDone:boolean){
    this.isQuoteDone.emit(quoteDone);
  }
  numberOfLikes:number=0;
  numberOfDislikes:number=0;
  // likes  function
  onClickLikes(){
    this.numberOfLikes++;

  }
  // function for dislike
  onClickDislike(){
    this.numberOfDislikes++;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
