import { EmployeeValidators } from './../../validators/employee.validator';
import { Employee } from '../../model/employee.model';

import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  ChangeDetectionStrategy
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { EmployeeService } from '../../services/index';

@Component({
  selector: 'app-employee-form',
  templateUrl: 'employee-form.component.html',
  styleUrls: ['employee-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeFormComponent implements OnInit, OnChanges {
  @Input() employee: Employee;

  @Output() create = new EventEmitter<Employee>();
  @Output() update = new EventEmitter<Employee>();
  @Output() remove = new EventEmitter<Employee>();

  form: FormGroup = this.fb.group(
    {
      firstname: [
        '',
        {
          validators: Validators.required,
          updateOn: 'blur'
        }
      ],
      lastname: ['', Validators.required],
      email: [
        '',
        [Validators.required, EmployeeValidators.emailValidator],
        EmployeeValidators.checkEmailUnique(this.service)
      ],
      emailConfirm: ['', [Validators.required, EmployeeValidators.emailValidator]]
    },
    {
      validator: EmployeeValidators.checkEmailsMatch,
      updateOn: 'submit' // not working at the moment. Open bug!
    }
  );

  isEdit = false;
  title = 'Create';

  constructor(private fb: FormBuilder, private service: EmployeeService) {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (this.employee && this.employee.id) {
      this.isEdit = true;
      this.title = 'Edit';
      this.form.patchValue(this.employee);
    }
  }

  get firstname() {
    return this.form.get('firstname');
  }
  get lastname() {
    return this.form.get('lastname');
  }
  get email() {
    return this.form.get('email');
  }
  get emailConfirm() {
    return this.form.get('emailConfirm');
  }

  createEmployee() {
    if (this.form.valid) {
      this.create.emit(this.form.value);
    }
  }

  updateEmployee() {
    if (this.form.touched && this.form.valid) {
      this.update.emit({ ...this.employee, ...this.form.value });
    }
  }

  removeEmployee() {
    this.remove.emit({ ...this.employee, ...this.form.value });
  }
}
