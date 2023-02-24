import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesRoutingModule } from './messages-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { CardsComponent } from './components/cards/cards.component';
import { CreateComponent } from './pages/create/create.component';
import { MymsgComponent } from './pages/mymsg/mymsg.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    CardsComponent,
    CreateComponent,
    MymsgComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MessagesRoutingModule,
    HttpClientModule,
    SharedModule,
  ]
})
export class MessagesModule { }
