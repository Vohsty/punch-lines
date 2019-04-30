export class Quote {
  
  
  public showDetails: boolean;
  public myDate:Date
  
constructor(
  public quote:string, 
  public author:string,
  public upVote:number,
  public downVote:number, 
  public name:string){ 
    
    this.myDate= new Date()}
   
}
