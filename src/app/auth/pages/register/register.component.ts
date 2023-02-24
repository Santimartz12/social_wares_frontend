import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private router: Router){}

  mostrar(){
    console.log('Se imprimio el texto');
  }

  goToSignIn(){
    this.router.navigate(['auth/login']);
  }

}
