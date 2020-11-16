import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { telefonoValidator } from './validators/telefono.validator';
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
        telefono: new FormControl('',[Validators.required,telefonoValidator]),
        email: new FormControl('',[Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])
    })
  }
  enviar(){
    console.log(this.formulario.value);
  }

}
