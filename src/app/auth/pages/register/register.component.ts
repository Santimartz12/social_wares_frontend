import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private router: Router){}

  createUser(){
    this.router.navigate(['home/messages']);
  }

  goToSignIn(){
    this.router.navigate(['auth/login']);
  }

}
