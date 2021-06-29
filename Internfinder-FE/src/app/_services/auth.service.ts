import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/auth/';
const AUTH_API_Hai = 'http://localhost:8080/api/public/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  httpOptions: any;
  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    };
  }


  // @ts-ignore
  login(credentials): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }

  checkLogin(username:string){
    return this.http.post('http://localhost:8080/api/auth/checkstatus/', username)
  }


  // @ts-ignore
  register(user): Observable<any> {
    return this.http.post(AUTH_API + 'signupSinhVien', {
      username: user.username,
      email: user.email,
      address: user.address,
      phone:user.phone,
      password: user.password
    }, httpOptions);
  }
  // @ts-ignore
  registerntd(user): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username: user.username,
      password: user.password,
      conpany_address: user.company_address,
      company_name: user.companyName,
      phone:user.phone,
      tax_code:user.taxCode,
      website:user.website,
      email: user.email

    }, httpOptions);
  }
  verify(code:string): Observable<any> {
    console.log(code);
    return this.http.post(AUTH_API + 'verify', {
      code: code
    }, this.httpOptions);
  }

  verifyPassword(code: string): Observable<any> {
    return this.http.post(AUTH_API_Hai + 'verify-password', {
      code: code
    }, this.httpOptions);
  }

  resetPassword(email:string): Observable<any> {
    return this.http.post(AUTH_API_Hai + 'reset-password', {
      email: email,
    }, this.httpOptions);
  }

  doResetPassword(password: string, code: string): Observable<any> {
    return this.http.post(AUTH_API_Hai + 'do-reset-password', {
      password: password,
      code: code
    }, this.httpOptions);
  }
}
