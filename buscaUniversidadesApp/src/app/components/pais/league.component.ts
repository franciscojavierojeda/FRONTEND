import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { BuscadorService } from '../../services/buscador.service';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.scss']
})
export class LeagueComponent implements OnInit {

  //Hacerlo interfaz
  leagues: any[] = [];
  isActiveButton: boolean = false;
  paisSeleccionado: string = "Spain";
  termino: string = ''
  constructor(private buscadorService: BuscadorService) { }
  ngOnInit(): void {

    this.buscadorService.getAllLeagues()
      .subscribe((league: any) => {
        this.leagues = league.leagues;
      })
  }

  cambiarPais(pais: string): void {
    this.paisSeleccionado = pais;
  }

  switchImage(idLeague: string) {
    let caseImage: string = '';
    this.isActiveButton = true;

    switch (idLeague) {
      case '4328': {
        caseImage = "../../../assets/img/premier.png";
        break;
      }
      case '4331': {
        caseImage = "../../../assets/img/bundesliga.png";
        break;
      }
      case '4332': {
        caseImage = "../../../assets/img/seriea.png";
        break;
      }
      case '4334': {
        caseImage = "../../../assets/img/ligue1.png";
        break;
      }
      case '4335': {
        caseImage = "../../../assets/img/laliga.png";
        break;
      }
    }
    return caseImage;
  }



}
