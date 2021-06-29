import {HttpClient, HttpHeaders} from "@angular/common/http";
import {TokenStorageService} from "../_services/token-storage.service";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {CommentClass} from "../model/Comment.Class";
import {CommentDTO} from "../dto/commentDTO";
import {AccountClass} from "../model/Account.class";

@Injectable({
  providedIn: 'root'
})
export class CommentService{
  httpOptions: any;
  constructor(private  httpClient: HttpClient, token:TokenStorageService) {
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ` + token.getToken() })
      , 'Access-Control-Allow-Origin': 'http://localhost:4200', 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    };
  }
  getAllComment(idshare: number):Observable<any>{

    return this.httpClient.get<CommentClass[]>('http://localhost:8080/comment/'+idshare+"/"+0, this.httpOptions)
  }
  getbyIdComment(idcomment: number):Observable<any>{
    return this.httpClient.get<CommentDTO[]>('http://localhost:8080/comment/'+ idcomment, this.httpOptions)
  }

  getOne(id: number): Observable<any> {
    // @ts-ignore
    return this.httpClient.get(`${'http://localhost:8080/comment'}/${id}`);
  }
  createComment(data: CommentDTO) :Observable<any>{
    return this.httpClient.post<CommentDTO>( 'http://localhost:8080/comment/create-comment', data, this.httpOptions )
  }
  deleteComment(idcomment: number): Observable<any>{
    return  this.httpClient.delete('http://localhost:8080/comment/delete/'+idcomment, this.httpOptions)
  }
  updateComment(id: number, data: CommentClass):Observable<any>{
    return  this.httpClient.put('http://localhost:8080/comment/update/'+id, data, this.httpOptions)
  }
  seach(searchtext: any): Observable<CommentClass[]>{
    // @ts-ignore
    return this.httpClient.get<CommentClass[]>(`${'http://localhost:8080/comment/seach'}/${searchtext}`);
  }
}
