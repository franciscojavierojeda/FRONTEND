import { ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { FormularioComponent } from './crud/formulario/formulario.component';
import { Usuario } from './crud/interfaces/usuario.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejercicioCrud';
}
