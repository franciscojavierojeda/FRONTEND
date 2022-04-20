import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
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
  valores: string[]=[];
  poder:number[]=[];
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    borderColor:'green',
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {
      
      },
      y: {
        min: 10
      }
    },
    
  };


  public barChartData: ChartData<'bar'> = defaultBarChartData;

  
  
  ngOnInit(): void {

    this.graficaService.getDatosGrafica()
    .subscribe(grafica=>{
      this.valores=Object.keys(grafica);
      this.poder=Object.values(grafica);

      this.barChartData.labels!.push(this.valores);
    
      console.log('Barchart: '+this.barChartData!.labels)
    
      console.log('Valores: ' + this.valores);
      console.log('Poder: ' + this.poder);
      this.barChartData = {
        labels:this.valores,
        datasets: [
          { data: this.poder, label: 'Nivel de fuerza',backgroundColor: '#E7D059',hoverBorderColor:'red'  },
        ]
      }
      
    })
    
    console.log(this.barChartData)
  }
  

}
