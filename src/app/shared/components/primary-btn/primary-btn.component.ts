import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-primary-btn',
  templateUrl: './primary-btn.component.html',
  styles: [
    `
    button{
    background-color: var(--secondary__color);
    font-family: var(--primary__font);
    font-size: 18px;
    font-weight: 700;
    width: 100%;
    color: var(--background_color);
    padding: 15px;
    border: 1.5px solid var(--secondary__color);
    border-radius: 100px;
}
    `
  ]
})
export class PrimaryBtnComponent {

  @Input('Texto') texto = '';
  @Output() onClickFunction: EventEmitter<any> = new EventEmitter();

  executeFunction(){
    this.onClickFunction.emit();
  }
}
