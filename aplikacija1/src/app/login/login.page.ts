import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AccountService } from '../servisi/account/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {



  public form:FormGroup | undefined;
  private readonly regex = "^(([^<>()[\]\\.,;:\s@\"]+)|([A-z0-9]+.[A-z0-9]+)*)@(([a-zA-Z\-0-9]+[\.])+[a-zA-Z]{2,4})$";
  public subscription:any;

  email:FormControl=new FormControl("",[Validators.required,Validators.pattern(this.regex)]);
  password:FormControl=new FormControl("",[Validators.required,Validators.minLength(8)]);
  account:AccountService=new AccountService();
  constructor(fb:FormBuilder) {
    this.form=fb.group({
      "email":this.email,
      "password":this.password,
    });
    this.subscription =this.form.valueChanges
    .subscribe(()=>{if(this.form?.valid===true&&this.account.provera(this.form))document.getElementById("loginButton")?.setAttribute("disabled","false");});}



  ngOnInit(): void {
  }

  public registracija(){
    this.subscription.unsubscribe();
  }

}
