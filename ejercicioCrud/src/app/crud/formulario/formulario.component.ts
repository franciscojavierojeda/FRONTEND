import { Component, EventEmitter, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Country } from '../interfaces/country.interface';
import { PaisService } from '../services/pais.service';
import { FormGroup, FormControl, FormBuilder, Validator, Validators } from '@angular/forms';
import { Input } from '@angular/core';
import { Usuario } from '../interfaces/usuario.interface';
import { Output } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { OnChanges } from '@angular/core';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styles: [
  `
  li{
    text-decoration:none;
  }
  `
  ]
})
export class FormularioComponent implements OnInit {

 usuario!:Usuario
 usuarios:Usuario[]=[
  // {
  //   usuario:'Pepe',
  //   contraseña:'1234',
  //   correo:'pepe@gmail.com',
  //   ofertas:true,
  //   pais:'Uganda',
  //   ciudad:'No sé'
  // }
 ]

  miFormulario:FormGroup= this.fb.group({
    usuario:[,[Validators.required,Validators.minLength(6)],],
    contraseña:[,[Validators.required,Validators.minLength(8)],],
    correo:[,[Validators.required,Validators.minLength(8)],],
    ofertas:[false],
    pais:[,[Validators.required],],
    ciudad:[,[Validators.required],],
    id: [,],
    })
  constructor(private usuarioService: UsuarioService,private paisService:PaisService, private fb: FormBuilder) { }
 

  paises:Country[]=[]
  ngOnInit(): void {
    console.log(this.miFormulario)
    this.usuarioService.getUsuarios()
    .subscribe(usuarios=>{
      this.usuarios=usuarios;
    })
    this.paisService.getPaises()
    .subscribe(resp=>{
      this.paises=resp;
    })
  }

  guardar(){
    console.log(this.miFormulario.get('id')?.value);
    if(this.miFormulario.get('id')?.value===null){
      this.usuario=this.miFormulario!.value;
    this.usuarioService.anadirUsuario(this.usuario)
    .subscribe(resp=>{
      this.ngOnInit()
    })
    this.miFormulario.reset();
    }
    else{
        this.usuario=this.miFormulario!.value;
        this.usuarioService.modificarUsuario(this.usuario)
        .subscribe(resp=>{
          this.usuario=resp;
          this.ngOnInit()
        })
        this.miFormulario.reset();
    }
  }

  validarCampo(campo:string){
    if(campo==='pais' && this.miFormulario.value['pais']==='Seleccione un pais...'){
      return true;
    }
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched }

    editarUsuario(usuario:Usuario){
      this.miFormulario.patchValue(usuario);
    }
  

}
