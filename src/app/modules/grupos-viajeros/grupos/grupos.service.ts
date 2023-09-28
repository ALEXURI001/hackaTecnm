import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TableBody } from 'primeng/table';
import { Grupo } from 'src/app/interfaces/grupos.interface';
import { Chat } from 'src/app/interfaces/ia.interface';
import { ModalGroup } from 'src/app/interfaces/modalGroup';
import { environment } from 'src/enviroments/environment';

@Injectable({
  providedIn: 'root'
})
export class GruposService {

constructor(private http: HttpClient) { }


showGroups(){
  const url= `${environment.urlBase}/grupos`;
  return this.http.get<Grupo>(url)
}

showGroup(id: number){
  const url= `${environment.urlBase}/grupos/${id}`;
  return this.http.get<ModalGroup>(url)
}

registerGroup(nombre: string, destino: string, usuarios: number []){
  const url= `${environment.urlBase}/grupos`
  const body = {nombre, destino, usuarios}
  console.log(body);
  return this.http.post(url, body)
}

nuevoMensaje(id: number, msj:Chat){
  const url= `${environment.urlBase}/grupos/msg/${id}`;
  return this.http.post(url, msj)
}

unirse(id: number, usuarios: number []){
  const url= `${environment.urlBase}/grupos/${id}`
  const body = {usuarios};
  console.log(body);
  
  return this.http.patch(url,body)

}

}
