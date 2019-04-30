import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
  providers: [NgbCarouselConfig]
})
export class QuoteComponent implements OnInit {

  

  public imagesUrl;
  
  quotes = [
    new Quote('There is no end to Good Things','Kimanthi snr',0,0,"Z.G")
    
];

toggleDetails(index) {
  this.quotes[index].showDetails = !this.quotes[index].showDetails;
}

addQuote(newQuote){
  this.quotes.push(newQuote)
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

title = 'app';
  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 500;
    config.wrap = true;
    config.keyboard = true;
  }
  

  ngOnInit() {
    this.imagesUrl = [
      
      ];
    
  }

}
