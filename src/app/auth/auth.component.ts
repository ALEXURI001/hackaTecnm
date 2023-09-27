import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {


  countries!: any[];

  selectedCountry!: string;

  ngOnInit() {
  
  }

  constructor(
    private router: Router,
    private authService: AuthService
    ){}

    username: string ="";
    password: string ="";


    login(){
      this.authService.login(this.username, this.password).subscribe(
        resp=>{
          console.log(resp);
          if(resp.status){
            console.log("PRINTING ANSWEEER: ");
            console.log(resp);
  
  
            localStorage.setItem('token', resp.accessToken!);

            
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

}
