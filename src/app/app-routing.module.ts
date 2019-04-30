import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{QuoteComponent} from './quote/quote.component';
import {QuotesDetailsComponent} from './quotes-details/quotes-details.component'

const routes: Routes = [
{
  path:'',
  component:QuoteComponent
  },
  {
    path:'quotes-details',
    component:QuotesDetailsComponent
    },
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
