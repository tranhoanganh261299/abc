  import {Injectable} from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})

export class TokenStorageService {

  constructor() {
  }

  signOut() {
    window.localStorage.clear();
    window.sessionStorage.clear();
  }

  public saveTokenLocal(token: string) {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY, token);
  }

  public saveTokenSession(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    if(localStorage.getItem(TOKEN_KEY)!==null){
      return <string>localStorage.getItem(TOKEN_KEY);
    }else {
      return <string>sessionStorage.getItem(TOKEN_KEY);
    }
  }

  public saveUserLocal(user: any) {
    window.localStorage.removeItem(USER_KEY);
    window.localStorage.setItem(USER_KEY, JSON.stringify(user));
  }
  public saveUserSession(user: any) {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser() {
    if(localStorage.getItem(USER_KEY) !== null){
      return JSON.parse(<string>localStorage.getItem(USER_KEY));
    }else {
      return JSON.parse(<string>sessionStorage.getItem(USER_KEY));
    }
  }
}
