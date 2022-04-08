import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Country, } from '../interfaces/paises.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private _regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  get regiones(): string[] {
    return [...this._regiones];
  }
  constructor(private http: HttpClient) { }

  baseUrl: string = 'https://restcountries.com/v2/region/'
  fronteraUrl: string = 'https://restcountries.com/v3.1/alpha'

  getPaisesRegion(region: string):Observable<Country[]> {
    return this.http.get<Country[]>(`${this.baseUrl}/${region}?fields=cioc,name`);
  }


  getFronteras(pais: string):Observable<Country | null >  {

    if(!pais){
      return of (null);
    }
    
   
    console.log('Front: ', pais.toLowerCase())
    
    return this.http.get<Country>(`${this.fronteraUrl}/${pais}?fields=cioc,name,borders`);
  }

}
