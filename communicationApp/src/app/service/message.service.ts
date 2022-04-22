import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {


  constructor() { }

  mensajeServicioPadre():string{
    
    return 'Mensaje del Hijo usando el servicio'
  }

  
  mensajeServicioHijo():string{
    return 'Mensaje del Padre usando el servicio';
  }

}
