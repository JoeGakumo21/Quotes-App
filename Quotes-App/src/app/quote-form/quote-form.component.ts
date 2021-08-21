import { EventEmitter } from '@angular/core';
// import { Quote } from '@angular/compiler';
import { Component, OnInit, Output } from '@angular/core';
import { Quotes } from '../quotes';
@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  newQuote = new Quotes(0,"","","","",new Date());

  @Output() addQuote=new EventEmitter<Quotes>();

  quoteSubmit(){
    this.addQuote.emit(this.newQuote);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
