import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MessageService } from '../../service/message.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styles: [
    `
    .container{
      border: 4px solid #0A9BE7;
    }
    .list-group-item{
      background-color: #0A9BE7;
      color: #fff;
      cursor:pointer;
    }
    `

  ]
})
export class ParentComponent implements OnInit {

  constructor(private msgService:MessageService) { }
  mensaje:string="";
  mensajeHijo:string="";

  obsHijo: BehaviorSubject<string>=new BehaviorSubject('Mensaje del Hijo usando Observable');


  ngOnInit(): void {
  }

  mensajeServicio(){
    this.mensajeHijo=this.msgService.mensajeServicioPadre();
  }

  mensajeInput(){
    this.mensajeHijo="Mensaje desde el Padre/Input"
  }

  mensajeOutput($event: string){
    this.mensaje=$event;
  }

  mensajeObservable(){
   this.obsHijo
   .subscribe(valor =>{
     this.mensajeHijo=valor;
   })
  }

}
