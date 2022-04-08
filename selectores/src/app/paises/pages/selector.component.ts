import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Country } from '../interfaces/paises.interface';
import { PaisesService } from '../services/paises.service';
import { tap, switchMap } from 'rxjs/operators'
@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styles: [
  ]
})
export class SelectorComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group(
    {
      region: ['', Validators.required],
      pais: ['', Validators.required],
      frontera: ['', Validators.required],
    }
  )

  constructor(private fb: FormBuilder, private paisService: PaisesService) { }

  ngOnInit(): void {

    this.regiones = this.paisService.regiones;


    this.miFormulario.get('region')?.valueChanges
      .pipe(
        tap((_) => {
          this.miFormulario.get('pais')?.reset('')
          this.cargando=true;
          
        }),
        switchMap(
          region => this.paisService.getPaisesRegion(region)
        )
      )
      .subscribe(
      
        paises => {
          this.paises = paises;
          this.cargando=false;
        })


    this.miFormulario.get('pais')?.valueChanges
      .pipe(
        tap((_) => {
          this.miFormulario.get('frontera')?.reset('')
          this.cargando=true;

        }),
        switchMap(codigo => this.paisService.getFronteras(codigo)),

      )
      .subscribe(
        pais => {

          console.log('Pais: ', pais)
          this.fronteras = pais?.borders || [];
          this.cargando=false;

          console.log('Frontera: ', this.fronteras)

        }

      )


  }

  guardar() {
    console.log(this.miFormulario.value)
  }

  //Llenar regiones

  regiones: string[] = []
  paises: Country[] = []
  fronteras: string[] = []
  pais!: Country;
  cargando:boolean = false;

}
