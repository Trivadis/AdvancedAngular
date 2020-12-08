import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Employee } from '../../model/employee.model';
import * as fromStore from '../../store';

@Component({
  templateUrl: 'employee-list.component.html',
})
export class EmployeeListComponent implements OnInit {
  employees$: Observable<Employee[]>;
  listFilter: string;

  @ViewChild('input')
  input: ElementRef;

  constructor(
    private store$: Store<fromStore.State>,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.employees$ = this.store$.select(fromStore.getEmployees);
    // this.employees$ = this.service.getEmployees();
    this.listFilter = this.route.snapshot.queryParams['filterBy'] || '';
  }

  keyClicked() {
    this.input.nativeElement.focus();
  }
}
