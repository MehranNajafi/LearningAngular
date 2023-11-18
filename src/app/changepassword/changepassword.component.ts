import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { OldPasswordValidators } from './old-password-validators';

@Component({
  selector: 'changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css'],
})
export class ChangepasswordComponent {
  form;
  constructor(fb: FormBuilder) {
    this.form = fb.group({
        oldPassword: [
          '',
          Validators.required,
          OldPasswordValidators.inValidOldPass,
        ],
        newPassword: ['', Validators.required],
        confirmPassword: ['', Validators.required],
      },
      { Validators: OldPasswordValidators.passworldShouldMatch }
    );
  }
  onclick(){
    console.log(OldPasswordValidators.passworldShouldMatch);
  }
  get oldPassword() {
    return this.form.get('oldPassword');
  }
  get newPassword() {
    return this.form.get('newPassword');
  }
  get confirmPassword() {
    return this.form.get('confirmPassword');
  }
}
