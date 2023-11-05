import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { environment } from 'src/enviroments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor(private http: HttpClient) { }


getUsers(id:string){
  const url= `${environment.urlBase}/usuarios/${id}`;
  return this.http.get<User>(url)
}

}
