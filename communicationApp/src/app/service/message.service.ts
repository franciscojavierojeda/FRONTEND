import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {


  obsPadre: BehaviorSubject<string> = new BehaviorSubject('Mensaje del Padre usando el servicio');
  obsHijo: BehaviorSubject<string>=new BehaviorSubject('Mensaje del Hijo usando Observable');

  constructor() { }
  valorObservableAPadre:string=''
  valorObservableAHijo:string=''
  mensajeServicioPadre():string{
    
    return 'Mensaje del Hijo usando el servicio'
  }

  
  mensajeServicioHijo():string{
    return 'Mensaje del Padre usando el servicio';
  }

  mensajeObservableAPadre():string{
    this.obsPadre
      .subscribe(value => {
        this.valorObservableAPadre=value;
      })
      return this.valorObservableAPadre;
  }

  mensajeObservableAHijo():string{
    this.obsHijo
      .subscribe(value => {
        this.valorObservableAHijo=value;
      })
      return this.valorObservableAHijo;
  }

}
