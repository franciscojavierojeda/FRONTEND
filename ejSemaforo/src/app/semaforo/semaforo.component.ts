import { Component, OnInit } from '@angular/core';
import { Colores } from './colores';

@Component({
  selector: 'app-semaforo',
  templateUrl: './semaforo.component.html',
  styleUrls: ['./semaforo.component.css']
})
export class SemaforoComponent implements OnInit {

  constructor() { }
  
  colores!: string[] 
  colorSeleccionado: string=""
  ngOnInit(): void {
    
  }
  getColores($event:string[]){
    this.colores=$event;
    console.log(this.colores)
  }

  getColorSeleccionado($event:string){
    this.colorSeleccionado=$event;
    console.log("Color seleccionado " + $event)
  }
}
