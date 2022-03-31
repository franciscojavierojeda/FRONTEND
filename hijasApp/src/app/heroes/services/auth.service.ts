import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Auth } from '../../auth/interfaces/auth.interface';
import { Observable, tap,of, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _auth:Auth | undefined;

  get auth(): Auth{
    return {... this._auth!};
  }
  constructor(private http:HttpClient) { }
  private baseUrl:string= environment.baseUrl;

verificaAutenticacion():Observable<boolean>{
  if(!localStorage.getItem('id')){
    return of (false);
  }
  return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`)
  .pipe(
    map(auth => {
      this._auth=auth
      return true
    })
  );

}

  login(){
    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`)
    .pipe(
      tap(
        resp=> this._auth=resp
      ),
      tap(
        rep=> localStorage.setItem('id',rep.id)
      )
    )
  }

  logout(){

  }
}
