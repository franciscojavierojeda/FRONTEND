import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Universidad } from '../interfaces/universidad.interface';

@Injectable({
  providedIn: 'root'
})
export class BuscadorService {

  constructor(private http: HttpClient) { }

  getUniversidades(pais: string): Observable<Universidad[]> {
    return this.http.get<Universidad[]>(`http://universities.hipolabs.com/search?country=${pais}`);
  }

  getUniversidadesSugeridas(pais: string, name:string): Observable<Universidad[]> {
    return this.http.get<Universidad[]>(`http://universities.hipolabs.com/search?country=${pais}&name=${name}`);
  }
}
