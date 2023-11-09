import { Component } from '@angular/core';
import { UserService } from './user.service';
import { Resultado } from 'src/app/interfaces/user.interface';
import { environment } from 'src/enviroments/environment';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';


interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  sidebarVisible4: boolean = true;

  status: boolean = false;
  nameUser: string = '';
  lastUser: string = '';
  fromUser: string = '';
  photo: string = '';
  age!: number;
  url= `${environment.urlBase}/images/viajeros/`;
  langs: string[] = [];
  cities!: City[];

  selectedCity!: string;
  constructor(
    private router: Router,

    private userService: UserService,
    private translate: TranslateService) {
      this.translate.use('en');
      this.translate.setDefaultLang('en');
      translate.addLangs(['en', 'es']);
      this.langs = this.translate.getLangs();
  }
  ngOnInit() {
    this.getUser();
    this.cities = [
      { name: 'Español', code: 'es' },
      { name: 'Ingles', code: 'en' },
  ];
  }

  selectLang(){
    this.translate.use(this.selectedCity);
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
      console.log(resp);
      
      this.nameUser = resp.Resultado.nombres;
      this.lastUser = resp.Resultado.apellidos;
      this.fromUser = resp.Resultado.destino;
      this.photo = resp.Resultado.imagen;
      this.age = resp.Resultado.edad;
      this.status = resp.Resultado.status;
    });
  }
}
