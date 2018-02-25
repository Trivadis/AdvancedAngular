
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError, delay, map } from 'rxjs/operators';
import { _throw } from 'rxjs/observable/throw';
import { environment } from '../../../environments/environment';
import { of } from 'rxjs/observable/of';
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
