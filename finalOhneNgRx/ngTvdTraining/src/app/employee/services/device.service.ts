
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable ,  throwError as _throw ,  of } from 'rxjs';
import { catchError, delay, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Device } from './../model/device.model';

@Injectable()
export class DeviceService {

    constructor(private http: HttpClient) { }

    getDevices(): Observable<Device[]> {
        return this.http
          .get<Device[]>(`${environment.apiBaseUrl}/devices`)
          .pipe(catchError((error: any) => _throw(error)));
      }
}
