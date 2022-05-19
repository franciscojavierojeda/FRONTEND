import { EventEmitter, Output } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MessageService } from '../../service/message.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styles: [
    `
    .list-group-item{
      cursor:pointer;
      background-color: #0A9BE7;
      color: #fff;
    }
    `
  ]
})
export class ChildComponent implements OnInit {

  constructor(private msgService: MessageService) { }

  mensajeHijo: string = "";
  @Input() msgInput: string = "";

  @Output()
  msgOutput: EventEmitter<string> = new EventEmitter();


  mensajeServicioHijo() {
    this.msgOutput.emit(this.msgService.mensajeServicioPadre());
  }
  ngOnInit(): void {

  }

  mensajeOutput() {
    this.msgOutput.emit("Mensaje desde el hijo/Output");
  }

  observableHijo() {

    let obsHijo:string=this.msgService.mensajeObservableAPadre();
    this.msgOutput.emit(obsHijo);
  }

}
