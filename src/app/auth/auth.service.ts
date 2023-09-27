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

  url = `${environment.urlBase}/api/auth/login`

  login(NombreUsuario : string,  Contrasena: string){

    const body = {NombreUsuario, Contrasena}
    console.log(body);
    
    return this.http.post<Login>(this.url,body)

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

}
