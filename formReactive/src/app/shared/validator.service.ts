import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {


  public nombreYApellido: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor() { }

   errorUsuario=(control: FormControl): ValidationErrors|null=> {
    const valor=control.value?.trim().toLowerCase();
    if(valor==='strider'){
      return {
        valor:true
      }
    }
    return null;
  }

  camposIguales(campo1:string, campo2:string): ValidationErrors | null{

    return(formGroup:AbstractControl)=>{
      const pass1=formGroup.get(campo1)?.value;
      const pass2=formGroup.get(campo2)?.value;

      if(pass1!==pass2){
        formGroup.get(campo2)?.setErrors({noIguales:true})
        return {noIguales:true}
      }
      formGroup.get(campo2)?.setErrors(null)

    }
  }

}
