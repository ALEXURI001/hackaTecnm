import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Grupo, respIA } from 'src/app/interfaces/ia.interface';
import { environment } from 'src/enviroments/environment';

@Injectable({
  providedIn: 'root'
})
export class TucansitoGuiaService {


  urlIA = environment.urlIA
  url= environment.urlBase


  constructor(private http: HttpClient) {
   }


   obtenerGrupo(id: number){
    return this.http.get<Grupo>(`${this.url}/grupos/3`)
   }

  //  askIA(body:any){
  //   console.log(body)
  //   return this.http.post<respIA>(`${this.urlIA}/ai/converse`, body )

  //  }

  conversaTucan(body:any){
    
    return this.http.post<any>(`${this.url}/tucansito/openIA`, body).pipe(
      map(resp=>{
        return resp;
  
      })
    )
        
  }



}
