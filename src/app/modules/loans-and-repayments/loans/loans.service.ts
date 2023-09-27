import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/enviroments/environment';
import { RespuestaBuscarUser } from './loans.interface';

@Injectable({
  providedIn: 'root'
})
export class LoansService {

  constructor(private http: HttpClient) { }

  buscarUser(body: object) {
    const url = `${environment.urlBase}/api/users/control/${body}`;
    return this.http.get<RespuestaBuscarUser>(url);
  }

  saveDate(fechaSalida:string, fechaEntrega:string) {
    const body = {fechaEntrega, fechaSalida};
    const url = `${environment.urlBase}/api/users`;
    return this.http.post<RespuestaBuscarUser>(url, body);
  }

}
/*

   buscarUser(noControl: string) {
        const url = `${environment.urlBase}/api/users/control/${noControl}`;
        return this.http.get<RespuestaBuscarUser>(url);
    }


    saveCard(id:string,card: string){
        const body = {id, card};
        const url = `${environment.urlBase}/api/users/card`;
        return this.http.post<RespuestaBuscarUser>(url, body);
    }

*/
