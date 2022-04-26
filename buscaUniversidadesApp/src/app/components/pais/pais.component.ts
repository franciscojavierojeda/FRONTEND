import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { BuscadorService } from '../../services/buscador.service';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styles: [
    `
    .pais-container{
      cursor:pointer;
      background-color: #0F0EFF;
      color: #fff;
    }
    .active {
      background-color: #E7D059;
      color: #000;
    }
    button:focus{
      background-color: #64FC05;
    }
    `
  ]
})
export class PaisComponent implements OnInit {

  //Hacerlo interfaz
  paises:string[]=[
    'Spain','Portugal','United Kingdom'
  ]
  paisSeleccionado: string="Spain";
  termino: string=''
  constructor(private buscadorService:BuscadorService){}
  ngOnInit(): void {
  }

  cambiarPais(pais:string):void{
    this.paisSeleccionado= pais;
  }

 

}
