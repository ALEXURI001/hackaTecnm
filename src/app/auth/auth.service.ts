import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';

import { Login } from './auth.interface';
import { environment } from 'src/enviroments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }


  login(NombreUsuario : string,  Contrasena: string){
    const url = `${environment.urlBase}/api/auth/login`

    const body = {NombreUsuario, Contrasena}
    console.log(body);
    
    return this.http.post<Login>(url,body)

  }





  validarToken (): Observable<any> {

    const url= `${environment.urlBase}/api/auth/renew`;

    return this.http.get<Login> (url)
    .pipe(
      map(resp=>{
        
        return resp;

      }),
      catchError(err => of(false))
    )
    ;
  }

  registerUser(nombres: string, apellidos: string,  nombreUsuario : string,  contrasena: string, descripcion: string, destino: string, permitirBuscar: boolean){
    const url= `${environment.urlBase}/usuarios`;
    const body = {nombres, apellidos, nombreUsuario, contrasena, descripcion, destino, permitirBuscar}
    console.log(body);
    
    return this.http.post<Login>(url,body)

  }



}
