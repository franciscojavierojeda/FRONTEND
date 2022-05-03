import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }

  getUsuarios():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(`http://localhost:3000/usuarios`);
  }

  anadirUsuario(usuario:Usuario):Observable<Usuario[]>{
    return this.http.post<Usuario[]>(`http://localhost:3000/usuarios/`,usuario);
  }

  eliminarUsuario(usuario:Usuario):Observable<Usuario[]>{
    return this.http.delete<Usuario[]>(`http://localhost:3000/usuarios/${usuario.id}`);
  }

  getUsuario(usuario:Usuario):Observable<Usuario>{
    return this.http.get<Usuario>(`http://localhost:3000/usuarios/${usuario.id}`);
  }

  modificarUsuario(usuario:Usuario):Observable<Usuario>{
    return this.http.put<Usuario>(`http://localhost:3000/usuarios/${usuario.id}`,usuario);
  }
}
