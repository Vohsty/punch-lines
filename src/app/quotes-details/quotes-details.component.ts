import { Component, OnInit,EventEmitter,Output,Input } from '@angular/core';
import {Quote } from '../quote'

@Component({
  selector: 'app-quotes-details',
  templateUrl: './quotes-details.component.html',
  styleUrls: ['./quotes-details.component.css']
})
export class QuotesDetailsComponent implements OnInit {

  quotes = [
    new Quote('There is no end to Good Things','Kimanthi snr',0,0,"Z.G")
    
];
@Input() quote:Quote;


  @Output() isDelete = new EventEmitter<boolean>();
 @Output() isPlus = new EventEmitter<boolean>();
 @Output() isMinus = new EventEmitter<boolean>();

  votePlus(plus:boolean) {
    this.isPlus.emit(plus);
  }
  voteMinus(minus:boolean) {
    this.isMinus.emit(minus);
  }
  delQuote(i){
    this.quotes.splice(i, 1)
  }

  upVote(isPlus, index){
    if (isPlus) {
      this.quotes[index].upVote +=1;
    }
  }
    downVote(isMinus, index){
      if (isMinus) {
        this.quotes[index].downVote +=1;
      }
  
  }
  
  constructor() { }

  ngOnInit() {
  }

}
