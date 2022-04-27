import { Input, OnChanges, SimpleChanges } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Directive, OnInit } from '@angular/core';

@Directive({
  selector: '[appErrorMsg]'
})
export class ErrorMsgDirective implements OnInit,OnChanges {

  html:ElementRef<HTMLElement>;

  private _mensaje:string='Este campo es requerido'
  @Input() set color (valor:string){
      this.html.nativeElement.style.color=valor;
  }

  @Input() set valido(valor:boolean){
    if(valor){
      this.html.nativeElement.classList.add('hidden');
    }
    else{
      this.html.nativeElement.classList.remove('hidden');
    }
  }


  @Input() set mensaje (valor:string){
    this._mensaje=valor;
    this.html.nativeElement.innerText=valor;
  }

  constructor(private el:ElementRef<HTMLElement>) { 
    console.log('Constructor de mi directiva')
    this.html= this.el
  }
  ngOnChanges(changes: SimpleChanges): void {

   
  }
  ngOnInit(): void {
    this.setStyle()
   this.setMensaje()
  }

  setStyle():void{
    this.html.nativeElement.classList.add('form-text')
  }

  setMensaje():void{
    this.html.nativeElement.innerText=this._mensaje;
  }

  

}
