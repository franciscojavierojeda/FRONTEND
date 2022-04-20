import { Component, OnInit } from '@angular/core';

interface Menu{
  ruta:string,
  nombre:string
}
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
    `
    .active {
      background-color: #E7D059;
      color: #000;
    }
    li{
      cursor:pointer;
    }
    `
  ]
})
export class MenuComponent  {

  menu: Menu[]=[
    {
      ruta: './graficas/barras',
      nombre:'Barras'
    },
    {
      ruta: './graficas/lineas',
      nombre:'Lineas'
    },
  ]
  constructor() { }


}
