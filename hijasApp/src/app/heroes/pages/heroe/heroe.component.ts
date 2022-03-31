import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroes } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [`
    img{
      width:100%;
      border-radius:5px;
    }
    mat-card{
      margin-top:20px;
    }
 `

  ]
})
export class HeroeComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,private heroesService: HeroesService, private router: Router) { }

  heroe!: Heroes;
  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(
          ({ id }) => this.heroesService.getHeroe(id)
        )
      )
      .subscribe(
        heroe => this.heroe=heroe

      );
  }

  regresar(){
    this.router.navigate(['/heroes/listado']);
  }
}
