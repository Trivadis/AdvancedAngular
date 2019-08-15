import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { EmployeeFormComponent } from '../../components/employee-form/employee-form.component';
import { Employee } from '../../model/employee.model';
import * as fromStore from '../../store';

@Component({
  templateUrl: 'employee.component.html'
})
export class EmployeeComponent implements OnInit {
  employee$: Observable<Employee>;

  @ViewChild(EmployeeFormComponent, { static: true })
  employeeFormComp: EmployeeFormComponent;

  constructor(private store$: Store<fromStore.State>) {}

  ngOnInit() {
    this.employee$ = this.store$.select(fromStore.getSelectedEmployee);
  }

  onCreate(employee: Employee) {
    this.store$.dispatch(fromStore.createEmployee({ employee }));
  }

  onUpdate(employee: Employee) {
    this.store$.dispatch(fromStore.updateEmployee({ employee }));
  }

  onRemove(employee: Employee) {
    const remove = window.confirm('Are you sure?');
    if (remove) {
      this.store$.dispatch(fromStore.removeEmployee({ employee }));
    }
  }
}
