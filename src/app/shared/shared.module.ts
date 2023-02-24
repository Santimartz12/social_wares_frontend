import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryBtnComponent } from './components/primary-btn/primary-btn.component';



@NgModule({
  declarations: [
    PrimaryBtnComponent,
  ],
  exports: [
    PrimaryBtnComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
