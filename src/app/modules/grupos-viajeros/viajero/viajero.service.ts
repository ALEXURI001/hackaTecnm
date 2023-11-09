import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { Viajero } from 'src/app/interfaces/usuariosAll.interface';
import { environment } from 'src/enviroments/environment';

@Injectable({
  providedIn: 'root'
})
export class ViajeroService {
  constructor(private http: HttpClient) { }

  viewUsers(){
    const url= `${environment.urlBase}/usuarios`;
    return this.http.get<Viajero>(url)
  }



  filter(destino: string){
    const url= `${environment.urlBase}/usuarios/destino/`;
    const body = {destino}
    console.log(url);
    return this.http.post<Viajero>(url,body)
  }

  updateStatus(id: string, status: boolean){
    const url= `${environment.urlBase}/usuarios/${id}/`;
    const body = {status}
    console.log(url);
    return this.http.patch<Viajero>(url,body)
  }

}
