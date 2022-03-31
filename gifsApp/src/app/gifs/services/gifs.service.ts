import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchGifs, Gif } from '../interface/gifs.interface';
import { query } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = 'KMkUckdMicaZ3Jq905QRnhkNUzFLupK9';
  private _historial: string[] = [];
  private servicioUrl:string='https://api.giphy.com/v1/gifs';

  public resultado: Gif[] = [];


  get historial(): string[] {
    this._historial = this._historial.splice(0, 9);
    return [...this._historial];
  }

  constructor(private http: HttpClient) {

    //localStorage.getItem('historial');

    this._historial=JSON.parse(localStorage.getItem('historial')!);
    this.resultado=JSON.parse(localStorage.getItem('resultados')!);

    
   }

  buscarGifs(query: string) {

    query = query.trim().toLocaleLowerCase();
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);

      localStorage.setItem('historial',JSON.stringify(this._historial));
    }
    console.log(this._historial);

    const  params= new HttpParams().set('api_key',this.apiKey).set('limit','10').set('q',query);

    console.log(params.toString());


    this.http.get<SearchGifs>(`${this.servicioUrl}/search`,{params})
      .subscribe((arg: SearchGifs) => {
        console.log(arg.data);
        this.resultado = arg.data;
        localStorage.setItem('resultados',JSON.stringify(this.resultado));

      });

  }

}
