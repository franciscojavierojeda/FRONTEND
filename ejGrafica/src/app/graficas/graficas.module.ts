import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgChartsModule } from 'ng2-charts';


import { GraficasRoutingModule } from './graficas-routing.module';
import { BarrasComponent } from './pages/barras/barras.component';
import { LineasComponent } from './pages/lineas/lineas.component';


@NgModule({
  declarations: [
    BarrasComponent,
    LineasComponent
  ],
  imports: [
    CommonModule,
    GraficasRoutingModule,
    NgChartsModule,
  ]
})
export class GraficasModule { }
