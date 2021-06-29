import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {NewsClass} from "../model/News.class";

const  baseURL ='http://localhost:8080/quanlybaidang'
@Injectable({
  providedIn: 'root'
})
export class NewService {
  httpOptions: any;

  constructor(private  httpClient: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json', 'Authorization': `Bearer `})
      ,
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    };
  }


  getAll(): Observable<NewsClass[]> {
    return this.httpClient.get<NewsClass[]>(baseURL + '/index')
  }

  create(data: NewsClass): Observable<NewsClass> {
    // @ts-ignore
    return this.httpClient.post(baseURL + '/create', data)
  }

  edit(id: number, data: NewsClass): Observable<NewsClass> {
    // @ts-ignore
    return this.httpClient.put(`${'http://localhost:8080/quanlybaidang'}/${data.idNews}`, data)
  }

  editntd(id: any, data: string): Observable<NewsClass> {
    // @ts-ignore
    return this.httpClient.put('http://localhost:8080/quanlybaidang/'+ id, data)
  }
  delete(idaccount: number): Observable<any> {
    // @ts-ignore
    return this.httpClient.delete(`${'http://localhost:8080/quanlybaidang/delete'}/${idaccount}`);
  }

  getOne(id: number): Observable<any> {
    // @ts-ignore
    return this.httpClient.get(`${'http://localhost:8080/quanlybaidang'}/${id}`);
  }

  seach(searchtext: any): Observable<NewsClass[]>{
    // @ts-ignore
    return this.httpClient.get<NewsClass[]>(`${'http://localhost:8080/quanlybaidang/seach'}/${searchtext}`);
  }
  getAllbyIdAccount(id: number):Observable<any>{

    return this.httpClient.get(baseURL+'/mybaidang/'+ id, this.httpOptions)
  }
}
