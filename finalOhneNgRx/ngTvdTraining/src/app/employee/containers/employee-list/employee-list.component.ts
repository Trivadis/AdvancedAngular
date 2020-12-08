import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from '../../model/employee.model';
import * as fromService from '../../services';

@Component({
  templateUrl: 'employee-list.component.html',
})
export class EmployeeListComponent implements OnInit {
  employees$: Observable<Employee[]>;
  listFilter: string;

  @ViewChild('input')
  input: ElementRef;

  constructor(
    private service: fromService.EmployeeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.employees$ = this.service.getEmployees();
    this.listFilter = this.route.snapshot.queryParams['filterBy'] || '';
  }

  keyClicked() {
    this.input.nativeElement.focus();
  }
}
