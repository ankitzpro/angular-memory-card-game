import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'
import { Validators, FormBuilder, FormGroup, FormControl} from '@angular/forms';



@Component({
  selector: 'StartComponent',
  templateUrl: './start.component.html'
})
export class StartComponent implements OnInit {

  constructor( public routers:Router,
    public formBuilder: FormBuilder){
  }
  public myForm : FormGroup;
    submitted = false;

  ngOnInit() {
    this.createForm();
  }
  get f() { return this.myForm.controls; }

  createForm(){
    this.myForm  = this.formBuilder.group({
     email: ['', Validators.required]
   });
   }

   onSubmit(){
    this.submitted = true;
    if (this.myForm.invalid) {
          return;
        }
        
        var formData=this.myForm.value;
        this.routers.navigate(['/cards']);
   }

}
 

