import { Component, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { LugaresCercanosService } from './lugaresCercanos.service';
import { Respuesta } from 'src/app/interfaces/tours.interface';
import { environment } from 'src/enviroments/environment';

SwiperCore.use([Navigation, Pagination, Autoplay]);

@Component({
  selector: 'app-lugares-cercanos',
  templateUrl: './lugares-cercanos.component.html',
  styleUrls: ['./lugares-cercanos.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class LugaresCercanosComponent {

  constructor( private lugaresCercanosService: LugaresCercanosService){}
  url= `${environment.urlBase}/images/`;

  ngOnInit() { 
    this.showTours();
  }

  respuesta: Respuesta [] =[];

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


  showTours(){
    this.lugaresCercanosService.showTours().subscribe((resp) => {
      console.log(resp);
      this.respuesta = resp.respuesta;
      console.log(this.respuesta)
    })
  }


}
