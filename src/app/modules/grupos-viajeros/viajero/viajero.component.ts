import { HttpClient } from '@angular/common/http';
import { Component, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { ViajeroService } from './viajero.service';
import { Resultado } from 'src/app/interfaces/usuariosAll.interface';
import { environment } from 'src/enviroments/environment';
import { GruposViajerosService } from '../grupos-viajeros.service';

interface City {
  name: string;
}
SwiperCore.use([Navigation, Pagination, Autoplay]);



@Component({
  selector: 'app-viajero',
  templateUrl: './viajero.component.html',
  styleUrls: ['./viajero.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class ViajeroComponent {
  visible: boolean = false;

  cities!: City[];
  url= `${environment.urlBase}/images/viajeros/`;
  selectedCity!: City;

  resultados: Resultado[] = [];

    constructor(
      private viajeroService: ViajeroService,
      private gruposViajerosService: GruposViajerosService,
      ) { }

  ngOnInit() { 
    this.cities = this.gruposViajerosService.getEstados();
    this.showUser();
  }


  
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


  showUser(){
    this.viajeroService.viewUsers().subscribe(
      (resp) => {
          this.resultados = resp.resultado;
          console.log(this.resultados);
      }
      )
    
  }

  filter(){
    this.viajeroService.filter(this.selectedCity.name).subscribe(
      (resp) =>{
        console.log(resp);
        this.resultados = resp.resultado;
        console.log(this.resultados);
        

      }
    )
  }

  showTraveler() {
      this.visible = true;
  }
}
