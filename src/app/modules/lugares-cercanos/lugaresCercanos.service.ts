import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tours } from 'src/app/interfaces/tours.interface';
import { environment } from 'src/enviroments/environment';

@Injectable({
  providedIn: 'root'
})
export class LugaresCercanosService {

constructor(private http: HttpClient) { }

showTours(){
  const url= `${environment.urlBase}/lugares/tipo`;
 
  return this.http.post<Tours>(url,{tipo:'Tours'})
}

}
