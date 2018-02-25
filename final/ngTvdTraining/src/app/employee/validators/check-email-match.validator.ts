import { Directive } from '@angular/core';
import { Validator, ValidatorFn, FormControl, AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { EmployeeValidators } from './employee.validator';

@Directive({
  selector: '[appIsEmails][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: IsEmailValidator, multi: true }
  ]
})
export class IsEmailValidator implements Validator {
  validate(c: AbstractControl) {
      return EmployeeValidators.emailValidator(c);
  }
}
