import {
  AbstractControl,
  ControlContainer,
  ValidationErrors,
} from '@angular/forms';

export class UserNameValidatiors {
  static CanNotHaveSpace(control: AbstractControl): ValidationErrors | null {
    if ((<string>control.value).indexOf(' ') > 0)
      return { CanNotHaveSpace: true };
    return null;
  }
  static ShouldBeUnique(
    control: AbstractControl
  ): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'mehran') resolve({ shouldBeUnique: true });
        else resolve(null);
      }, 2000);
    });
  }
}
