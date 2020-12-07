import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { LayoutModule } from '../../../layout/layout.module';
import { EmployeeFilterPipe } from '../../pipes/employee-filter.pipe';
import { EmployeeService } from './../../services/employee.service';
import { reducers } from './../../store';
import { reducers as reducersFeature } from './../../store/reducers/';
import { EmployeeListComponent } from './employee-list.component';

describe('EmployeeListComponent', () => {
  let fixture: ComponentFixture<EmployeeListComponent>;
  let comp: EmployeeListComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        LayoutModule,
        FormsModule,
        StoreModule.forRoot(reducers),
        StoreModule.forFeature('employees', reducersFeature)
      ],
      providers: [EmployeeService],
      declarations: [EmployeeListComponent, EmployeeFilterPipe],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeListComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', waitForAsync(() => {
    expect(comp).toBeTruthy();
  }));

  it('should render title in a h2 tag', waitForAsync(() => {
    const result = fixture.nativeElement.querySelector('h2').textContent;
    expect(result).toContain('Employees');
  }));
});
