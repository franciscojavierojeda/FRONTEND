import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-zoom',
  templateUrl: './zoom.component.html',
  styles: [
    `.row{
      background-color:white;
      border-radius:5px;
      bottom:40px;
      left:50px;
      padding:5px;
      position:fixed;
      width:400px;
      z-index:999;
    }
     .mapa-container{
      width:100%;
      height:100%;
    }
    
    `
  ]
})
export class ZoomComponent implements AfterViewInit, OnDestroy {

  @ViewChild('map') divMapa!: ElementRef;
  map!: mapboxgl.Map;
  zoomLevel: number = 4;
  center: [number, number] = [-3.70256, 40.4165]
  constructor() {
  }
  ngOnDestroy(): void {

    this.map.off('zoom',()=>{});
    this.map.off('zoomend',()=>{});
    this.map.off('move',()=>{});
  }

  ngAfterViewInit(): void {
    this.map = new mapboxgl.Map({
      container: this.divMapa.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: this.center, // starting position [lng, lat]
      zoom: this.zoomLevel // starting zoom
    });

    this.map.on('zoom', (ev) => {
      this.zoomLevel = this.map.getZoom();
    })

    this.map.on('zoomend', (ev) => {
      if (this.map.getZoom() > 18) {
        this.map.zoomTo(18);
      }
    })

    this.map.on('move', (ev) => {
      const tg = ev.target;
      this.center[0]=tg.getCenter().lat;
      this.center[1]=tg.getCenter().lng;
    })
  }

  zoomIn() {

    this.map.zoomIn();

  }

  zoomOut() {
    this.map.zoomOut();

  }

  zoomCambio(value: string) {
    this.map.zoomTo(Number(value));

  }

}
