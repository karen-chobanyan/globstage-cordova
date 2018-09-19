import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { appConfig } from '../app.config';

@Injectable()
export class HttpService {

  constructor(
    private router: Router,
    private http: HttpClient,
  ) {
  }

  get(url: string, params: any = {}): Observable<any> {
    return this.http.get<Object>(
      appConfig.apiUrl + url,
      this.addOptions(this.toHttpParams(params))
    ).catch(error => this.handleError(error));
  }

  post(url: string, body: any = {}): Observable<HttpResponse<any>> {
    return this.http.post<any>(appConfig.apiUrl + url, body, this.addOptions()).catch(error => this.handleError(error));
  }

  put(url: string, body: any = {}): Observable<HttpResponse<any>> {
    return this.http.put<any>(appConfig.apiUrl + url, body, this.addOptions()).catch(error => this.handleError(error));
  }
  patch(url: string, body: any = {}): Observable<HttpResponse<any>> {
    return this.http.patch<any>(appConfig.apiUrl + url, body, this.addOptions()).catch(error => this.handleError(error));
  }

  delete(url: string): Observable<HttpResponse<any>> {
    return this.http.delete<any>(appConfig.apiUrl + url, this.addOptions()).catch(error => this.handleError(error));
  }

  private toHttpParams(params) {
    params = this.checkParams(params);

    return Object.getOwnPropertyNames(params)
      .reduce((p, key) => p.set(key, params[key]), new HttpParams());
  }

  private checkParams(obj) {
    return JSON.parse(JSON.stringify(obj,
      function(k, v) { if (v === null) { return undefined; } return v; }
    ));
  }

  private addOptions(params?: HttpParams) {
    const options = {};
    if (params) {
      options['params'] = params;
    }

    const auth = JSON.parse(localStorage.getItem('auth'));

    if (auth && auth.token) {
      options['headers'] = new HttpHeaders({
          'Authorization': `Bearer ${auth.token}`
        });
    }

    options['observe'] = 'response';
    return options;
  }

  private handleError(error: any) {
    if (error instanceof HttpErrorResponse) {
      if (error.status === 401) {
        localStorage.removeItem('auth');
        localStorage.removeItem('b2bUser');
        this.router.navigate(['/signin']);
      }

      return Observable.throw(error);
    }
  }
}
