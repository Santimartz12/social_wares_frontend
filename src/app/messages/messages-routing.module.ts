import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidaruserGuard } from '../guards/validaruser.guard';
import { CreateComponent } from './pages/create/create.component';
import { HomeComponent } from './pages/home/home.component';
import { MymsgComponent } from './pages/mymsg/mymsg.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'messages'
  },
  {
    path: 'messages',
    component: HomeComponent,
    canActivate:[ValidaruserGuard],
    canLoad:[ValidaruserGuard],
  },
  {
    path: 'create',
    component: CreateComponent,
    canActivate:[ValidaruserGuard],
    canLoad:[ValidaruserGuard],
  },
  {
    path: 'my-msg',
    component: MymsgComponent,
    canActivate:[ValidaruserGuard],
    canLoad:[ValidaruserGuard],
  },
  {
    path: '**',
    redirectTo: 'messages',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessagesRoutingModule { }
