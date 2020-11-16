# FormularioReactivo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Construccion del formulario

- Para crear el proyecto, usamos el comando:
  ng new formulario-reactivo
- Una vez creado, vamos a importar los modulos que vamos a usar en app.module.ts
  import { ReactiveFormsModule, FormsModule } from '@angular/forms';
- A su vez, los vamos a añadir en imports.

## HTML

- Creamos un formulario en el app.component.html con los campos que necesitamos.
- `<form (ngSubmit)="enviar()" class="form" [formGroup]="formulario">`
- cada input debe llevar un formControlName="nombre"

## TS

- Importamos estos modulos
  - import { FormGroup, FormControl, Validators } from '@angular/forms';
- Creamos un formulario de tipo FormGroup
  - formulario :FormGroup;
- Diseñamos los datos que va a contener en el constructor
  - `this.formulario = new FormGroup({ nombre: new FormControl('', [Validators.minLength(5),Validators.required]), apellidos: new FormControl(''), telefono: new FormControl(''), email: new FormControl('') })`

## Custom Validator para formulario

- Creamos una carpeta en app que llamaremos "validators", crearemos el archivo que vamos a usar como custom validator.
  - `import { AbstractControl } from '@angular/forms';`
- Diseñamos la funcion que retornara "null" en caso de que sea correcto , o el error, si introducimos algun dato que no vale. Y la exportamos
  - `export function telefonoValidator(control: AbstractControl){`
- Accedemos de la siguiente manera a los errores para el html.
  - `<div class="error" *ngIf="formulario.controls.telefono.touched &&formulario.controls.telefono.errors?.telefonoNoValido">{{ formulario.controls.telefono.errors?.error }}</div>`
