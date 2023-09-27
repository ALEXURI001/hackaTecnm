import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent {

  constructor(private router: Router, private auth: AuthService){}

  ngOnInit(): void {
    
    setTimeout(()=>{

      const token =  localStorage.getItem("token");

    if(token){

        this.auth.validarToken().subscribe(
          resp=>{

              if(resp.status){
                localStorage.setItem('token', resp.accessToken!);
                localStorage.setItem('id',resp.admin?._id!);
                localStorage.setItem('menu',JSON.stringify(resp.menu));
                                this.router.navigateByUrl("/dashboard")
              }

              else this.router.navigateByUrl("/auth")
          }
        )

    }

    else this.router.navigateByUrl("/auth")

    }, 500)

}


}
