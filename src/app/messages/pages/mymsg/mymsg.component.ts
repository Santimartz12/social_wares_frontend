import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/interfaces/messages';
import { MessagesService } from 'src/app/shared/services/messages.service';

@Component({
  selector: 'app-mymsg',
  templateUrl: './mymsg.component.html',
  styleUrls: ['./mymsg.component.css']
})
export class MymsgComponent implements OnInit {

  constructor(private messagesServices : MessagesService){}

  messages : Message[] = [];

  ngOnInit(): void {
    this.messagesServices.getMyMsg().subscribe(
      resp => this.messages = resp
    )
  }

}
