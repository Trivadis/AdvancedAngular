import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Observable } from 'rxjs';
import { Employee } from '../../model/employee.model';
import { Router, ActivatedRoute } from '@angular/router';

import { Store } from '@ngrx/store';
import * as fromStore from '../../store';

@Component({
  templateUrl: 'employee.component.html'
})
export class EmployeeComponent implements OnInit {
  employee$: Observable<Employee>;

  constructor(private store$: Store<fromStore.State>) {}

  ngOnInit() {
    this.employee$ = this.store$.select(fromStore.getSelectedEmployee);

    // this.route.paramMap.subscribe(p => {
    //   const eId = +p.get('employeeId');
    //   if (eId > 0) {
    //     this.employee$ = this.service.getEmployee(eId);
    //   }
    // });
  }

  onCreate(event: Employee) {
    this.store$.dispatch(new fromStore.CreateEmployee(event));
    // this.service.createEmployee(event).subscribe(() => {
    //   this.navigateBack();
    // });
  }

  onUpdate(event: Employee) {
    this.store$.dispatch(new fromStore.UpdateEmployee(event));
    // this.service.updateEmployee(event).subscribe(() => {
    //   this.navigateBack();
    // });
  }

  onRemove(event: Employee) {
    const remove = window.confirm('Are you sure?');
    if (remove) {
      this.store$.dispatch(new fromStore.RemoveEmployee(event));
      // this.service.removeEmployee(event).subscribe(() => {
      //   this.navigateBack();
      // });
    }
  }
}
