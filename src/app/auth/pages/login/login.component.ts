import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { UserLogin, Users } from 'src/app/interfaces/users';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  passwordIncorrecta = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authServices: AuthService,
  ) { }


  //* Formulario del Login
  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  })

  //* Validaciones para los inputs
  validarForm(campo: String) {
    return this.loginForm.controls[campo.toString()]
      .errors && this.loginForm.controls[campo.toString()].touched
  }


  //* Validacion de los datos finales y login del usuario
  login() {
    
    if(this.loginForm.invalid){
      this.loginForm.markAllAsTouched();
      return;
    }

    //* Construimos el objeto para publicarlo en la base de datos
    const newUser : UserLogin = {
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value,
    }
     
    this.authServices.LoginUser(newUser).subscribe({
      next: (user) => {
        this.passwordIncorrecta = false;
        this.authServices.guardarLocalStg(user);
        this.router.navigate(['home/messages'])},
      error: (error) => {
        this.passwordIncorrecta = true;
        console.log(error.error.message);
      }
   });
  }

  goToSignUp() {
    this.router.navigate(['auth/register']);
  }


}
