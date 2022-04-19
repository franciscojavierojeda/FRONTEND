import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullScreenComponent } from './pages/full-screen/full-screen.component';
import { ZoomComponent } from './pages/zoom/zoom.component';
import { MarcadoresComponent } from './pages/marcadores/marcadores.component';
import { PropiedadesComponent } from './pages/propiedades/propiedades.component';

const routes: Routes = [

  {
    path: '',
    children: [
      {
        path: 'fullscreen', component: FullScreenComponent
      },
      {
        path: 'zoom', component: ZoomComponent
      },
      {
        path: 'marcadores', component: MarcadoresComponent
      },
      {
        path: 'propiedades', component: PropiedadesComponent
      },
      {
        path: '**', redirectTo: 'fullscreen'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapasRoutingModule { }
