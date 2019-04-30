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

  upvote=0
  downvote=0

  public imagesUrl;
  
  quotes = [
    new Quote('There is no end to Good Things','Kimanthi snr',0,0,"Kimanthi.jnr"),
    new Quote('Remember to send fare','Kenyan Queens',0,0,"Boychild"),
    
    
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


title = 'app';
  constructor(config: NgbCarouselConfig) {
    config.interval = 500;
    config.wrap = true;
    config.keyboard = true;
  }
  

  ngOnInit() {
    this.imagesUrl = [
      
      ];
    
  }

}
