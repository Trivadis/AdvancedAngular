import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { EmployeeService } from './employee.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../../../environments/environment';
import { Employee } from '../model/employee.model';

describe('EmployeeService', () => {
  let service: EmployeeService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EmployeeService]
    });
  });
  beforeEach(() => {
    service = TestBed.get(EmployeeService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create the app', async(() => {
      const dummy: Employee[] = [
        { id: 3, firstname: 'Thomas', lastname: 'Huber', email: 'thomas.huber@trivadis.com' },
        { id: 5, firstname: 'Thomas', lastname: 'Gassmann', email: 'thomas.gassmann@trivadis.com' }
      ];

      service.getEmployees().subscribe(list => {
        expect(list.length).toBe(2);
        expect(list).toEqual(dummy);
      });

      const request = httpMock.expectOne(`${environment.apiBaseUrl}/employees`);
      expect(request.request.method).toBe('GET');

      request.flush(dummy);
    })
  );

  it(
    'should test fakeAsync',
    fakeAsync(() => {
      let flag = false;
      setTimeout(() => {
        flag = true;
      }, 50);
      expect(flag).toBe(false);
      tick(50);
      expect(flag).toBe(true);
    })
  );
});
