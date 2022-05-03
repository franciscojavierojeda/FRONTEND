import { Output, EventEmitter } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Usuario } from '../interfaces/usuario.interface';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
  ]
})
export class ListadoComponent implements OnInit {

  constructor(private usuarioService:UsuarioService) { }

  @Input() usuarios!:Usuario[]
  @Output() usuario:EventEmitter<Usuario>=new EventEmitter()

  ngOnInit(): void {

    this.usuarioService.getUsuarios()
    .subscribe(usuarios=>{
      this.usuarios=usuarios;
    })
  }

  editar(usuario:Usuario){
    this.usuarioService.getUsuario(usuario)
    .subscribe(resp=>{
      this.usuario.emit(resp)
    })
  }

  eliminar(usuario:Usuario){
    console.log(usuario);
    this.usuarioService.eliminarUsuario(usuario)
    .subscribe(resp=>{
     this.ngOnInit()
    })

  }

}
