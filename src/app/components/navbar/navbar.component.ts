import { Component } from '@angular/core';
import { UserService } from './user.service';
import { Resultado } from 'src/app/interfaces/user.interface';
import { environment } from 'src/enviroments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  sidebarVisible4: boolean = true;

  nameUser: string = '';
  lastUser: string = '';
  fromUser: string = '';
  photo: string = '';
  age!: number;
  url= `${environment.urlBase}/images/viajeros/`;

  constructor(
    private userService: UserService,
    private router: Router,
    ){
  }
  ngOnInit() {
    this.getUser();
  }


  exit(){
    localStorage.removeItem('idUser');
    localStorage.removeItem('usuario');
    localStorage.removeItem('idSala');
    localStorage.removeItem('token');
    this.router.navigateByUrl(`/auth`)


  }

  getUser(){
    const idUser = JSON.parse(localStorage.getItem('idUser')!);
    this.userService.getUsers(idUser).subscribe((resp) => {
      this.nameUser = resp.Resultado.nombres;
      this.lastUser = resp.Resultado.apellidos;
      this.fromUser = resp.Resultado.destino;
      this.photo = resp.Resultado.imagen;
      this.age = resp.Resultado.edad;
    });
  }
}
