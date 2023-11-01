import { Component, ViewEncapsulation } from '@angular/core';
import { GruposService } from './grupos.service';
import { Datos } from 'src/app/interfaces/grupos.interface';
import { Usuario } from 'src/app/interfaces/modalGroup';
import { AuthService } from 'src/app/auth/auth.service';
import Swal from 'sweetalert2';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Router } from '@angular/router';
import { GruposViajerosService } from '../grupos-viajeros.service';
interface City {
  name: string;
}

SwiperCore.use([Navigation, Pagination, Autoplay]);

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class GruposComponent {
  visible: boolean = false;
  valorSala: number = 0;
  visible2: boolean = false;
  visible3: boolean = false;
  grupos: Datos[] = [];
  cities!: City[];

  idSala: string = "";
  selectedCity!: City;
  //DATOS GRUPO
  nombreGrupo: string = "";
  destino: string = "";
  usuarios!: Usuario[]
  nombre: string = "";

  viewChat!: boolean;



  ngOnInit() {
    this.cities = this.gruposViajerosService.getEstados();
    this.showAllGroups();
  }
  constructor(
    private gruposService: GruposService,
    private authService: AuthService,
    private router: Router,
    private gruposViajerosService: GruposViajerosService,
  ) { }


  swiperConfig: any = {
    effect: 'coverflow',
    autoplay: true,
    slidesPerView: 3,
    coverflowEffect: {
      slideShadows: false,
      rotate: 50,
      stretch: 0,
      modifier: 1
    },
    navigation: true,
    pagination: { clickable: true },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      940: {
        slidesPerView: 3,
        spaceBetween: 10
      }
    }
  }

  showAllGroups() {
    this.gruposService.showGroups().subscribe((respon) => {

      this.grupos = respon.resp;
      console.log(this.grupos);
    })
  }


  showgroup(grupos: number) {

    this.gruposService.showGroup(grupos).subscribe((resp) => {
      console.log(resp.resp.nombre);
      this.nombreGrupo = resp.resp.nombre;
      this.destino = resp.resp.destino;
      this.usuarios = resp.resp.usuarios;

      this.valorSala = grupos;

    })
    localStorage.setItem("idSala", this.valorSala.toString());

    this.visible = true;
  }

  showRegisterGroup() {
    this.visible2 = true;

  }

  registerGroup() {
    let arregloId = [];
    arregloId.push(Number(localStorage.getItem('idUser')));
    console.log(localStorage.getItem('idUser'));

    this.gruposService.registerGroup(this.nombre, this.selectedCity.name, arregloId).subscribe((resp) => {
      console.log(resp);
    });
  }

  unirse(grupos: number) {

    let arregloId: number[] = []

    this.usuarios.forEach(element => {

      arregloId.push(element.id);

    });
    arregloId.push(Number(localStorage.getItem('idUser')));



    this.gruposService.unirse(grupos, arregloId).subscribe((resp) => {
      if (resp) {



        Swal.fire({
          position: 'center',
          icon: 'success',
          title: `Gracias por unirte`,
          showConfirmButton: false,
          timer: 1500

        })
        localStorage.removeItem('idUser')

      }
      else {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: `Error al unirse`,
          showConfirmButton: false,
          timer: 1500
        })
      }

    });
  }

  messages() {

    this.router.navigateByUrl(`/dashboard/chatGrupal/${this.valorSala}`)
    console.log(this.valorSala);


  }


  showChat() {
    this.viewChat = true;
    localStorage.removeItem('idSala');
    localStorage.setItem("idSala", this.valorSala.toString());
   
}
}
