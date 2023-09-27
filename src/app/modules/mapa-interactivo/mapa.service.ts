import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs';
import { GetLugares } from 'src/app/interfaces/lugares.interface';
import { environment } from 'src/enviroments/environment';

@Injectable({
  providedIn: 'root'
})
export class MapaService {

  constructor(
    private http: HttpClient
  ) { }

    url= environment.urlBase

  getLugares (){
    return this.http.get<GetLugares>(`${this.url}/lugares`).pipe(
      map(resp=>{

          resp.resultado.forEach(element => {
              element.latitud = parseFloat(element.latitud);
              element.longitud = parseFloat(element.longitud);
          });
          

        return resp;

      })
    )
  }


}
