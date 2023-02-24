
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogin, Users, UsersNoPassword } from 'src/app/interfaces/users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _baseUrl: string = 'http://localhost:4000/api';

  constructor(private http: HttpClient) { }

  registerUser(user : Users): Observable<UsersNoPassword>{
    return this.http.post<UsersNoPassword>(`${this._baseUrl}/auth/register`, user)
  }

  LoginUser(user : UserLogin): Observable<UsersNoPassword>{
    return this.http.post<UsersNoPassword>(`${this._baseUrl}/auth/login`, user)
  }
  
}
