import { OnChanges, SimpleChanges } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { interval, Subject, Subscription, takeUntil } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styles: [

    `
    .step-container{
      width:20%;
    }
    `
  ]
})
export class CounterComponent implements OnInit {

  constructor() { }


  contador: number = 0;
  valor: number = 1;
  intervalo=interval(1000);
  subscription: Subscription= this.intervalo.subscribe();
  aumenta= new Subject<boolean>();
  decrementa= new Subject<boolean>();
  iniciado:boolean=false;


  ngOnInit(): void {
    console.log(this.valor);
  }

  incrementar() {
    if(this.iniciado){
    this.aumenta.next(true);
    this.decrementa.next(false);
    this.intervalo
    .pipe(
      takeUntil(this.aumenta)
    )
    .subscribe(val=> this.contador+=this.valor);
    }
  }

  decrementar() {
    if(this.iniciado){
    this.aumenta.next(false);
    this.decrementa.next(true);
    this.intervalo
    .pipe(
      takeUntil(this.decrementa)
    )
    .subscribe(val=> this.contador-=this.valor);
    }
  }

  iniciar(){
    this.iniciado=true;
    this.incrementar();
  }

  refresh() {
    this.iniciado=true;
    this.contador = 0;
    this.parar();
  }

  parar(){
    this.iniciado=false;
    this.aumenta.next(false);
    this.decrementa.next(false);
  }

}
