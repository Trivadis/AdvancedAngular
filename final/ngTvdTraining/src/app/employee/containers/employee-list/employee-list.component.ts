import { Observable } from 'rxjs';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Employee } from '../../model/employee.model';

import { Store } from '@ngrx/store';
import * as fromStore from '../../store';

@Component({
  templateUrl: 'employee-list.component.html'
})
export class EmployeeListComponent implements OnInit {
  employees$: Observable<Employee[]>;
  listFilter: string;

  constructor(private store$: Store<fromStore.State>, private route: ActivatedRoute) {}

  ngOnInit() {
    this.employees$ =  this.store$.select(fromStore.getEmployees);
    // this.employees$ = this.service.getEmployees();
    this.listFilter = this.route.snapshot.queryParams['filterBy'] || '';
  }
}
