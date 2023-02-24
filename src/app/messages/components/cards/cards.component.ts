import { Component, Input } from '@angular/core';
import { findIndex } from 'rxjs';
import { Message } from 'src/app/interfaces/messages';
import { UserCard } from 'src/app/interfaces/users';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {

 
  //Estamos diciendole a TypeScript que nosotros controlamos esto
  @Input('messages') messages! : Message[];

  
  constructor(
    private usersServices : AuthService,
  ){
    
  }


}
