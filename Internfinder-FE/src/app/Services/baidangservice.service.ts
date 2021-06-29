import { Injectable } from '@angular/core';
import {newdto} from "../model/Newdto";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class baidangservice {

  private baseURL = 'http://localhost:8080/news/all/';
  constructor(private httpClient: HttpClient) {
  }
  findAll(): Observable<newdto[]> {
    return this.httpClient.get<newdto[]>(this.baseURL);
  }

  deleteNews(idNews: any): Observable<any> {
    return this.httpClient.delete(`${'http://localhost:8080/news/delete'}/${idNews}`);
  }
  addNews(data: any): Observable<any>{
    console.log("kaka:" + data);
    return this.httpClient.post<newdto>('http://localhost:8080/news/create-news', data);
  }
  updateNews(idNews: any, data: any): Observable<any> {
    return this.httpClient.put(`${'http://localhost:8080/news/update'}/${idNews}`, data);
  }
  getNews(idNews: any): Observable<any> {
    return this.httpClient.get(`${'http://localhost:8080/news'}/${idNews}`);
  }
  getIdCategory(): Observable<any> {
    return this.httpClient.get(`${'http://localhost:8080/news/categorylist'}`);
  }
}
