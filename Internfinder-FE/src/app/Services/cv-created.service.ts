import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {CvCreated} from "../dto/CvCreated";
import {Create_CV} from "../model/Create_CV";

const baseURL = 'http://localhost:8080/cv';

// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class CvCreatedService {
  httpOptions: any;
  // @ts-ignore
  constructor(private  httpClient: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ` })
      , 'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',

    };
  }
  createCV(data: CvCreated): Observable<any>{
    console.log("vo service");
    console.log(data);
    return this.httpClient.post('http://localhost:8080/cv/postdata', data);
  }
  download(value: any, idtemplate: any):string{

    return window.location.href = `${'http://localhost:8080/cv/getcv/'}${value}/${idtemplate}`;
  }

  deleteId(id: number):Observable<any>{
    return  this.httpClient.delete(`${'http://localhost:8080/cv/delete'}/${id}`, this.httpOptions)
  }
  getOne(id: number): Observable<any>{
    // @ts-ignore
    return this.httpClient.get<Create_CV[]>(`${'http://localhost:8080/cv/file'}/${id}`,this.httpOptions);
  }

  getAll(): Observable<Create_CV[]> {
    return this.httpClient.get<Create_CV[]>(baseURL + '/index')
  }
  getIdAccount(id: number):Observable<any>{

    return this.httpClient.get(baseURL+'/index/'+ id, this.httpOptions)
  }
}

