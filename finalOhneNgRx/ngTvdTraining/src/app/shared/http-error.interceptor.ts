
import {throwError as observableThrowError,  Observable } from 'rxjs';


import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error, caught) => {
        console.warn('test', error);
        if (error instanceof HttpErrorResponse) {
          const httpError: HttpErrorResponse = error;
          console.log(
            `Es ist ein Fehler beim Zugriff auf '${req.url}' aufgetreten: ${httpError.message}`
          );
        }

        // return the error to the method that called it
        return observableThrowError(error);
      })
    );
  }
}
