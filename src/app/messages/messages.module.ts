import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesRoutingModule } from './messages-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { CardsComponent } from './components/cards/cards.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    CardsComponent
  ],
  imports: [
    CommonModule,
    MessagesRoutingModule,
    SharedModule,
  ]
})
export class MessagesModule { }
