import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  private apiUrl:string=`https://api-mobilespecs.azharimm.site/v2/top-by-fans`;
  constructor(private http: HttpClient) { }

  getDatosGrafica():Observable<any>{
    return this.http.get(`${this.apiUrl}`)
  }
}
