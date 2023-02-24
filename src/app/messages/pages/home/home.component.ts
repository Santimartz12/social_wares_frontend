import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/interfaces/messages';
import { MessagesService } from 'src/app/shared/services/messages.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private messageService: MessagesService){
    
  }

  messages : Message[] = [];

  ngOnInit(): void {
    this.messageService.getAllMsg().subscribe(
      resp => this.messages = resp
    )    
  }

  

  


}
