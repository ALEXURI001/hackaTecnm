import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/enviroments/environment';
import { Archivo } from '../interfaces/archivos.interface';

@Injectable({
  providedIn: 'root'
})
export class ArchivosService {

  constructor(private http: HttpClient) { }

filter(id: string,file: any){
  const url= `${environment.urlBase}/images/${id}`;
  console.log(file);
  return this.http.post<Archivo>(url,file)
}

}
