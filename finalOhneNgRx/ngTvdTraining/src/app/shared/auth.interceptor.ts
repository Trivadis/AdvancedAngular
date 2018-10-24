import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/observable';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('authentication');
    const authReq = req.clone({
      // headers: req.headers.set('Authorization', 'Bearer: XYZ')
    });
    return next.handle(authReq);
  }
}
