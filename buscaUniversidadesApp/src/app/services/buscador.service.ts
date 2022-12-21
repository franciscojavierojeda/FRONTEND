import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { League } from '../interfaces/universidad.interface';

@Injectable({
  providedIn: 'root'
})
export class BuscadorService {

  constructor(private http: HttpClient) { }
  getAllLeagues(): Observable<League[]> {
    return this.http.get<any[]>(`https://www.thesportsdb.com/api/v1/json/2/all_leagues.php?s=Soccer`);
  }

  getUniversidadesSugeridas(pais: string, name: string): Observable<League[]> {
    return this.http.get<any[]>(`https://www.thesportsdb.com/api/v1/json/2/all_leagues.php?c=${pais}`);
  }
}
