import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { ActivatedRoute, Route, Router, RouterModule, Routes } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public loginForm:FormGroup;

  constructor(
    private fb:FormBuilder,
    private loginService:LoginService, 
    private authService:AuthService, 
    private router:Router
  ){
    this.loginForm = fb.group({
      username:['', [Validators.required, Validators.email]],
      password:['',Validators.required]
    })
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmit(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
      this.authService.login(this.loginForm.value);
    }
  }

}