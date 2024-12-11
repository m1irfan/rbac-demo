import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoginService } from './login.service';
import { tap } from 'rxjs/operators';
import { Usermodel } from '../model/usermodel';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user?:Usermodel;

  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();
  

  constructor(private loginSerivce:LoginService, private router:Router) { 
    const token = localStorage.getItem('token');
    this._isLoggedIn$.next(!!this.token);
    if(this.token)
      this.user = this.getUser(this.token);
    if (this.user) {
      console.log("user h " + JSON.stringify(this.user));
    }
  }



  login(loginDetails:object){
    return this.loginSerivce.login(loginDetails).subscribe(response=>{
      if(response){
        console.log("respones2--"+response)
        localStorage.setItem('token',response.accessToken);
        this._isLoggedIn$.next(true);
        this.user = this.getUser(response.accessToken);
        this.router.navigate(['dashboard']);
      }
    })
  }

  get token(){
    return localStorage.getItem('token');
  }

  private getUser(token:string):Usermodel{
    return JSON.parse(atob(token.split('.')[1])) as Usermodel;
  }
}
