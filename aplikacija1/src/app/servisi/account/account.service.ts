import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import AuthResponseData from 'src/app/Interfejsi/AuthResponseData/AuthResponseData';
import { Account } from 'src/app/klase/account/account';
import User from 'src/app/klase/User/User';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private _user = new BehaviorSubject<User>(null);

  get user(){
    return this._user;
  }
  get isUserAuthenticated():Observable<boolean>{
    return this._user.asObservable().pipe(
      map((user:User)=>{
        if(user){
          return !!user.token;
        }else{
          return false;
        }
      })
    );
  }

  constructor(private http:HttpClient) {

   }
  public account:Account;
  //ulogovan
  private _isAuthenticated=false;
  //ulogovan getter
  get isAuthenticated():boolean{
    return this._isAuthenticated;
  }
  //ulogovan setter
  set isAuthenticated(value:boolean){
    this._isAuthenticated=value;
  }
  // registruj se
  public registracija(parametar:FormGroup):Observable<AuthResponseData>{
    if(parametar.valid){
      this.account=new Account(parametar.controls.firstName.value,parametar.controls.lastName.value,parametar.controls.email.value,parametar.controls.password1.value);
      return this.http.post<AuthResponseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebaseAPIKey}`,
        {email:this.account.email,password:this.account.password,returnSecureToken:true}
        
      ).pipe(tap((userData:AuthResponseData)=>{
        let expirationDate = new Date(new Date().getTime()+ +userData.expiresIn*1000);
        let user = new User(userData.localId,userData.email,userData.idToken,expirationDate);
        this._user.next(user);
      }));
    }
  }
  // accounts:Array<Account>=[
  //   new Account(
  //   "Stefke",
  //   "Velja",
  //   "neko@gmail.com",
  //   "nekoNesto"
  //   )];
  // public provera(parametar:FormGroup):boolean{
  //   for(let i=0;i<this.accounts.length;i++){
  //     if(this.accounts[i].email==parametar?.value.email&&this.accounts[i].password==parametar?.value.password)
  //         {
  //           this.account=this.accounts[i];
  //           return true;
  //         }
  //   }
  //   return false;
  // }
  // public provera1(parametar:{email:String,password:String}):boolean{
  //   for(let i=0;i<this.accounts.length;i++){
  //     if(this.accounts[i].email==parametar?.email&&this.accounts[i].password==parametar?.password)
  //         {
  //           return true;
  //         }
  //   }
    
  //   return false;
  // }
  public odjava(){
    this._user.next(null);
  }
  public ulogujSe(parametar:FormGroup){
    if(parametar.valid){
      this.account=new Account("","",parametar.controls.email.value,parametar.controls.password.value);
      return this.http.post<AuthResponseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebaseAPIKey}`,
      {email:this.account.email,password:this.account.password,returnSecureToken:true})
      .pipe(tap((userData:AuthResponseData)=>{
        let expirationDate = new Date(new Date().getTime()+ +userData.expiresIn*1000);
        let user = new User(userData.localId,userData.email,userData.idToken,expirationDate);
        this._user.next(user);
      }));
    }
  }
}
