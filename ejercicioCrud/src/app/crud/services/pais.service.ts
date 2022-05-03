import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(private http:HttpClient) { }

  getPaises():Observable<Country[]>{
    return this.http.get<Country[]>(`
    https://restcountries.com/v3.1/all`);
  }
}
