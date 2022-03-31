import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Heroes } from '../interfaces/heroes.interface';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private http: HttpClient) { }

  private baseUrl:string= environment.baseUrl;
  getHeroes():Observable<Heroes[]>{
    return this.http.get<Heroes[]>(`${this.baseUrl}/heroes`);
  }

  getHeroe(id:string):Observable<Heroes>{
    return this.http.get<Heroes>(`${this.baseUrl}/heroes/${id}`);
  }

  getSugerencias(termino:string):Observable<Heroes[]>{
    return this.http.get<Heroes[]>(`${this.baseUrl}/heroes?q=${termino}&_limit=6`);
  }

  agregarHeroe(heroe:Heroes):Observable<Heroes>{
    return this.http.post<any>(`${this.baseUrl}/heroes/`,heroe);
    
  }

  actualizarHeroe(heroe:Heroes):Observable<Heroes>{
    return this.http.put<any>(`${this.baseUrl}/heroes/${heroe.id}`,heroe);
    
  }

  eliminarHeroe(id:string):Observable<any>{
    return this.http.delete<any>(`${this.baseUrl}/heroes/${id}`);
    
  }
}


