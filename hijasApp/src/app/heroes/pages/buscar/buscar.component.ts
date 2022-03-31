import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroes } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  termino: string = '';
  heroes: Heroes[] = [];
  heroeSeleccionado:Heroes |undefined;
  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
  }

  buscando() {
    this.heroesService.getSugerencias(this.termino.trim())
      .subscribe(heroes => this.heroes = heroes)
  }
  opcioneleccionada(event: MatAutocompleteSelectedEvent){

    if(!event.option.value){
      this.heroeSeleccionado=undefined;
      return;
    }
    const heroe:Heroes=event.option.value
    this.termino=heroe.superhero;
    //console.log($event)
    this.heroesService.getHeroe(heroe.id!)
    .subscribe(heroe=> this.heroeSeleccionado=heroe)
  }

}
