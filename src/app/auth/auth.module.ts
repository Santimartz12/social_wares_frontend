import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthBtnComponent } from './components/auth-btn/auth-btn.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { SharedModule } from '../shared/shared.module';
import { AuthFooterComponent } from './components/auth-footer/auth-footer.component';
import { BannerComponent } from './components/banner/banner.component';


@NgModule({
  declarations: [
    AuthBtnComponent,
    RegisterComponent,
    LoginComponent,
    AuthFooterComponent,
    BannerComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
  ]
})
export class AuthModule { }
