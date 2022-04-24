import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { filter } from 'rxjs';
import { AccountService } from '../servisi/account/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit,OnDestroy {

  public form?:FormGroup;
  public subscription;
  private accountService:AccountService=new AccountService();
  constructor(fb:FormBuilder) {
    this.form=fb.group({
      "firstName":this.firstName,
      "lastName":this.lastName,
      "email":this.email,
      "password1":this.password1,
      "password2":this.password2
    });
    this.subscription =this.form.valueChanges
    .pipe(filter(event=>(this.form?.valid==true&&this.password1.value===this.password2.value&&this.accountService.provera1(this.form))))
    .subscribe(data=>{document.getElementById("registerButton")?.setAttribute("disabled","false");this.accountService.account=data;});
   }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    console.log("Funkcija radi");
  }

  firstName:FormControl=new FormControl("",Validators.required);
  lastName:FormControl=new FormControl("",Validators.required);
  email:FormControl=new FormControl("",[Validators.required,Validators.pattern("^(([^<>()[\]\\.,;:\s@\"]+)|([A-z0-9]+.[A-z0-9]+)*)@(([a-zA-Z\-0-9]+[\.])+[a-zA-Z]{2,4})$")]);
  password1:FormControl = new FormControl("",[Validators.required,Validators.minLength(8)]);
  password2:FormControl = new FormControl("",[Validators.required,Validators.minLength(8)]);
  ngOnInit(): void {
  }
  registracija(){
    this.subscription.unsubscribe();
  }

}
