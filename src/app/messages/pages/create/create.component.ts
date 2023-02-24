import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateMessage } from 'src/app/interfaces/messages';
import { AuthService } from 'src/app/shared/services/auth.service';
import { MessagesService } from 'src/app/shared/services/messages.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  constructor(
    private fb: FormBuilder, 
    private authServices: AuthService,
    private messagesServices: MessagesService,
    private router: Router,
    ) {
  }

  createForm: FormGroup = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(4)]],
    message: ['', [Validators.required, Validators.minLength(4)]],
  });

  validarForm(campo: String) {
    return this.createForm.controls[campo.toString()]
      .errors && this.createForm.controls[campo.toString()].touched
  }

  create() {

    const id = this.authServices.cargarLocalStg()?.id!;

    //Construimos el objeto para publicarlo en la base de datos
    const newUser: CreateMessage = {
      user_id: id,
      title: this.createForm.get('title')?.value,
      message: this.createForm.get('message')?.value,
    }

    this.messagesServices.createMsg(newUser).subscribe(
      resp => this.router.navigate(['/home/messages'])
    );

  }

}
