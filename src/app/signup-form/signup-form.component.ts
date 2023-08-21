import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserNameValidatiors } from './user-name-validatiors';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
})
export class SignupFormComponent {
  form = new FormGroup({
    personal: new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
    }),
    username: new FormControl(
      '',
      [
        Validators.required,
        Validators.minLength(3),
        UserNameValidatiors.CanNotHaveSpace,
      ],
      UserNameValidatiors.ShouldBeUnique
    ),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });
  get username() {
    return this.form.get('username');
  }
  get password() {
    return this.form.get('password');
  }
  get firstName() {
    return this.form.get('personal.firstName');
  }
  get lastName() {
    return this.form.get('personal.lastName');
  }
  login() {
    this.form.setErrors({
      invalidLogin: true,
    });
  }
}
