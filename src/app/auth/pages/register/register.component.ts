import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Users, UsersNoPassword } from 'src/app/interfaces/users';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  emailUsed = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authServices: AuthService,
  ) { }


  registerForm: FormGroup = this.fb.group({
    nickname: ['', [Validators.required, Validators.minLength(3)]],
    name: ['', [Validators.required, Validators.minLength(8)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  })

  validarForm(campo: String) {
    return this.registerForm.controls[campo.toString()]
      .errors && this.registerForm.controls[campo.toString()].touched
  }

  //* Aqui creamos el usuario en la base de datos 
  createUser() {
    if (this.registerForm.invalid) { return }

    //Construimos el objeto para publicarlo en la base de datos
    const newUser: Users = {
      email: this.registerForm.get('email')?.value,
      fullname: this.registerForm.get('name')?.value,
      password: this.registerForm.get('password')?.value,
      username: this.registerForm.get('nickname')?.value,
    }

    this.authServices.registerUser(newUser).subscribe({
      next: (user: UsersNoPassword) => {
        this.emailUsed = false;
        this.authServices.guardarLocalStg(user);
        this.router.navigate(['home/messages'])},
      error: (error) => {
        this.emailUsed = true;
        console.log(error.message)
      },
    }
    );

  }

  goToSignIn() {
    this.router.navigate(['auth/login']);
  }

}
