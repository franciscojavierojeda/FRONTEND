import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { GraficasService } from '../../services/graficas.service';
import { linearChartData } from './linearChartData';

@Component({
  selector: 'app-lineas',
  templateUrl: './lineas.component.html',
  styles: [
  ]
})
export class LineasComponent implements OnInit {

  constructor(private graficaService: GraficasService) { }  
  valores: string[]=[];
  poder:number[]=[];
   
  ngOnInit(): void {

    this.graficaService.getDatosGrafica()
    .subscribe(grafica=>{
      this.valores=Object.keys(grafica);
      this.poder=Object.values(grafica);

      this.lineChartData.labels!.push(this.valores);
    
      console.log('Barchart: '+this.lineChartData!.labels)
    
      console.log('Valores: ' + this.valores);
      console.log('Poder: ' + this.poder);
      this.lineChartData = {
        labels:this.valores,
        datasets: [
          { data: this.poder, label: 'Nivel de fuerza',backgroundColor: 'green'  },
        ]
      }
      
    })
    
    console.log(this.lineChartData)
  }

  public lineChartData= linearChartData;

  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0,
        borderColor:'green'
      },
      
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      x: {},
      'y-axis-0':
        {
          position: 'left',
        },
      'y-axis-1': {
        position: 'right',
        grid: {
          color: 'green',
        },
        ticks: {
          color: 'black'
        }
      }
    },

  };

  public lineChartType: ChartType = 'line';

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;



}
