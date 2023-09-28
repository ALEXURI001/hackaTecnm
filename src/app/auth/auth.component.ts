import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import Swal from 'sweetalert2';
import { Login } from './auth.interface';
interface City {
  name: string;
}
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {


  visible: boolean = false;
  countries!: any[];

  selectedCountry!: string;

  cities!: City[];

  selectedCity!: City;




  ngOnInit() {
    this.cities = [
      {name: 'Aguascalientes'},
      {name: 'Baja California'},      
      {name: 'Baja California Sur'},
      {name: 'Campeche'},
      {name: 'Coahuila'},
      {name: 'Colima'},
      {name: 'Chiapas'},
      {name: 'Chihuahua'},
      {name: 'Durango'},
      {name: 'Distrito Federal'},
      {name: 'Guanajuato'},
      {name: 'Guerrero'},
      {name: 'Hidalgo'},
      {name: 'Jalisco'},
      {name: 'México'},
      {name: 'Michoacán'},
      {name: 'Morelos'},
      {name: 'Nayarit'},
      {name: 'Nuevo León'},
      {name: 'Oaxaca'},
      {name: 'Puebla'},
      {name: 'Querétaro'},
      {name: 'Quintana Roo'},
      {name: 'San Luis Potosí'},
      {name: 'Sinaloa'},
      {name: 'Sonora'},
      {name: 'Tabasco'},
      {name: 'Tamaulipas'},
      {name: 'Tlaxcala'},
      {name: 'Veracruz'},
      {name: 'Yucatán'},
      {name: 'Zacatecas'},
  ];
  }

  constructor(
    private router: Router,
    private authService: AuthService
    ){}

    username: string ="";
    password: string ="";

    //USUARIO NUEVO
    nombres: string = "";
    apellidos: string = "";
    nombreUsuario: string = "";
    contrasena: string = "";
    descripcion: string = "";
    destino!: City ;
    visibleBusqueda: boolean = false;
    

    showRegister() {
        this.visible = true;
    }
    login(){
      this.authService.login(this.username, this.password).subscribe(
            resp =>{
          console.log(resp);
          if(resp.status){
            localStorage.setItem('idUser', `${resp.user.id}`);
            this.authService.idUser = resp.user.id;

            console.log("PRINTING ANSWEEER: ");
            console.log(resp);
            console.log(this.authService.idUser);
            
  
            localStorage.setItem('token', resp.token);
            localStorage.setItem('usuario', resp.user.nombreUsuario);

            
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: `Bienvenido`,
              showConfirmButton: false,
              timer: 1500
              
            })
            
            this.router.navigateByUrl('/dashboard');
  
          }
          else{
            Swal.fire({
              position: 'center',
              icon: 'error',
              title: `${resp.message}`,
              showConfirmButton: false,
              timer: 1500
            })
          }
  
  
  
        }, error =>{
          console.log(error);
          
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: `${error.error.message}`,
            showConfirmButton: false,
            timer: 1500
          })
          
        }
      )
  
    }

    registerUser(){

      this.authService.registerUser(this.nombres, this.apellidos, this.nombreUsuario, this.contrasena, this. descripcion, this.destino.name, this.visibleBusqueda).subscribe(
        resp => {
          console.log(resp);
          if(resp.status) {
            Swal.fire({
            icon: 'success',
            title: '¡Usuario creado con éxito!',
            showConfirmButton: false,
            timer: 1500
          })
          this.visible = false;
        }
          else{
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: '¡Error al crear el usuario!',
            })
          }
          
        }
      )
    }


 
}
