import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formulario :FormGroup;

  constructor(){
    this.formulario = new FormGroup({
        nombre: new FormControl('', [Validators.minLength(5),Validators.required]),
        apellidos: new FormControl(''),
        telefono: new FormControl(''),
        email: new FormControl('')
    })
  }
  enviar(){
    console.log(this.formulario.value);
  }
}
