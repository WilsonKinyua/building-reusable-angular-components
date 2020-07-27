import {AbstractControl, ValidationErrors, } from '@angular/forms';

export class UsernameValidators {
  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0) {
          return { cannotContainSpace: true };
        } else {
          return null;
        }
  }
  // static usernameShouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       if (control.value === 'wilson') {
  //         resolve({usernameShouldBeUnique: true});
  //       }
  //        else {
  //         resolve(null);
  //       }
  //     }, 2000);
  //   });
  // }
  static  usernameShouldBeUnique(control: AbstractControl): ValidationErrors {
    if (control.value === 'wilson') {
      return { usernameShouldBeUnique: true };
    } else {
      return null;
    }
  }
}
