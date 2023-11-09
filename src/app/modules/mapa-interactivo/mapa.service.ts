import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs';
import { GetLugares } from 'src/app/interfaces/lugares.interface';
import { environment } from 'src/enviroments/environment';
import OpenAI from "openai";

const openai = new OpenAI({apiKey:'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', dangerouslyAllowBrowser: true });

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


  getPosition(): Promise<any> {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resp => {
                resolve({lng: resp.coords.longitude, lat: resp.coords.latitude});
            },
            err => {
                reject(err);
          });
    });
}


getInfoLugarOPENIA (body:any){
  return this.http.post<any>(`${this.url}/lugares/openIA`, body).pipe(
    map(resp=>{
      return resp;

    })
  )
}


}

