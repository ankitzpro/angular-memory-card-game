import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService {

level=0;

anstext='';

score=0;

textMaker(text:string){
  this.anstext=text;

  if(this.level==9)
  this.anstext='Your Final Score :'+this.score;
}
  
}