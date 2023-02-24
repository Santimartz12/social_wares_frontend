import { Component, Input } from '@angular/core';
import { Message } from 'src/app/interfaces/messages';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {

  //Estamos diciendole a TypeScript que nosotros controlamos esto
  @Input('messages') messages : Message[] = [];


}
