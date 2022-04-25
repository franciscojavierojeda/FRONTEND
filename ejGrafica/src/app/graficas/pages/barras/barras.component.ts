import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { Telefono } from '../../interface/telefono.interface';
import { GraficasService } from '../../services/graficas.service';
import { defaultBarChartData } from './defaultbarchardata';

@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styles: [
  
  ]
})
export class BarrasComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  constructor(private graficaService: GraficasService) { }  
  nombres: string[] = [];
  favoritos: number[] = [];
  telefonos: Telefono[] = [];
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    borderColor:'green',
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {
      
      },
      y: {
        min: 0
      }
    },
    
  };


  public barChartData: ChartData<'bar'> = defaultBarChartData;

  
  
  ngOnInit(): void {

    this.graficaService.getDatosGrafica()
    .subscribe(grafica=>{
      this.telefonos = grafica.data.phones

      for (let telefono of this.telefonos) {
        this.nombres.push(telefono.phone_name)
        this.favoritos.push(telefono.favorites)
      }
   
       this.barChartData.labels!.push(this.nombres);
    
      this.barChartData = {
        labels:this.nombres,
        datasets: [
          { data: this.favoritos, label: 'Nivel de popularidad',backgroundColor: '#E7D059'  },
        ]
      }
      
    })
    
    console.log(this.barChartData)
  }
  

}
