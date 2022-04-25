import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { Telefono } from '../../interface/telefono.interface';
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
  nombres: string[] = [];
  favoritos: number[] = [];
  telefonos: Telefono[] = [];
  ngOnInit(): void {

    this.graficaService.getDatosGrafica()
      .subscribe((grafica) => {
        this.telefonos = grafica.data.phones

        for (let telefono of this.telefonos) {
          this.nombres.push(telefono.phone_name)
          this.favoritos.push(telefono.favorites)
        }

        this.lineChartData.labels!.push(this.nombres);

        this.lineChartData = {
          labels: this.nombres,
          datasets: [
            { data: this.favoritos, label: 'Nivel de popularidad', backgroundColor: 'red' },
          ]
        }

      })

    console.log(this.lineChartData)
  }

  public lineChartData = linearChartData;

  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0,
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
          color: 'blue',
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
