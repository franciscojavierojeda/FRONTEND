import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent   {

  constructor(private fb: FormBuilder) { }

  miFormulario: FormGroup= this.fb.group({
    nombre: [,[Validators.required,Validators.minLength(3)]],
    favoritos:this.fb.array([
      ['Metal Gear',Validators.required],
      ['Fifa 22', Validators.required],
    ],Validators.required)
  })

  nuevoFavorito: FormControl=this.fb.control('',Validators.required)

  campoValido(campo: string){
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched;
  }

  guardar(){

    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);
    this.miFormulario.reset();

  }

  get favoritosArr(){
    return this.miFormulario.get('favoritos') as FormArray;
  }

  agregarFavorito(){
    if(this.nuevoFavorito.invalid){
      return;
    }
    this.favoritosArr.push(new FormControl(this.nuevoFavorito.value,Validators.required))
    this.nuevoFavorito.reset()
  }

  eliminarFavorito(i:number){
    
    this.favoritosArr.removeAt(i)
  }
}
