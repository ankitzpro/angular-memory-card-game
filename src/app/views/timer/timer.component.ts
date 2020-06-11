import { Component, OnInit } from '@angular/core';
import { CardService} from '../../card.service';
import { Router} from '@angular/router';

@Component({
  selector: 'timer',
  templateUrl: './timer.component.html'
})
export class TimerComponent implements OnInit {

  constructor(private service: CardService,private routers:Router) { }
anstext:String;
intervalId: number = 0;
message: string = '';
seconds: number = 5;

  ngOnInit() {
this.anstext=this.service.anstext;
this.countDown();
  }
  private countDown(): void {
    this.intervalId = window.setInterval(() => {
      this.seconds -= 1;
      if (this.seconds === 0 ) {
        if(this.service.level>=9){
          this.routers.navigate(['/start'])
        }
        else{
        this.routers.navigate(['/cards'])
      } 
    }
    }, 1000);
  }
}
