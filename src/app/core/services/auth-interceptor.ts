import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { LocalStorageService } from './local-storage.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  authHeader: any = "";
  constructor(private _localStorageService: LocalStorageService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if((req.url).indexOf("adminApi") > -1){
      this.authHeader = this._localStorageService.getAdminAuthorizationHeader();
    }else{
      this.authHeader = this._localStorageService.getFrontAuthorizationHeader();
    }
     // const headers = new HttpHeaders({
     //    'Access-Control-Allow-Origin': "*",
     //    'Content-Type': 'application/json'
     //  }); 
    let authReq = req;
    
    if(this.authHeader != "") {
        // Access-Control-Allow-Origin
        authReq = req.clone({
          setHeaders: {
            'x_access_token_evtech': `${this.authHeader}`,
            'Access-Control-Allow-Origin': "*",
            'Content-Type': 'application/json'
          }
        });

        // authReq = req.clone({headers: req.headers.set('Authorization', 'Bearer ' + this.authHeader)});
      
    }else{
      authReq = req.clone({
        setHeaders: {
          'Access-Control-Allow-Origin': "*",
          'Content-Type': 'application/json'
        }
      });
    }
    return next.handle(authReq);

  }
}