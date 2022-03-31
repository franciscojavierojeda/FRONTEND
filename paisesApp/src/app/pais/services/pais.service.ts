import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrlPais: string = 'https://restcountries.com/v2';
  private apiUrlCapital: string = 'https://restcountries.com/v2';
 // private filtro: string='?fields=name,capital,alpha2code,flag,population';

  get httpParams(){
    return new HttpParams().set('fields','name,capital,alpha2Code,flag,population');
  }
  constructor(private http: HttpClient) { }

  buscarPais(termino: string): Observable<Country[]> {
    const url = `${this.apiUrlPais}/name/${termino}`;
    return this.http.get<Country[]>(url,{params:this.httpParams});
    
  }

  buscarCapital(termino: string): Observable<Country[]>{
    const url= `${this.apiUrlCapital}/capital/${termino}`;

    return this.http.get<Country[]>(url,{params:this.httpParams});
  }

  
  getPais(id: string): Observable<Country[]>{
    const url= `${this.apiUrlCapital}/alpha/${id}`;

    return this.http.get<Country[]>(url);
  }

  buscarRegion(id:string):Observable<Country[]>{
    const url= `${this.apiUrlCapital}/regionalbloc/${id}`;
    return this.http.get<Country[]>(url,{params:this.httpParams}).
    pipe(
      tap(console.log)
    )
  }
}
