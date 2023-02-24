import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Message } from 'src/app/interfaces/messages';
import { MessagesService } from 'src/app/shared/services/messages.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nickname : string = '';
  fecha : number = 0;

  constructor(private messageService: MessagesService){
    
  }

  messages : Message[] = [];

  ngOnInit(): void {
    this.messageService.getAllMsg().subscribe(
      resp => this.messages = resp
    )    
  }

  buscarUsers( ){
    this.messageService.getbyQuery(this.nickname)
    .subscribe(resp => this.messages = resp);
  }

  //TODO: Solucionar bug
  filtrarMsg(){
    console.log(this.fecha)
    this.messageService.getbyTime(this.fecha).subscribe(
      resp => this.messages = resp
    )
  }

  

  


}
