import { AbstractControl, ValidationErrors } from '@angular/forms';

export class OldPasswordValidators {
  static inValidOldPass(
    control: AbstractControl
  ): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      if (control.value !== '123') resolve({ inValidOldPass: true });
      else resolve(null);
    });
  }
  static passworldShouldMatch(control: AbstractControl) {
    let newPass = control.get('newPassword');
    let confirmPass = control.get('confirmPass');
    if (newPass !== confirmPass) return { passworldShouldMatch: true };
    return null;
  }
}
