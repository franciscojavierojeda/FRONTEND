import { Component, OnInit } from '@angular/core';

interface Menu {
  nombre:string
  ruta:string
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
    `
    
    li{
      cursor:pointer;
    }
    `

  ]
})
export class MenuComponent {

  constructor() { }

 menu:Menu[]=[
  {
    nombre:'fullscreen',
    ruta:'/mapas/fullscreen'
   },
   {
    nombre:'zoom',
    ruta:'/mapas/zoom'
   },
   {
    nombre:'marcadores',
    ruta:'/mapas/marcadores'
   },
   {
    nombre:'propiedades',
    ruta:'/mapas/propiedades'
   },
 ]

}
