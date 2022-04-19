import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

interface MarkColor{
  color:string;
  mark?:mapboxgl.Marker;
  centro?: [number,number];
}

@Component({
  selector: 'app-marcadores',
  templateUrl: './marcadores.component.html',
  styles: [
    `
    .mapa-container{
      width:100%;
      height:100%;
    }
    .list-group{
      position:fixed;
      top:20px;
      right:20px;
      z-index:9;
    }

    li{
      cursor:pointer;
    }
    `
  ]
})
export class MarcadoresComponent implements AfterViewInit {

  constructor() { }
  marcadores: MarkColor[]=[]
  @ViewChild('map') divMapa!: ElementRef;
  map!: mapboxgl.Map;
  zoomLevel: number = 15;
  center: [number, number] = [-3.70256, 40.4165]

  ngAfterViewInit(): void {
    this.map = new mapboxgl.Map({
      container: this.divMapa.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: this.center, // starting position [lng, lat]
      zoom: this.zoomLevel // starting zoom
    });
    this.leerLocalStorage()
    const marker: HTMLElement= document.createElement('div');
    new mapboxgl.Marker({
      element:marker
    })
    .setLngLat(this.center)
    .addTo(this.map)
  }

  agregarMarcador(){
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    const nuevoMarcador=new mapboxgl.Marker({draggable:true, color})
    .setLngLat(this.center)
    .addTo(this.map)
    this.guardarMarcadores();
    this.marcadores.push({color,mark:nuevoMarcador});

    nuevoMarcador.on('dragend', () => {
      this.guardarMarcadores();
    });
  }
  irMarcador(marker: mapboxgl.Marker | undefined){
     this.map.flyTo({center:marker!.getLngLat()})
  }

  guardarMarcadores(){
    const lnglatArr: MarkColor[]=[];

    this.marcadores.forEach(m=>{
      const color=m.color;
      const {lng,lat}= m.mark!.getLngLat();

      lnglatArr.push({
        color: m.color,
        centro:[lng,lat]
      })
    })
    localStorage.setItem('marcadores', JSON.stringify(lnglatArr))
  }

  leerLocalStorage() {
    
    if (!localStorage.getItem('marcadores') ) {
      return;
    }

    const lngLatArr: MarkColor[] = JSON.parse( localStorage.getItem('marcadores')! );

    lngLatArr.forEach( m => {

      const newMarker = new mapboxgl.Marker({
        color: m.color,
        draggable: true
      })
        .setLngLat( m.centro! )
        .addTo( this.map );

      this.marcadores.push({
        mark: newMarker,
        color: m.color
      });

      newMarker.on('dragend', () => {
        this.guardarMarcadores();
      });


    });
    
  }

  borrarMarcador(i:number){
this.marcadores[i].mark?.remove();
this.marcadores.splice(i,1);
this.guardarMarcadores();
  }
 

}
