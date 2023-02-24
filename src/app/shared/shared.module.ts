import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PrimaryBtnComponent } from './components/primary-btn/primary-btn.component';



@NgModule({
  declarations: [
    PrimaryBtnComponent,

  ],
  exports: [
    PrimaryBtnComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ]
})
export class SharedModule { }
