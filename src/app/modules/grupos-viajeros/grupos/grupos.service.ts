import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Grupo } from 'src/app/interfaces/grupos.interface';
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

}
