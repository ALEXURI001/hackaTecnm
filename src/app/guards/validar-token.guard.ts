import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ValidarTokenGuard implements CanActivate {

  constructor( private auth: AuthService, private router: Router){


  }

  canActivate(): Observable <any> | any  {
    
    return true/*this.auth.validarToken()
    .pipe(
      tap(resp =>{

        if(!resp.status){
          this.router.navigateByUrl('/auth');
        }

      })
    )*/
  }
  
}
