// @ts-ignore
import { Injectable } from '@angular/core';
// @ts-ignore
import {news} from "../module/newdto";
// @ts-ignore
import {HttpClient} from "@angular/common/http";
// @ts-ignore
import {Observable} from "rxjs";
// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class TimkiemService {
  private baseURL = 'http://localhost:8080/news/all';
  private httpOptions: any;


  constructor(private httpClient: HttpClient) {
  }
  findAll(): Observable<news[]> {
    return this.httpClient.get<news[]>(this.baseURL);
  }
  getIdCategory(id: any): Observable<any> {
    return this.httpClient.get(`${'http://localhost:8080/news/categorylist'}`);
  }
  getNews(idNew: any): Observable<any> {
    return this.httpClient.get(`${'http://localhost:8080/news'}/${idNew}`,this.httpOptions);
  }
  getNewsAllDay(id: any): Observable<any> {
    return this.httpClient.get(`${'http://localhost:8080/news/allNews'}`);
  }
}
