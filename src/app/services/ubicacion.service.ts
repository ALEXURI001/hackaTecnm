import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UbicacionService {


  latitude: any =''
  longitude: any=''


  constructor() { }

  obtenerCoordenadas(){

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
         this.latitude = position.coords.latitude;
         this.longitude = position.coords.longitude;
        console.log('Latitud:', this.latitude);
        console.log('Longitud:', this.longitude);
      }, (error) => {
        console.error('Error al obtener las coordenadas:', error);
      });
    } else {
      console.error('La geolocalización no está disponible en este navegador.');
    }

  }



}
