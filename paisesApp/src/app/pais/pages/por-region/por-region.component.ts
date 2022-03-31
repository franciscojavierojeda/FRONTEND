import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `button{
      margin-right: 5px;
    }`
  ]
})
export class PorRegionComponent implements OnInit {

  regiones: string[] = ['EFTA','CARICO','PA', 'AU', 'USAN', 'EEU','AL', 'ASEAN' ,'CAIS','CEFTA','NAFTA', 'SAARC', 'EU'];
  regionActiva: string = '';
  constructor(private paisService: PaisService) { }
  paises: Country[]=[];

  ngOnInit(): void {
  }

  activarRegion(region: string) {

    if(region=== this.regionActiva){return;}
    this.paisService.buscarRegion(region)
    .subscribe(
      paises=> this.paises=paises
    )


  }
  getCSS(region: string): string {
    return this.regionActiva === region ? 'btn btn-danger' : 'btn btn-outline-danger';
  }

}
