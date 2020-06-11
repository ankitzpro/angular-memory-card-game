import { Component, OnInit ,ElementRef, ViewChildren,QueryList} from '@angular/core';
import { CardService} from '../../card.service';

import { Router} from '@angular/router';
@Component({
  selector: 'CardsComponent',
  templateUrl: './cards.component.html'
})

export class CardsComponent implements OnInit {
  constructor(private service:CardService, private routers:Router ) { }
level=this.service.level;
arr=[];
click=false;
clicked=0;
i=3;
seconds=20;
intervalId: number = 0;
@ViewChildren('crd') components:QueryList<ElementRef>;
  ngOnInit() {
    
  if(this.service.level<3){
    this.i=3;
  }
  else if(this.service.level<6){
 this.i=5;
  }
  else {
     this.i=7;
  }
this.randomArray(this.i);
  }


  counter(i: number) {
    return new Array(i);
} 

public randomArray(i){

  var _this=this;
  

 
 var j = 0;                

function myLoop() {    
  setTimeout(function() {   
     const a= Math.floor(Math.random() * 29) + 0 ;
    _this.arr.push(a);
    _this.components.toArray()[a].nativeElement.classList.add('btn-secondary');
    setInterval(() => {
           _this.components.toArray()[a].nativeElement.classList.remove('btn-secondary');
        }, 1000);
    j++;                    
    if (j <  i) {           
      myLoop();             
    }
    else{
      _this.click=true;
      _this.countDown();
    }
                         
  }, 2000)
}

myLoop();

}


  
cardClick( index) {
  if(this.click==true && this.clicked<this.i){
  if(this.arr[this.clicked]==index){
  }
  else{
    this.service.level++;
    this.clearTimer();
    this.service.textMaker('Wrong box selected');
    this.clearTimer();
    this.routers.navigate(['/timer']);
  }
    this.clicked++;
    if(this.clicked==this.i){

    this.service.level++;
    this.service.score++;
    this.service.textMaker('Level Completed');
    this.clearTimer();
    this.routers.navigate(['/timer']);
    }
  }
  }
private countDown(): void {
    this.intervalId = window.setInterval(() => {
      this.seconds -= 0.1;
      if ((this.seconds).toFixed(1) === '0.1') {
        this.service.level++;
        this.service.textMaker("You didn't attempted");
         this.clearTimer();
        this.routers.navigate(['/timer'])
      } 
    }, 100);
  }
clearTimer(): void { clearInterval(this.intervalId); }
}