import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarrasComponent } from './pages/barras/barras.component';
import { LineasComponent } from './pages/lineas/lineas.component';

const routes: Routes = [

  {
    path: 'graficas',
    children:[
      {
        path:'barras',
        component: BarrasComponent
      },
      {
        path:'lineas',
        component: LineasComponent
      },
      {
        path:'**',
        redirectTo: 'barras'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraficasRoutingModule { }
