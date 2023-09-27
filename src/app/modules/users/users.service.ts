import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/enviroments/environment';
import { Root } from './users.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {


constructor(private http: HttpClient) { }

Usuarios() {
  const url = `${environment.urlBase}/api/auth/allAnalist`;
  return this.http.get<Root>(url);
}

UpdateUser(Analista_ID:number, Nombre:string,EsAdmin:number, NombreUsuario:string){
  const body = {Analista_ID, Nombre,EsAdmin, NombreUsuario}
  const url = `${environment.urlBase}/api/auth/update`;
  return this.http.post<Root>(url, body);
}

UpdatePassword(Analista_ID:Number,Contrasena: String){
  const body = {Analista_ID,Contrasena}
  const url = `${environment.urlBase}/api/auth/updatePassword`;
  return this.http.post<Root>(url, body);
}

RegisterUser(Nombre:string, EsAdmin:number, NombreUsuario:string, Contrasena: String){
  const body = {Nombre, EsAdmin, NombreUsuario, Contrasena};
  const url = `${environment.urlBase}/api/auth/register`;
  return this.http.post<Root>(url, body);
}

DeleteUser(Analista_ID: number, Activo: number){
  const body = {Analista_ID, Activo};
  const url = `${environment.urlBase}/api/auth/deleteUser`;
  return this.http.post<Root>(url, body);
}



}
