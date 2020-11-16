import { AbstractControl } from '@angular/forms';

export function telefonoValidator(control: AbstractControl){
    const minlength = 8;
    if(isLetter(control.value) !=true){
        return{'telefonoNoValido':true, error:`El telefono no es valido, no puede contener letras`} 
    }else{
        if(control.value.length < minlength){
            console.log(control.value.length)
            //Si la validacion no pasa, retornamos un objeto con el error y un true
            return{'telefonoNoValido':true, error:`El telefono no es valido o tiene menos de ${minlength} numeros`}
        }
        //Si la validacion pasa, retornamos null
          return null
    }
    
}

function isLetter(pControlValue):boolean {
    if(pControlValue.match(/[a-z]/i)){
        return false
    }else{
        return true
    }
}

  
