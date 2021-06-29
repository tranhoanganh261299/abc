import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ShareClass} from "../model/Share.Class";
import {CommentClass} from "../model/Comment.Class";
import {TokenStorageService} from "./token-storage.service";
import {ShareDTO} from "../dto/ShareDTO";
import {AccountClass} from "../model/Account.class";


@Injectable({
  providedIn: 'root'
})
export  class ShareService{
  baseURL ='http://localhost:8080/dangbaichiase';
  httpOptions: any;
  constructor(private  httpClient: HttpClient, token:TokenStorageService) {
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ` + token.getToken() })
      , 'Access-Control-Allow-Origin': 'http://localhost:4200', 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    };
  }
  getOne(id: number): Observable<any> {
    // @ts-ignore
    return this.httpClient.get(`${'http://localhost:8080/dangbaichiase'}/${id}`,this.httpOptions);
  }

  getAll():Observable<any>{
    return this.httpClient.get<ShareClass[]>(this.baseURL + '/index',this.httpOptions)
  }
  onEditsharepost(id: number, data: ShareClass):Observable<any>{
    return this.httpClient.put(`${'http://localhost:8080/dangbaichiase'}/${id}`,data, this.httpOptions)
  }

  createSharepost(data: ShareDTO, id: number): Observable<any>{
    return this.httpClient.post(this.baseURL +"/create-share",
      {id_account: id, title: data.title, content: data.content, create_date: data.create_date}, this.httpOptions)
  }
  seach(searchtext: any): Observable<ShareClass[]>{
    // @ts-ignore
    return this.httpClient.get<ShareClass[]>(`${'http://localhost:8080/dangbaichiase/seach'}/${searchtext}`);
  }
  delete(id: any) {
    return this.httpClient.delete(`${'http://localhost:8080/dangbaichiase/delete'}/${id}`,this.httpOptions)
  }
}
