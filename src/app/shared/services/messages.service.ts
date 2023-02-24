import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateMessage, Message } from 'src/app/interfaces/messages';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  private _baseUrl: string = 'http://localhost:4000/api';


  constructor(private http : HttpClient, private authService: AuthService) { }

  getAllMsg():Observable<Message[]>{
    return this.http.get<Message[]>(`${this._baseUrl}/message`);
  }

  createMsg(message : CreateMessage):Observable<Message>{
    return this.http.post<Message>(`${this._baseUrl}/message/create`, message);
  }

  getMyMsg():Observable<Message[]>{

    const id = this.authService.cargarLocalStg()?.id!;
    return this.http.get<Message[]>(`${this._baseUrl}/message?user_id=${id}`);
  
  }

  getbyQuery(query: string ):Observable<Message[]>{
    return this.http.get<Message[]>(`${this._baseUrl}/message?username=${query}`);
  }
  
  getbyTime(query : number): Observable<Message[]>{
    return this.http.get<Message[]>(`${this._baseUrl}/message?time=${query}`);
  }


}
