import { Component, Input, OnInit } from '@angular/core';
import { Heroes } from '../interfaces/heroes.interface';

@Component({
  selector: 'app-heroes-tarjeta',
  templateUrl: './heroes-tarjeta.component.html',
  styles: [
  ]
})
export class HeroesTarjetaComponent implements OnInit {

  constructor() { }

  @Input() heroe!: Heroes;

  ngOnInit(): void {
  }

}
