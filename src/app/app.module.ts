import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { QuotesDetailsComponent } from './quotes-details/quotes-details.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    SidebarComponent,
    QuoteFormComponent,
    QuotesDetailsComponent,
    ImageSliderComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
