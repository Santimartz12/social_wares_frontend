import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-auth-btn',
  templateUrl: './auth-btn.component.html',
  styles: [
    `
    .auth__btn{
    background-color: var(--background_color);
    font-family: var(--primary__font);
    font-size: 15px;
    font-weight: 600;
    width: 100%;
    color: var(--primary__color);
    padding: 15px;
    border: 1.5px solid var(--secondary__color);
    border-radius: 100px;
}
    `
  ]
})
export class AuthBtnComponent {

  @Input('Text') text = '';
  @Output() onClickExecute : EventEmitter<any> = new EventEmitter();

  functionOnClick(){
    this.onClickExecute.emit();
  }

}
