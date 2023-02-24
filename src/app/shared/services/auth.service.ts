
import { HttpClient } from '@angular/common/http';
import { Injectable, Provider } from '@angular/core';
import { Observable } from 'rxjs';
import { UserCard, UserLogin, Users, UsersNoPassword } from 'src/app/interfaces/users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _baseUrl: string = 'http://localhost:4000/api';

  users : UserCard[] = [];


  guardarLocalStg(user : UsersNoPassword){
    localStorage.setItem('user-data', JSON.stringify(user));
  }

  cargarLocalStg() : UsersNoPassword | null{
    if(localStorage.getItem('user-data')){
      return JSON.parse(localStorage.getItem('user-data')!);
    }
    else{
      return null;
    }
  }
  
  eliminarLocalStg(){
    localStorage.removeItem('user-data');
  }

  constructor(private http: HttpClient) { 
    this.getAllUsers().subscribe(resp => this.users = resp);
  }

  registerUser(user : Users): Observable<UsersNoPassword>{
    return this.http.post<UsersNoPassword>(`${this._baseUrl}/auth/register`, user)
  }

  LoginUser(user : UserLogin): Observable<UsersNoPassword>{
    return this.http.post<UsersNoPassword>(`${this._baseUrl}/auth/login`, user)
  }

  getAllUsers():Observable<UserCard[]>{
    return this.http.get<UserCard[]>(`${this._baseUrl}/auth/users`);
  }
  
}
