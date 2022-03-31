import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
    li{
      cursor:pointer;

    }
    `
  ]
})
export class PorPaisComponent  {

  constructor(private paisService:PaisService) { }
  termino:string='';
  hayError: boolean=false;
  paises: Country[]=[];
  paisesSugeridos: Country[]=[];
  muestraSugerencias:boolean=false;
  

  buscar(termino:string){
    this.hayError=false;
    this.termino=termino;
    console.log(this.termino);
    this.paisService.buscarPais(this.termino)
    .subscribe({
      next: (paises)=> {
          this.hayError=false;
    this.paises=paises;
    console.log(paises);
      },
      error: (err: any) => {
   this.hayError=true;
     this.paises=[];
      console.log(err)
      }
    }
        );
  }

  sugerencias(termino:string){
    this.hayError=false;
    this.termino=termino;
    this.muestraSugerencias=true;
    this.paisService.buscarPais(termino)
    .subscribe(
      paises=>this.paisesSugeridos=paises.splice(0,5),
      (err)=>this.paisesSugeridos=[]
    )
  }

  buscarSugerido(termino:string){

    this.buscar(termino);
  }

}
