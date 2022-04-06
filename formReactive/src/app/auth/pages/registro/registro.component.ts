

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { emailPattern,nombreYApellido } from 'src/app/shared/validator/validaciones';
import { ValidatorService } from '../../../shared/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: []
})
export class RegistroComponent implements OnInit {

  constructor(private fb: FormBuilder,private validatorService:ValidatorService,private emailService:EmailValidatorService) { }

  get emailMsgError():string{
    const errors=this.miFormulario.get('email')?.errors;
    if(errors?.required){
      return 'El email es obligatorio'
    }
    if(errors?.pattern){
      return 'El email ingresado no tiene formato compatible'
    }
    if(errors?.emailCogido){
      return 'El email ingresado ya tiene usuario '
    }
    return ''

  }
  ngOnInit(): void {
    this.miFormulario.reset(
      {
        nombre: 'Javi Ojeda',
        email:'test1@test.com',
        username:'donerv  '
      }
    )
  }

  miFormulario: FormGroup = this.fb.group(
    {
      nombre: ['', [Validators.required,Validators.pattern(this.validatorService.nombreYApellido)]],
      email: ['', [Validators.required,Validators.pattern(this.validatorService.emailPattern)], [this.emailService]],
      username:['', [Validators.required,this.validatorService.errorUsuario] ],
      password:['', [Validators.required,Validators.minLength(6)] ],
      password2:['', [Validators.required,this.validatorService.camposIguales] ],
    },
    {
      validators: [this.validatorService.camposIguales('password','password2')]
    }
  );

  campoNoValido(campo:string){
    return this.miFormulario.get(campo)?.invalid &&
      this.miFormulario.get(campo)?.touched;
  }
 

  

  submitFormulario(){
    console.log(this.miFormulario.value);

    this.miFormulario.markAllAsTouched();
  }

 
}
