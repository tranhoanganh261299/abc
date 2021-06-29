import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Cv_apply} from "../model/Cv_apply";


const baseURL = 'http://localhost:8080/quanlycvapply';

@Injectable({
  providedIn: 'root'
})
export  class cvapplyService {
  httpOptions: any;
  constructor(private  httpClient: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ` })
      , 'Access-Control-Allow-Origin': 'http://localhost:4200', 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    };
  }
  getByidNews(id: number):Observable<any>{
    return  this.httpClient.get<Cv_apply[]>('http://localhost:8080/quanlycvapply/'+id, this.httpOptions)
  }
  deleteId(id: number):Observable<any>{
    return  this.httpClient.delete('http://localhost:8080/quanlycvapply/delete/'+id, this.httpOptions)
  }
  getOne(id: number): Observable<any>{
    // @ts-ignore
    return this.httpClient.get<CV[]>(`${'http://localhost:8080/quanlycvapply/file'}/${id}`,this.httpOptions);
  }

  getAll(): Observable<Cv_apply[]> {
    return this.httpClient.get<Cv_apply[]>(baseURL + '/index')
  }
  addApply(data: any): Observable<any>{
    console.log("kaka:" + data);
    return this.httpClient.post<Cv_apply>('http://localhost:8080/apply/create-apply', data);
  }
}
