import { Input } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';
import { League } from '../../interfaces/universidad.interface';
import { BuscadorService } from '../../services/buscador.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: [
    `
    li{
      cursor:pointer;
    }
    form{
      width:50%;
    }
    `
  ]
})
export class BuscadorComponent implements OnInit {

  constructor(private buscadorService: BuscadorService) { }

  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() pais: string = 'Spain';

  @Input() leagues: League[] = [];

  termino: string = '';
  debouncer: Subject<string> = new Subject();

  nombre: string[] = [];
  country: string[] = [];
  ngOnInit(): void {

    this.debouncer
      .pipe(
        debounceTime(300)
      )
      .subscribe(valor => {
        this.onDebounce.emit(valor);
      })

    this.buscadorService.getAllLeagues()
      .subscribe((leagues: any) => {

        this.leagues = leagues.leagues;
        this.leagues.forEach((league: any, index) => {
        });
        // console.log(leagues)
      })


  }

  presionaTecla() {
    this.debouncer.next(this.termino)
    this.sugerencias(this.termino)
  }

  sugerencias(termino: string) {
    this.termino = termino;
    if (termino === "") {
      this.leagues = [];
    }

  }



}
