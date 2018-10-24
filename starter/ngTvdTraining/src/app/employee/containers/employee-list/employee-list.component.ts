import { Observable } from 'rxjs';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import * as fromService from '../../services';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../../model/employee.model';

@Component({
  templateUrl: 'employee-list.component.html'
})
export class EmployeeListComponent implements OnInit {
  employees$: Observable<Employee[]>;
  listFilter: string;

  constructor(private service: fromService.EmployeeService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.employees$ = this.service.getEmployees();
  }
}
