import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroes } from '../../interfaces/heroes.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [`
   
  `
  ]
})
export class ListadoComponent implements OnInit {

  constructor(private heroesService: HeroesService) { }

  heroes: Heroes[] = [];
  ngOnInit(): void {
    console.log("Carga");
    this.heroesService.getHeroes()
      .subscribe(resp => {
        this.heroes = resp;
      });
  }

  cliquea() {
    console.log("Carga");
    this.heroesService.getHeroes()
      .subscribe(resp => {
        this.heroes = resp;
      });
  }

}
