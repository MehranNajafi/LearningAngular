import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  invalidLogin: boolean;
  constructor(private authService: AuthService) { }
  form = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    rememberMe: new FormControl(''),
  });
  hide = true;
  get username() {
    return this.form.get('username');
  }
  get password() {
    return this.form.get('password');
  }
  signIn(credentials: any) {
    this.authService.create(credentials)
      .subscribe(result => {
        if (result)
          this.invalidLogin = false;
        else
          this.invalidLogin = true;
      });
  }
}
