import { Component, OnInit } from '@angular/core';
import { Heroes, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators'
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmarComponent } from '../../confirmar/confirmar.component';
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [`
    img{
      width:75%;
      border-radius:5px;
    }
  `
  ]
})
export class AgregarComponent implements OnInit {

  constructor(private heroeService: HeroesService, private activatedRoute: ActivatedRoute, private snackBar: MatSnackBar, private router: Router, private dialog: MatDialog) { }
  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },

    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    }
  ]
  heroe: Heroes = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.MarvelComics,
    alt_image: '',
  }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.heroeService.getHeroe(id)
        )
      )
      .subscribe(
        heroe => this.heroe = heroe
      )
  }
  guardar() {

    if (this.heroe.superhero.trim().length === 0) {
      return;
    }
    if (this.heroe.id) {
      this.heroeService.actualizarHeroe(this.heroe)
        .subscribe(resp => {
          this.mostrarSnackBar('Registro actualizado')
        })

    }
    else {
      console.log('Id del heroe: ', this.heroe.id);
      this.heroeService.agregarHeroe(this.heroe)
        .subscribe(heroe => {
          this.router.navigate(['/heroes/', heroe.id]);
          this.mostrarSnackBar('Registro actualizado')

        })
    }


  }

  eliminar() {

    const dialog= this.dialog.open(ConfirmarComponent, {
      width:'500px',
      data: this.heroe
    })
    dialog.afterClosed()
    .subscribe(resp=>{
      if(resp){
  
        this.heroeService.eliminarHeroe(this.heroe.id!)
        .subscribe(resp=> this.router.navigate(['/heroes']))
     
      }
    });
  }

  mostrarSnackBar(mensaje: string) {
    this.snackBar.open(mensaje, 'Ocultar', {
      duration: 2500
    });
  }


}
