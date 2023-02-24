import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidaruserGuard } from './guards/validaruser.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'home',
    loadChildren: () => import('./messages/messages.module').then(m => m.MessagesModule),
    canActivate:[ValidaruserGuard],
    canLoad:[ValidaruserGuard],
  },
  {
    path: '**',
    redirectTo: 'auth',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
