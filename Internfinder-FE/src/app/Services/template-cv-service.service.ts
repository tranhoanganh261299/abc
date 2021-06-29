import {Inject, Injectable} from '@angular/core';
import {TemplateCV} from "../model/TemplateCV";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TemplateCvServiceService {
  httpOptions: any;
  constructor(private  httpClient: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ` })
      , 'Access-Control-Allow-Origin': 'http://localhost:4200', 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    };
  }
  private apiServer = 'http://localhost:8080/admincv/';
  // @ts-ignore
  createTemplate(value): Observable<any>{
    console.log("vo service");
    console.log(value);
    // @ts-ignore
    return this.httpClient.post('http://localhost:8080/admincv/addTemplate', value);
  }
}
