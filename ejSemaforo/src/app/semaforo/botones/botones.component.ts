import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { Colores } from '../colores';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styles: [
  ]
})
export class BotonesComponent implements OnInit {

  constructor() { }
  boton: string = "Apagado"
  colorP:string="rojo"
  @Output() colores: EventEmitter<string[]> = new EventEmitter();
  @Output() colorSeleccionado: EventEmitter<string> = new EventEmitter();
  colours: string[] = [
    'rojo', 'amarillo', 'verde'
  ]
  ngOnInit(): void {
    this.colores.emit(this.colours)
  }
  cambiarTexto() {
    if (this.boton === 'Apagado') {
      this.boton = 'Encendido'
      this.colorP='rojo'
    }
    else {
      this.boton = 'Apagado'
      this.colorP='apagado'
    }
    this.colorSeleccionado.emit(this.colorP)
  }


  emitirColor(){
    console.log("Se emite el color" + this.colorP)
    this.colorSeleccionado.emit(this.colorP)
  }


}
