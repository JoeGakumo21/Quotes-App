import { Quotes } from './../quotes';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotes-details',
  templateUrl: './quotes-details.component.html',
  styleUrls: ['./quotes-details.component.css']
})
export class QuotesDetailsComponent implements OnInit {

  @Input() myQuote:Quotes;

  constructor() { }

  ngOnInit(): void {
  }

}
