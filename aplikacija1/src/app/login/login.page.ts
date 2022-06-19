import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from '../servisi/account/account.service';
import AuthResponse from '../klase/AuthResponse/AuthResponse';
import { HttpErrorResponse } from '@angular/common/http';

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
  constructor(fb:FormBuilder,private accountService:AccountService,private router:Router) {
    this.form=fb.group({
      "email":this.email,
      "password":this.password,
    });
    this.subscription =this.form.valueChanges
    .subscribe((data)=>{
      if(this.form?.valid===true){
        document.getElementById("loginButton")?.setAttribute("disabled","false");
      }else{
        this.accountService.isAuthenticated=false;
        if(document.getElementById("loginButton")?.getAttribute("disabled"))
        document.getElementById("loginButton")?.setAttribute("disabled","true");
      }
    }
    );
  }



  ngOnInit(){
  }

  public registracija(){
    this.subscription.unsubscribe();
  }
  public ulogujSe(){
   this.accountService.ulogujSe(this.form).subscribe(data=>{
        if(data.registered==true){
          this.router.navigateByUrl("/app");
          this.form.controls.email.setValue("");
          this.form.controls.email.markAsUntouched();
          this.form.controls.password.setValue("");
          this.form.controls.password.markAsUntouched();
        }
    },()=>{alert("Nalog nije registrovan"); });
    this.subscription.unsubscribe();
    //subscription1.unsubscribe();
  }
  ngOnDestroy(){
  }
}
