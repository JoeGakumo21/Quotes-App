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

  constructor() { }

  ngOnInit(): void {
  }

}
